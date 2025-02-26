import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL } from '../variables'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: headers => {
    const token = (API_KEY as string) || ''

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    headers.set('Content-Type', 'application/json')
    return headers
  },
})

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['chat'],
})
