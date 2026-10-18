/** @format */

export interface EngineData {
  readonly CliName: string;
  readonly CliVersion:
    `v${number}.${number}.${number}` | `v${number}.${number}.${number}-beta`;
}
