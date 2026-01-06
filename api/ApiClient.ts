import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private readonly client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getPrograms() {
    const response = await this.client.get("/gymtrainee/programs");
    return response.data;
  }
}

export const apiClient = new ApiClient(process.env.EXPO_PUBLIC_API_URL || '');