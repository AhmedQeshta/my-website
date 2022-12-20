import { gql } from 'graphql-request';

export const getPosts = gql`
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
          urlAuthor:url
          widthAuthor:height
          heightAuthor:width
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

export const getPost = gql`
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
          urlAuthor:url
          widthAuthor:height
          heightAuthor:width
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


export const slugList = gql`
  {
    posts {
      slug
    }
  }
`;
