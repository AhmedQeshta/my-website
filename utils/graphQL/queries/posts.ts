import { gql } from 'graphql-request';
import graphQLClient from '../config';

export const postsQuery = gql`
  query Posts {
    posts {
      createdAt
      datePublished
      id
      publishedAt
      slug
      title
      updatedAt
      content {
        html
      }
      author {
        name
        id
        avatar {
          urlAuthor: url
          widthAuthor: height
          heightAuthor: width
        }
      }
      caver {
        publishedAt
        createdBy {
          id
        }
        url
        height
        width
      }
    }
  }
`;


const postQuery = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      createdAt
      datePublished
      id
      publishedAt
      slug
      title
      updatedAt
      content {
        html
      }
      author {
        name
        id
        avatar {
          urlAuthor: url
          widthAuthor: height
          heightAuthor: width
        }
      }
      caver {
        publishedAt
        createdBy {
          id
        }
        url
        height
        width
      }
    }
  }
`;


export const getPosts = async () => {
  const { posts } = await graphQLClient.request(postsQuery);
  return posts;
};

export const getPost = async ({ slug }: { slug: string }) => {
  const { post } = await graphQLClient.request(postQuery, { slug });
  return post;
};
