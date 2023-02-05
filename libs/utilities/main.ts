import readline from "readline";
import { execSync } from "child_process";

// ブロック数を単位付きで返す
export const block2unitByte = (block: number): string => {
  let byte = block * 512;
  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let unitIndex = 0;
  while (byte >= 1000) {
    byte /= 1000;
    unitIndex++;
  }
  return `${byte.toFixed(1)}${units[unitIndex]}`;
};

// 対話型CLI
export const Interactive: {
  confirm: (msg: string) => Promise<boolean>;
  question: (question: string) => Promise<string>;
} = {
  // ユーザーにYes/Noで答えられる質問をする
  confirm: async (msg: string) => {
    const answer = (await Interactive.question(`${msg}(y/n): `)) as string;
    return answer.trim().toLowerCase() === "y";
  },
  // 標準入力を取得する
  question: (question: string) => {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      readlineInterface.question(question, (answer) => {
        resolve(answer);
        readlineInterface.close();
      });
    });
  },
};

// シェルコマンドを実行する
export const exec = {
  // 検索ディレクトリ結果とファイルサイズを単位付きで返す
  getTargetDirsWithSize: (root: string, matchName: string): { size: number; formatSize: string; path: string }[] => {
    const stdout = execSync(`find ${root} -name "${matchName}" -type d -prune | xargs du -s | sort -h -r`);
    // 整形して返す
    return (() => {
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
  },
  // ディレクトリ削除
  delete: (path: string) => {
    execSync(`rm -rf ${path}`);
  },
};
