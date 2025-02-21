import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URL = "http://localhost:3000/api";
const API_URL = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({ 
    baseUrl: API_URL + "/api/v1",
    credentials: "include" // ✅ Ensures cookies are sent
  });

export const apiSlice = createApi({
    baseQuery, 
    tagTypes: [],
    endpoints:(builder) => ({}),
})

