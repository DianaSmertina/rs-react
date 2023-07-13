import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterResponseResult, Character } from '../types/types';

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
