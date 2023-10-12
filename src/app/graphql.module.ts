import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, ApolloLink} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://ticketing-service-test2-cluster.cinewav.com/api/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const auth = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQVVUSCIsImlkIjozLCJlbWFpbCI6Ing1MXh4eEBnbWFpbC5jb20iLCJyb2xlcyI6WyJPUkdBTklaRVIiLCJDVVNUT01FUiJdLCJpYXQiOjE2OTU3Mzg2NzQsImV4cCI6MTcwMzUxNDY3NCwianRpIjoiMEtBcENSbXlGIn0.zu-tl6WR2nnv3kScMDifJJL55VoGKiGB9hjTCJ7OwKY"
    },
  }));

  const link = ApolloLink.from([auth, httpLink.create({ uri })]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
