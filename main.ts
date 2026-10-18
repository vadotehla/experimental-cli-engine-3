/** @format */

import { argv as PassedArguments, argv0 as RanCommand } from "node:process";

import * as types from "./modules/types.ts";

const argv = PassedArguments.slice(2);

if (argv.length < 1) {
  console.error("too few arguments");
  process.exit(1);
}

let x = 0;
while (x < argv.length) {
  x++;
}
