export type IScoreRange = {
  zeroToTen: number;
  tenToTwenty: number;
  twentyToThirty: number;
  thirtyToForty: number;
  fortyToFifty: number;
  fiftyToSixty: number;
  sixtyToSeventy: number;
  seventyToEighty: number;
  eightyToNinety: number;
  ninetyToHundred: number;
};

export type IScoreDetails = {
  avg: number;
  min: number;
  max: number;
  dateTime: string;
};

export type IInitialBenchmarkScore = {
  initialBenchmark: number;
};

export type IPreviousBenchmarkScore = {
  previousBenchmark: number;
};

export type IPresentBenchmarkScore = {
  presentBenchmark: number;
};

export type IInitialBenchmarkDistribution = {
  initialDistribution: IScoreRange;
};

export type IPreviousBenchmarkDistribution = {
  previousDistribution: IScoreRange;
};

export type IPresentBenchmarkDistribution = {
  presentDistribution: IScoreRange;
};

export type IBenchmarkMetadata = {
  sectionTitle: string;
  initialBenchmarkScore: IScoreDetails;
  previousBenchmarkScore: IScoreDetails;
  presentBenchmarkScore: IScoreDetails;
  initialBenchmarkDistribution: IScoreRange;
  previousBenchmarkDistribution: IScoreRange;
  presentBenchmarkDistribution: IScoreRange;
};

export type IBenchmarkMetadataList = {
  benchmarkMetadata: IBenchmarkMetadata[];
  sectionFeedback: string[];
};
