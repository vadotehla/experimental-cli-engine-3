/** @format */

import { argv as PassedArguments, argv0 as RanCommand } from "node:process";

import * as types from "./modules/types.ts";

const argv = PassedArguments.slice(2);

if (argv.length < 1) {
  console.error("too few arguments");
  process.exit(1);
}

const Nodes: types.ASTNodes.Node[] = [];

let x: number = 0;
let StopFlags: boolean = false;
while (x < argv.length) {
  const CurrentElement = argv[x].trim().toWellFormed();
  let done: boolean = false;
  // flags
  if (CurrentElement.startsWith("-") && !StopFlags && !done) {
    if (CurrentElement === "--") {
      StopFlags = true;
      done = true;
    }

    if (!done) {
      const DeclaresValueInElement: boolean = CurrentElement.includes("=");
      if (DeclaresValueInElement) {
        const FlagName: string = CurrentElement.startsWith("--")
          ? CurrentElement.slice(2, CurrentElement.indexOf("="))
          : CurrentElement.slice(1, CurrentElement.indexOf("="));
        const FlagValue: string = CurrentElement.slice(
          CurrentElement.indexOf("=") + 1
        );
        const Node: types.ASTNodes.Node = {
          Type: types.ASTNodes.NodeType.FLAG,
          Name: FlagName,
          Value: FlagValue,
        };

        Nodes.push(Node);
      }
    }
  }
  x++;
}

console.log(Nodes);
