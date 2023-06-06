import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

export class Request {
  instance: AxiosInstance

  baseConfig: AxiosRequestConfig = { baseURL: import.meta.env.VITE_APP_SERVICES_GATEWAY_BASE_URL, timeout: 30000, responseType: 'json' }

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config: AdaptAxiosRequestConfig) => {
        const token = localStorage.getItem('token') as string
        if (token) {
          config.headers.Authorization = `Butter ${token}`
        }
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (err: AxiosError) => {
        let message = ''
        console.warn(err.response?.data)
        switch (err.response!.status) {
          case 400:
            message = '请求错误(400)'
            break
          case 401:
            message = '未授权，请重新登录(401)'
            break
          case 403:
            message = '拒绝访问(403)'
            break
          case 404:
            message = '请求出错(404)'
            break
          case 408:
            message = '请求超时(408)'
            break
          case 500:
          default:
            message = `连接出错(${err.response?.status})!`
        }
        return Promise.reject(err.response)
      }
    )
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.put(url, data, config)
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.delete(url, config)
  }
}

export default new Request({})
