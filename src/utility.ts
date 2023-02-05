import readline from "readline";

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
