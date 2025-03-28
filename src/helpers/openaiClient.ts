import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  },
});

openai.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const apiMessage = data?.error?.message;

      console.error(`[OpenAI API Error] ${status}: ${apiMessage}`);
      return Promise.reject(
        new Error(apiMessage || "Ошибка ответа от OpenAI API")
      );
    } else if (error.request) {
      console.error("[OpenAI API Error] Server not responding");
      return Promise.reject(new Error("OpenAI API not responding"));
    } else {
      console.error("[OpenAI API Error] Request error", error.message);
      return Promise.reject(new Error("OpenAI API request error"));
    }
  }
);
