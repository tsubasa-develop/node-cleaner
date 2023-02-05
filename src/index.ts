import { NodeCleaner } from "../libs/node-cleaner";

const searchRoot: string = (process.argv[2] as string) || ".";

// 実行
(async () => {
  const nodeCleaner = new NodeCleaner({
    root: searchRoot,
  });
  nodeCleaner.run();
})();
