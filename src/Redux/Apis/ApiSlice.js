import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
reducerPath:"Api",
baseQuery:fetchBaseQuery({baseUrl:"https://pokeapi.co/api/v2/"}),
endpoints:(builder)=>({
    getPokemonByPage:builder.query({
        query:(page)=>`pokemon/?offset=${(page - 1) * 6}&limit=6`
    }),
    getAllPokemon: builder.query({
        query:()=>`pokemon`
    }),
    getPokemonByName:builder.query({
        query:(name)=>`pokemon/${name}`
    }),
    getGenrations: builder.query({
        query: () => `generation`,
      }),
    getPokemonByGeneration: builder.query({
    query: (name) => `generation/${name}`
    }),
})
})
export const {useGetPokemonByPageQuery, useGetAllPokemonQuery, useGetPokemonByNameQuery, useGetGenrationsQuery, useGetPokemonByGenerationQuery} = apiSlice;