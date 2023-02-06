import { DirectoryCleaner } from "./DirectoryCleaner/main";

export class NodeCleaner extends DirectoryCleaner {
  constructor(config: ConstructorParameters<typeof DirectoryCleaner>[1]) {
    super("node_modules", config);
  }
}
