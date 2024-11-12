import type { AxiosRequestConfig } from 'axios'
import { useAxios, type UseAxiosOptions } from '@vueuse/integrations/useAxios'
import _ from 'lodash'

const API_CONFIG: AxiosRequestConfig = {
  baseURL: import.meta.env.API_URL,
}

const USE_AXIOS_OPTIONS: UseAxiosOptions = {
  immediate: false,
}

function request(url: string, options: AxiosRequestConfig = {}, useAxiosOptions: UseAxiosOptions) {
  options = _.omitBy(Object.assign({}, API_CONFIG, options), _.isNil)
  const { data, error, isLoading, isCanceled, abort, execute } = useAxios(url, options, useAxiosOptions)

  return {
    data: readonly(data),
    error: readonly(error),
    isPending: readonly(isLoading),
    isCancelled: readonly(isCanceled),
    execute,
    abort,
  }
}

export default function useRequest(url: string, options: AxiosRequestConfig = {}, useAxiosOptions: UseAxiosOptions = USE_AXIOS_OPTIONS) {
  return request(url, options, useAxiosOptions)
}
