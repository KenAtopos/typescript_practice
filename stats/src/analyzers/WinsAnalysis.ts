import { MatchData } from "../MatchData";
import { MatchResults } from "../MatchResults";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        wins++;
      }
    }

    return `${this.team} won ${wins} games`;
  }
} // let ts help to check this class implement the Analyzer interface
