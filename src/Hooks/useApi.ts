import { useState, useCallback, Dispatch, SetStateAction } from "react";
import api from "../services/api";
import { AxiosResponse } from "axios";

interface Result<T> {
	erro: string | undefined,
	setErro: Dispatch<SetStateAction<string | undefined>>;

	loading: boolean | undefined,
	setLoading: Dispatch<SetStateAction<boolean | undefined>>;

	data: T | undefined,

	get: (resource: string, paramsData: any) => Promise<void>;
	post: (resource: string, params: any) => Promise<void>;

}


function useApi<T>(): Result<T> {

	const [data, setData] = useState<T>();
	const [loading, setLoading] = useState<boolean | undefined>(false);
	const [erro, setErro] = useState<string | undefined>();

	const tryCatchPattern = useCallback(async (request: Promise<AxiosResponse<T>>): Promise<AxiosResponse<T>> => {

		try {

			setLoading(true);

			return await request;

		} catch (error) {

			console.log('error', error);

			setErro(error);
			return Promise.reject(null);

		} finally {
			setLoading(false);
		}


	}, [])

	const get = useCallback(async (resource: string, paramsData: any) => {

		const { data, statusText } = await tryCatchPattern(api.get<T>(resource, paramsData));
		setData(data);

		console.log('data', data);
		console.log('statusText', statusText);


	}, [tryCatchPattern]);

	const post = useCallback(async (resource: string, params: any) => {

		const { data, statusText } = await tryCatchPattern(api.post<T>(resource, params));

		console.log('data', data);
		console.log('statusText', statusText);

		setData(data);



	}, [tryCatchPattern]);



	return {
		data,
		loading,
		setLoading,
		erro,
		setErro,
		get,
		post
	}

};

export default useApi;
