export enum StepStatusTypes {
  STEP1 = '중요성 이슈 생성',
  STEP2 = '중요성 이슈 선택',
  STEP3 = '이해관계자 설정',
  STEP4 = '내용 설정',
  STEP5 = '메일 전송',
}

export interface SeriesMappingTypes {
  stakeholderContr: string;
  stakeholderCust: string;
  stakeholderMem: string;
  stakeholderSh: string;
  stakeholderInstNorg: string;
}

export interface IMaterialIssue {
  industryNo: number;
  industry: string;
  dimensionNo: number;
  dimension: string;
  issueNo: number | null;
  issue: string;
  industryEng: string;
  dimensionEng: string;
  issueEng: string | null;
  importanceType: string | null;
  isCustom: boolean;
}

export interface MaterialState {
  title: string;
  materialHeaderId: string;
  createdAt: string;
  completedAt: string;
  activatedAt: string;
  expiredAt: string;
}

export interface StatusCodeType {
  standardType: string;
  standardTypeCode: string;
  levelType: string;
  levelTypeCode: string;
  standardName: string;
  standardNameEng: string;
}

export interface MaterialStepStatus {
  materialId: string;
  statusNo: number | null;
  statusCode: StatusCodeType;
  title: string;
  createdAt: Date | null;
  completedAt: Date | null;
  activatedAt: Date | null;
  expiredAt: Date | null;
}

export interface IStakeHolderType {
  category1No: number;
  category2No: number;
  category1: string;
  category2: string;
  category1Eng: string | null;
  category2Eng: string | null;
}

export interface IStakeHolder {
  stakeholderId?: string;
  userId?: string;
  category1No: number | null;
  category2No: number | null;
  name: string;
  email: string;
  region: string; // DOMESTIC, OVERSEAS,
  comment?: string;
}

export interface IStakeHolderList {
  category1: string;
  category2: string;
  category1No: number;
  category2No: number;
  name: string;
  email: string;
  region: string; // DOMESTIC, OVERSEAS,
  regionType: string;
  comment: string;
  createdAt: string;
  stakeholderId: string;
  deletedAt: string | null;
}

export interface IMaterialProgress {
  issueAmount: number;
  answeredStakeholders: number;
  stakeholders: number;
}

export interface IIdentificationInfo {
  materialHeader: MaterialStepStatus;
  identificationProgressVo: IMaterialProgress;
}

export interface IStakeHolderProgress {
  stakeholderId: string;
  email: string;
  comment: string;
  answered: boolean;
  name: string;
}

export interface IIdentificationIssueVo {
  materialIssueVo: IMaterialIssue;
  userPoint: number;
  stakeholderContr?: number;
  stakeholderCust?: number;
  stakeholderMem?: number;
  stakeholderSh?: number;
  stakeholderInstNorg?: number;
  stakeholderAvg: number;
}

export interface IMaterialChartData {
  identificationIssueVos: IIdentificationIssueVo[];
  stakeholderVos: {
    email: string;
    comment: string;
  }[];
}

export interface IInvitatedIdentificationInfo {
  title: string;
  userName: string;
  stakeholderName: string;
  activatedAt: string;
  expiredAt: string;
}
