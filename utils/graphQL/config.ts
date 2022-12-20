import { GraphQLClient } from 'graphql-request';

const CONTENT_API: string = process?.env?.NEXT_PUBLIC_GRAPH_CMS_API!;

const graphQLClient = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbuxgpkr388001ukhel68kta/master',
);
// const graphQLClient = new GraphQLClient(CONTENT_API);

export default graphQLClient;
