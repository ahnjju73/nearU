export type IBenchmarkFilter = {
  mainMarkets: string[];
  salesVolumes: string[];
  employeeCnts: string[];
  industries: Industry[];
};

export type Industry = {
  industryTitle: string;
  depth: number;
  subIndustries: Industry[];
};
