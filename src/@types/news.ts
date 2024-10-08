export interface IConfidence {
  negative: string;
  positive: string;
  neutral: string;
}

export interface INews {
  collectSeq: number;
  contentConfidence: IConfidence;
  contentSentiment: string;
  createdAt: Date;
  siteContent: string;
  siteEmotion: string | null;
  siteImage: string;
  siteLocation: string;
  siteName?: string;
  siteOrganizer?: string | null;
  siteSource: string;
  siteSubject: string;
  siteType: string;
}
