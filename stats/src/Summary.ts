import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static WinsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  } // static make sure the method or property tied to the class itself

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const op = this.analyzer.run(matches);

    this.outputTarget.print(op);
  }
}
