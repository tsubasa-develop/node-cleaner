import { Interactive, block2unitByte, exec } from "../libs/utilities/main";

type NodeCleanerOptions = {
  root: string;
  limit: number;
  forceMode: boolean;
  suMode: boolean;
  checkMode: boolean;
};

export class NodeCleaner {
  private config: NodeCleanerOptions;
  private targets: { size: number; formatSize: string; path: string }[] = [];
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
    console.log(`${this.length}件のnode_modulesを検出しました。合計サイズは${this.totalSize}です。\n`);
    this.scanning();
  }
  // node_modules検索
  private search(): { size: number; formatSize: string; path: string }[] {
    this.targets = exec.getTargetDirsWithSize(this.root, "node_modules");
    return this.targets;
  }
  // 反復して削除処理
  private async scanning(): Promise<void> {
    for await (const [index, target] of Object.entries(this.targets)) {
      console.log(`【${Number(index) + 1}/${this.targets.length}】${target.path} (${target.formatSize})を削除しますか？`);
      if (await Interactive.confirm("> ")) {
        exec.delete(target.path);
        console.log("削除しました。");
      } else {
        console.log("スキップしました。");
      }
      console.log("");
    }
  }
  get length(): number {
    return this.targets.length;
  }
  get totalSize(): string {
    return block2unitByte(this.targets.reduce((acc, v) => acc + Number(v.size), 0));
  }
}
