import { rest, RestRequest, ResponseComposition, RestContext } from 'msw';

export const handlers = [
  rest.get(
    'https://rickandmortyapi.com/api/character/',
    (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/1',
              },
              location: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/20',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
              ],
              url: 'https://rickandmortyapi.com/api/character/1',
              created: '2017-11-04T18:48:46.250Z',
            },
          ],
        })
      );
    }
  ),
];
