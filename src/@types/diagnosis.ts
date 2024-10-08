// @types/diagnosis.ts

// ----------------------------------------------------------------------

export type IDiagnosisOption = {
  option: string;
  point: number;
  validation?: {
    type: string;
    parameters: IParameters[];
  };
  target_date?: string;
  units?: string[];
};

export type IResponseValidation = {
  type: string;
  restriction: string;
  parameters: IParameters[];
  error_text: string;
};

export type IParameters = {
  parameter_integer: number;
  parameter_double: number;
  parameter_string: string;
};

export type IDiagnosisQuestions = {
  by_user_id: string;
  type: string;
  title: string;
  description: string;
  required: boolean;
  order: number;
  weight: number | string;
  total_point: number | null;
  code: string;
  question_id: string;
  validation: IResponseValidation | null;
  options?: IDiagnosisOption[] | null;
};

export type IDiagnosisCategory = {
  by_user_id: string;
  title: string;
  description: string;
  questions: IDiagnosisQuestions[];
};

export type IDiagnosisSection = {
  by_user_id: string;
  title: string;
  description: string;
  categories: IDiagnosisCategory[];
};

export type IDiagnosisEvaluation = {
  by_user_id: string;
  evaluation_id: string;
  publication_id: string;
  title: string;
  description1: string;
  description2: string;
};

export type IDiagnosis = {
  evaluation: IDiagnosisEvaluation;
  sections: IDiagnosisSection[];
};

export type IdiagnosisUserList = {
  id?: string;
  evaluation_id: string;
  publication_id: string;
  title: string;
  description1?: string;
  description2?: string;
  number_of_questions: number;
};

export type IUserDiagnosisAnswer = {
  answer_integer: number;
  answer_double: number;
  answer_string: string;
  answer_etc_string: string;
  answer_unit_string: string;
  answer_description_string: string;
};

export type IUserDiagnosisQeustion = {
  by_user_id: string;
  question_id: string;
  answers: IUserDiagnosisAnswer[];
};

export type IUserDiagnosis = {
  evaluation: {
    by_user_id: string;
    publication_id: string;
  };
  questions: IUserDiagnosisQeustion[];
};

export type IUserAllDiagnosisList = {
  publication_id: string;
  published_id: string;
  title: string;
  description: string;
  created_at: string;
};

// ----------------------------------------------------------------------

export type IDiagnosisListState = {
  isLoading: boolean;
  error: Error | string | null;
  diagnosisSet: IdiagnosisUserList;
};

export type IDiagnosisState = {
  isLoading: boolean;
  error: Error | string | null;
  diagnosisSet: IDiagnosis;
};

// ----------------------------------------------------------------------

export type IEvaluationResponseOption = {
  option: string;
  point: number;
  feedback: string;
  target_date: string;
};

export type IEvaluationResponseQuestion = {
  question_id: string;
  order: number;
  type: string;
  code: string;
  title: string;
  description: string;
  required: boolean;
  feedback: string;
  earned_point: number;
  answers: IUserDiagnosisAnswer[];
  options: IEvaluationResponseOption[];
};

export type IEvaluationResponseCategory = {
  title: string;
  description: string;
  questions: IEvaluationResponseQuestion[];
};

export type IEvaluationResponseSection = {
  title: string;
  description: string;
  categories: IEvaluationResponseCategory[];
};

export type IEvaluationResponseData = {
  evaluation: {
    publication_id: string;
    published_id: string;
    title: string;
    description: string;
    completed_at: string;
  };
  sections: IEvaluationResponseSection[];
};

export type ISectionScores = {
  section_scores: [
    {
      section_title: string;
      growth_rate_percent: number;
      initial_score: number;
      initial_date_time: string;
      previous_score: number;
      previous_date_time: string;
      present_score: number;
      present_date_time: string;
    }
  ];
};

// ----------------------------------------------------------------------

export interface IFormEvaluation {
  evaluationId: string;
  publicationId: string;
  title: string;
  description1: string;
  description2: string;
}

export interface IFormValidation {
  type: string;
  restriction: string;
  parameters?: {
    parameterInteger?: number;
    parameterDouble?: number;
    parameterString?: string;
  }[];
  errorText?: string;
}

export interface IOption {
  option: string;
  feedback: string;
  point: number;
  targetDate: string;
  validation: IFormValidation;
}

export interface IFormQuestion {
  questionId: string;
  order?: number;
  type: string;
  code?: string;
  title: string;
  description?: string;
  required: boolean;
  weight?: number;
  totalPoint?: number;
  feedback?: string;
  earnedPoint?: number;
  answers: IFormAnswer[];
  validation?: IFormValidation;
  options?: IOption[];
}

export interface IFormCatagorie {
  categoryId: string;
  title: string;
  description: string;
  questions: IFormQuestion[];
}

export interface IFormSection {
  sectionId: string;
  title: string;
  description: string;
  categories: IFormCatagorie[];
}

export interface IEvalutionForm {
  evaluation: IFormEvaluation;
  sections: IFormSection[];
}

export interface IFormAnswer {
  answerInteger: number;
  answerEtcString?: string;
  point?: number;
  answerDouble?: number;
  answerUnitString?: string;
  answerDescriptionString?: string;
  answerString?: string;
}

export interface IApplyQuestions {
  byUserId: string;
  questionId: string;
  answers: IFormAnswer[];
}

export interface IApplyEvaluation {
  byUserId: string;
  publicationId: string;
}

export interface IApplyForm {
  evaluation: IApplyEvaluation;
  questions: IApplyQuestions[];
}

export interface IResponsedEvaluationAll {
  publicationId: string;
  publishedId: string;
  title: string;
  description1: string;
  description2: string;
  createdAt: string;
}

export type ISelfSectionScore = {
  sectionScores: {
    sectionTitle: string;
    growthRatePercent: number;
    initialScore: number;
    initialDateTime: string;
    previousScore: number;
    previousDateTime: string;
    presentScore: number;
    presentDateTime: string;
  }[];
};
