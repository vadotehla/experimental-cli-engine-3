/** @format */
// deno-lint-ignore-file no-namespace no-explicit-any

export interface EngineData {
  readonly CliName: string;
  readonly CliVersion:
    `v${number}.${number}.${number}` | `v${number}.${number}.${number}-beta`;
}

export namespace ASTNodes {
  export enum NodeType {
    ARGUMENT,
    COMMAND,
    FLAG,
  }
  export interface Node {
    readonly Type: NodeType;
    readonly Name: string;
    readonly Value: any;
  }
}
