import axios, { AxiosResponse } from "axios";
import { Prediction } from "../types/Prediction";

export const getPredictionsByInput = async (input: string, limit: number) => {
  const {
    data: { list: predictions },
  } = (await axios.get(
    `${process.env.REACT_APP_BASE_API_URL}/places?input=${input}&limit=${limit}`
  )) as AxiosResponse<{
    done: boolean;
    list: Prediction[];
  }>;

  return predictions;
};
