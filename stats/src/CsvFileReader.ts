import fs from "fs";
import { MatchResults } from "./MatchResults";

type MatchTypes = [Date, string, string, number, number, MatchResults, string];

export abstract class CsvFileReader {
  data: MatchTypes[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchTypes;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
