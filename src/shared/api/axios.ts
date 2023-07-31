import axios, { type AxiosInstance } from "axios";

//@ts-ignore
import { useToast } from "vue-toastification/dist/index.mjs";

export function makeAxiosInstance(): AxiosInstance {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 5000,
  });

  instance.interceptors.response.use(
    (resp) => {
      if (resp.status === 400 || resp.status === 500) return Promise.reject("There was an error");
      else return resp;
    },
    (error) => {
      const toast = useToast();

      Object.values(error.response.data).forEach((e) => toast.error(e));

      return Promise.reject(error);
    },
  );

  return instance;
}
