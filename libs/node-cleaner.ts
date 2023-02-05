import { Interactive, block2unitByte, exec } from "../libs/utilities/main";

type NodeCleanerOptions = {
  root: string;
  limit: number;
  forceMode: boolean;
  suMode: boolean;
  checkMode: boolean;
};

type NodeCleanerTarget = {
  size: number;
  formatSize: string;
  path: string;
};

export class NodeCleaner {
  private config: NodeCleanerOptions;
  private targets: NodeCleanerTarget[] = [];
  private completeTargets: NodeCleanerTarget[] = [];
  constructor(config: Partial<NodeCleanerOptions>) {
    this.config = {
      // オプション初期値
      ...{
        root: ".",
        limit: 5,
        forceMode: false,
        suMode: false,
        checkMode: false,
      },
      ...config,
    };
  }
  // メイン処理
  public async run(): Promise<void> {
    console.log("node cleaner スタート");
    this.search();
    console.log(`${this.length}件のnode_modulesを検出しました。合計サイズは${this.totalSize}です。`);
    // 確認モードの場合は終了
    if (this.config.checkMode) return;
    if (this.config.limit > -1 && this.config.limit < this.length) {
      console.log(`サイズ容量上位${this.config.limit}件のみを対象とします。`);
    }
    console.log("");
    // 削除実行
    await this.scanning();
    // 結果表示
    this.showResult();
  }
  // node_modules検索
  private search(): NodeCleanerTarget[] {
    this.targets = exec.getTargetDirsWithSize(this.config.root, "node_modules", this.config.suMode);
    // limitが設定されている場合は上位limit件のみに絞る
    if (this.config.limit > -1) {
      this.targets = this.targets.slice(0, this.config.limit);
    }
    return this.targets;
  }
  // 反復して削除処理
  private async scanning(): Promise<void> {
    for await (const [index, target] of Object.entries(this.targets)) {
      // 強制モードの場合は確認なしで削除
      if (this.config.forceMode) {
        this.delete(target);
      } else {
        console.log(`【${Number(index) + 1}/${this.targets.length}】${target.path} (${target.formatSize})を削除しますか？`);
        if (await Interactive.confirm("> ")) {
          this.delete(target);
        } else {
          console.log("スキップしました。");
        }
        console.log("");
      }
    }
    if (this.config.forceMode) console.log("");
  }
  // 削除
  private delete(target: NodeCleanerTarget): void {
    exec.delete(target.path, this.config.suMode);
    this.completeTargets.push(target);
    console.log(`削除しました。${target.path}`);
  }
  // 結果表示
  public showResult(): void {
    console.log("削除結果");
    console.log(`削除対象：${this.length}件（${this.totalSize}）`);
    console.log(`削除済み：${this.completeLength}件（${this.completeTotalSize}）`);
  }
  get length(): number {
    return this.targets.length;
  }
  get totalSize(): string {
    return block2unitByte(this.targets.reduce((acc, v) => acc + Number(v.size), 0));
  }
  get completeLength(): number {
    return this.completeTargets.length;
  }
  get completeTotalSize(): string {
    return block2unitByte(this.completeTargets.reduce((acc, v) => acc + Number(v.size), 0));
  }
}
