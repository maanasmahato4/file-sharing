import axios, { AxiosResponse } from 'axios';

export class HttpRequest {
	static async downloadFile(
		endpoint: string,
		body: string,
	): Promise<AxiosResponse> {
		const response = await axios.post(
			endpoint,
			{ url: body },
			{
				responseType: 'blob',
			},
		);
		if (response.status !== 200) {
			throw new Error(`HTTP error ${response.status}\n${response}`);
		}
		return response;
	}

	static async post(
		endpoint: string,
		body: FormData,
		config?: RequestInit,
	): Promise<Response> {
		const defaultConfig: RequestInit = {
			method: 'POST',
			body,
			headers: {
				Accept: '*/*',
				...config?.headers,
			},
			...config,
		};

		const response = await fetch(endpoint, defaultConfig);
		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}\n${response}`);
		}
		return response;
	}
}
