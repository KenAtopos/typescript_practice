import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./MatchResults";
import { dateStringToDate } from "./utils";

export class MatchReader extends CsvFileReader {
  mapRow(row: string[]): MatchTypes {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults, // type assertion
      row[6],
    ];
  }
}
