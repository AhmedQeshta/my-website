import { GraphQLClient } from 'graphql-request';

const contentAPI: string = process?.env?.NEXT_PUBLIC_GRAPH_CMS_API!;

const graphCMS = new GraphQLClient(contentAPI);


export default graphCMS;