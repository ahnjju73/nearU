import { apiRoutes } from 'src/apis/routes';
import { api } from 'src/apis/utils/api';
import { StepStatusTypes } from 'src/@types/material';

export const materialStatus = async (materialHeaderId: string): Promise<any> => {
  if (!materialHeaderId) return { status: StepStatusTypes.STEP1, statusEng: StepStatusTypes.STEP1 };
  const response = await api.get<any>(apiRoutes.material.status, { params: { materialHeaderId } });
  return response.data;
};
