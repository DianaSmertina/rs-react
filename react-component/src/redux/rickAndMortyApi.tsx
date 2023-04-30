import * as RTKQuery from '@reduxjs/toolkit/dist/query/react/index.js';
import { CharacterResponseResult, Character } from '../types/types';
const { createApi, fetchBaseQuery } = ((RTKQuery as TypeRTKQuery).default ??
  RTKQuery) as typeof RTKQuery;
type TypeRTKQuery = typeof RTKQuery & { default?: unknown };

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<CharacterResponseResult, string>({
      query: (search) => `character/?name=${search}`,
    }),
    getCharactersById: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersByNameQuery, useGetCharactersByIdQuery } = rickAndMortyApi;
