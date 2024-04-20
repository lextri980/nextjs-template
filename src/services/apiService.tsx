import { StorageUtil } from "@/utils";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

// Định nghĩa loại dữ liệu phản hồi từ API
type ApiResponse<T> = {
  message: boolean;
  status: number;
  data: T;
};

class ApiService {
  private static instance: ApiService;
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async setAccessToken(token: string | null) {
    this.accessToken = token;
    if (this.accessToken) {
      this.axiosInstance.defaults.headers.common[
        "Authorizations"
      ] = `Bearer ${this.accessToken}`;
    } else {
      delete this.axiosInstance.defaults.headers.common["Authorizations"];
    }
  }

  async setRefreshToken(token: string) {
    this.refreshToken = token;
  }

  async get<T>(endpoint: string): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() => this.axiosInstance.get(endpoint));
      return response;
    } catch (error) {
      throw error;
    }
  }

  async post<T>(
    endpoint: string,
    data: any
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.post(endpoint, data)
        );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async put<T>(
    endpoint: string,
    data: any
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.put(endpoint, data)
        );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(endpoint: string): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.delete(endpoint)
        );
      return response;
    } catch (error) {
      throw error;
    }
  }

  private async requestWithRetry<T>(
    requestFunction: () => Promise<AxiosResponse<ApiResponse<T>>>
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      this.setAccessToken(StorageUtil.getLocal("token"));
      const response = await requestFunction();
      return response;
    } catch (err) {
      const error = err as AxiosError<any>;
      // Check error related to expired token
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.message === "Token expired"
      ) {
        // If accessToken is expired, handle refresh token here
        await this.refreshAccessToken();
        // After refresh token successfully, handle calling API agian
        return await requestFunction();
      } else {
        throw error;
      }
    }
  }

  private async refreshAccessToken() {
    // Send refresh token request and update new accessToken
    try {
      const response = await this.axiosInstance.post("/refreshToken", {
        refreshToken: this.refreshToken,
      });
      const newAccessToken = response.data.accessToken;
      this.setAccessToken(newAccessToken);
    } catch (error) {
      throw new Error("Failed to refresh access token");
    }
  }
}

export default ApiService.getInstance();
