import type { UseAxiosOptions } from '@vueuse/integrations/useAxios'
import { useAxios } from '@vueuse/integrations/useAxios'
import type { AxiosRequestConfig, Method } from 'axios'
import _ from 'lodash'

const API_CONFIG: AxiosRequestConfig = {
  baseURL: import.meta.env.API_URL,
}

const USE_AXIOS_OPTIONS: UseAxiosOptions = {
  immediate: false,
}

export function useRequest(url: string, data: any = undefined, method: Method = 'GET', useAxiosOptions: UseAxiosOptions = USE_AXIOS_OPTIONS) {
  return request(url, { data, method }, useAxiosOptions)
}

function request(url: string, options: AxiosRequestConfig = {}, useAxiosOptions: UseAxiosOptions) {
  options = _.omitBy(Object.assign(API_CONFIG, options), _.isNil)
  const { data, error, isLoading, aborted, abort, execute } = useAxios(url, options, useAxiosOptions)

  return {
    data: readonly(data),
    error: readonly(error),
    isPending: readonly(isLoading),
    isCancelled: readonly(aborted),
    execute,
    abort,
  }
}
