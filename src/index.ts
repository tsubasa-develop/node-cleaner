import { NodeCleaner } from "../libs/node-cleaner";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const config: ConstructorParameters<typeof NodeCleaner>[0] = {
  root: argv._?.[0] || ".",
  limit: (() => {
    if (Number.isInteger(argv.l)) {
      return argv.l;
    } else if (Number.isInteger(argv.limit)) {
      return argv.limit;
    }
    return 5;
  })(),
  forceMode: !!argv.f || !!argv.force,
  suMode: !!argv.s || !!argv.su,
  checkMode: !!argv.c || !!argv.check,
  version: !!argv.version || !!argv.v,
};

// 実行
(async () => {
  const nodeCleaner = new NodeCleaner(config);
  nodeCleaner.run();
})();
