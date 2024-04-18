import axios, { AxiosInstance, AxiosResponse } from "axios";

// Định nghĩa loại dữ liệu phản hồi từ API
type ApiResponse<T> = {
  message: boolean;
  statusCode: number;
  data: T;
};

class ApiService {
  private static instance: ApiService;
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/", // Thay đổi thành URL thực tế của bạn
    });
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async setAccessToken(token: string) {
    this.accessToken = token;
  }

  async setRefreshToken(token: string) {
    this.refreshToken = token;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() => this.axiosInstance.get(endpoint));
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.post(endpoint, data)
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.put(endpoint, data)
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.delete(endpoint)
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private async requestWithRetry<T>(
    requestFunction: () => Promise<AxiosResponse<ApiResponse<T>>>
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response = await requestFunction();
      return response;
    } catch (error: any) {
      // Kiểm tra nếu lỗi có liên quan đến accessToken hết hạn
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.message === "Token expired"
      ) {
        // Nếu accessToken hết hạn, ta có thể thực hiện quá trình refresh token ở đây
        await this.refreshAccessToken();
        // Sau khi refreshToken thành công, thực hiện lại yêu cầu gọi API
        return await requestFunction();
      } else {
        throw error;
      }
    }
  }

  private async refreshAccessToken() {
    // Gửi yêu cầu refresh token và cập nhật accessToken mới
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
