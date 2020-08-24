import { useState, useCallback, Dispatch, SetStateAction, useMemo } from "react";
import api from "../services/api";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { getTokenFromLocalStorage } from "../Shared/Helpers";



interface Result<T> {
	erro: string | undefined,
	setErro: Dispatch<SetStateAction<string | undefined>>;

	loading: boolean,
	setLoading: Dispatch<SetStateAction<boolean>>;

	data: T,

	get: (resource: string, paramsData: any) => Promise<void>;
	post: (resource: string, params: any) => Promise<void>;

}


function useApi<T>(): Result<T> {

	const [data, setData] = useState<T>({} as any);
	const [loading, setLoading] = useState<boolean>(false);
	const [erro, setErro] = useState<string | undefined>();
	const [sucess, setSucess] = useState<boolean>(true);

	const tryCatchPattern = useCallback(
		async (request: <T>(resource: string, config?: any, headers?: any)
			=> Promise<AxiosResponse<T>>, resource, paramsData): Promise<AxiosResponse<T>> => {


			let response: AxiosResponse<T>;


			try {

				setLoading(true);

				const token = getTokenFromLocalStorage();
				
				api.defaults.headers.common['Authorization'] = !!token ? `Bearer ${token}` : undefined;

				response = await request(resource, paramsData);
				setErro(undefined);
				console.log('sucesso', response.data);
				

				return await request(resource, paramsData);

			} catch (error) {

				// tipar esse erro com tipo Error do axios
				// se for 404 remover o toke da local storage
				// e redirecionar para login ou feed normal

				const mensagem = error.response.data.mensagem;

				setErro(mensagem);
				//setErro(error);

				return Promise.reject(null);


			} finally {
				setLoading(false);
			}


		}, [])

	const get = useCallback(async (resource: string, paramsData: any) => {

		const { data, statusText } = await tryCatchPattern(api.get, resource, paramsData);
		//const { data, statusText } = await tryCatchPattern(api.get<T>(resource, paramsData));
		setData(data);




	}, [tryCatchPattern]);

	const post = useCallback(async (resource: string, params: any) => {

		const { data, statusText } = await tryCatchPattern(api.post, resource, params);


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
