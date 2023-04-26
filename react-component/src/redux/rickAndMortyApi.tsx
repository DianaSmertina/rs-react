import * as RTKQuery from '@reduxjs/toolkit/dist/query/react/index.js';
import { CharacterResponseResult, Character } from '../types/types';

// const { createApi, fetchBaseQuery } = RTKQuery;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createApi, fetchBaseQuery } = ((RTKQuery as any).default ?? RTKQuery) as typeof RTKQuery;

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
