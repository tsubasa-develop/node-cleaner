import { execSync } from "child_process";
import { Interactive, block2unitByte } from "./utility";

const targetDir: string = (process.argv[2] as string) || ".";

// node_modulesを検索する
console.log("node_modules 検索中...");
const stdout = execSync(`find ${targetDir} -name "node_modules" -type d -prune | xargs du -s | sort -h -r`);
const nodeModulesTargets = (() => {
  const lines = stdout
    .toString()
    .split("\n")
    .filter((v) => v)
    .map((v) => v.trim());
  return lines.map((line) => {
    const [size, path] = line.split("\t");
    return { size: Number(size), formatSize: block2unitByte(Number(size)), path };
  });
})();
const totalSize = block2unitByte(nodeModulesTargets.reduce((acc, v) => acc + Number(v.size), 0));

console.log(`${nodeModulesTargets.length}件のnode_modulesを検出しました。合計サイズは${totalSize}です。`);
console.log("");

// 対話式に削除するかどうかを確認する
(async () => {
  for await (const [index, target] of Object.entries(nodeModulesTargets)) {
    console.log(`【${Number(index) + 1}/${nodeModulesTargets.length}】${target.path} (${target.formatSize})を削除しますか？`);
    if (await Interactive.confirm("> ")) {
      execSync(`rm -rf ${target.path}`);
      console.log("削除しました。");
    } else {
      console.log("スキップしました。");
    }
    console.log("");
  }
})();
