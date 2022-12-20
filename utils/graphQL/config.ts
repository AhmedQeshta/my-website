import { GraphQLClient } from 'graphql-request';

const CONTENT_API: string = process?.env?.NEXT_PUBLIC_GRAPH_CMS_API!;

const graphQLClient = new GraphQLClient(CONTENT_API);

export default graphQLClient;
