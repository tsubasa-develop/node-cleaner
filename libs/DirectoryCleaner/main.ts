import packageJson from "../../package.json";
import { Interactive, block2unitByte, exec } from "./utilities/main";

type CleanerOptions = {
  root: string;
  limit: number;
  forceMode: boolean;
  suMode: boolean;
  checkMode: boolean;
  version: boolean;
};

type CleanerTarget = {
  size: number;
  formatSize: string;
  path: string;
};

export class DirectoryCleaner {
  private target: string = "";
  private config: CleanerOptions;
  private targets: CleanerTarget[] = [];
  private effectiveTargets: CleanerTarget[] = [];
  private completeTargets: CleanerTarget[] = [];
  constructor(target: string, config: Partial<CleanerOptions>) {
    this.target = target;
    this.config = {
      // オプション初期値
      ...{
        root: ".",
        limit: 5,
        forceMode: false,
        suMode: false,
        checkMode: false,
        version: false,
      },
      ...config,
    };
  }
  // 実行メソッド
  public async run(): Promise<void> {
    // バージョン表示
    if (this.config.version) return console.log(`v${this.version}`);
    // メイン処理
    console.log(`${this.config.root} 内を検索します。`);
    this.search();
    console.log("");
    console.log("○ 検索結果");
    this.showList();
    console.log(`● 全${this.length}件の${this.target}を検出しました。`);
    console.log(`● 合計サイズは${this.totalSize}です。`);
    // 確認モードの場合は終了
    if (this.config.checkMode) return;
    // 削除実行
    await this.scanning();
    // 結果表示
    this.showResult();
  }
  // 検索
  private search(): CleanerTarget[] {
    this.targets = exec.getTargetDirsWithSize(this.config.root, this.target, this.config.suMode);
    this.effectiveTargets = this.targets;
    // limitが設定されている場合は上位limit件のみに絞る
    if (this.config.limit > -1) {
      this.effectiveTargets = this.effectiveTargets.slice(0, this.config.limit);
    }
    return this.targets;
  }
  // 一覧表示
  private showList(): void {
    console.log("● 対象一覧");
    // // 確認モードなら全件一覧表示
    if (this.config.checkMode) {
      for (const target of this.targets) {
        console.log(`  - ${target.path} (${target.formatSize})`);
      }
    } else {
      for (const target of this.effectiveTargets) {
        console.log(`  - ${target.path} (${target.formatSize})`);
      }
      if (this.length > this.effectiveLength) console.log(`  ...他${this.length - this.effectiveLength}件`);
    }
  }
  // 反復して削除処理
  private async scanning(): Promise<void> {
    if (this.config.limit > -1 && this.config.limit < this.length) {
      console.log(`● サイズ容量上位${this.config.limit}件のみを対象とします。`);
    }
    console.log("");
    for await (const [index, target] of Object.entries(this.effectiveTargets)) {
      // 強制モードの場合は確認なしで削除
      if (this.config.forceMode) {
        this.delete(target);
      } else {
        console.log(`(${Number(index) + 1}/${this.effectiveLength}) ${target.path} (${target.formatSize})を削除しますか？`);
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
  private delete(target: CleanerTarget): void {
    exec.delete(target.path, this.config.suMode);
    this.completeTargets.push(target);
    console.log(`削除しました。${target.path}`);
  }
  // 結果表示
  public showResult(): void {
    console.log("○ 削除結果");
    console.log(`● 削除対象：${this.length}件（${this.totalSize}）`);
    console.log(`● 削除済み：${this.completeLength}件（${this.completeTotalSize}）`);
  }
  get length(): number {
    return this.targets.length;
  }
  get totalSize(): string {
    return block2unitByte(this.targets.reduce((acc, v) => acc + Number(v.size), 0));
  }
  get effectiveLength(): number {
    return this.effectiveTargets.length;
  }
  get effectiveTotalSize(): string {
    return block2unitByte(this.effectiveTargets.reduce((acc, v) => acc + Number(v.size), 0));
  }
  get completeLength(): number {
    return this.completeTargets.length;
  }
  get completeTotalSize(): string {
    return block2unitByte(this.completeTargets.reduce((acc, v) => acc + Number(v.size), 0));
  }
  get version(): string {
    return packageJson.version;
  }
}
