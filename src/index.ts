import { NodeCleaner } from "../libs/node-cleaner";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const config: ConstructorParameters<typeof NodeCleaner>[0] = {
  root: argv._?.[0] || ".",
  limit: isNaN(argv.l) ? argv.limit : 5,
  forceMode: !!argv.force,
  suMode: !!argv.su,
  checkMode: !!argv.check,
};
// console.log({ argv, config });

// 実行
(async () => {
  const nodeCleaner = new NodeCleaner(config);
  nodeCleaner.run();
})();
