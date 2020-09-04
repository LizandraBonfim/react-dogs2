import React, {useCallback} from "react";
import {ResponseApi, ResponseBase, Stats} from "../models/Index";
import useApi from "./useApi";

interface Response extends ResponseBase {
  getStats: (userId: string) => Promise<void>;
  stats: Stats[];

}

const useStats = (): Response => {

  const { get, data, loading, erro } = useApi<ResponseApi<Stats[]>>();

  const getStats = useCallback(async (userId: string): Promise<void>  => {

    return await get(`estatistica/${userId}`, null);

  }, [get]);

  return {
    getStats,
    loading,
    erro,
    stats: data.dados
  }

}

export default useStats;
