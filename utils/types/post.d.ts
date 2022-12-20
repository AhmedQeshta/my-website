type Caver = {
  publishedAt: string;
  createdBy: {
    id: string;
  };
  url: string;
  width: number;
  height: number;
};

type Author = {
  name: string;
  id: string;
  avatar: {
    urlAuthor: string;
    widthAuthor: number;
    heightAuthor: number;
  };  
};

type Content = {
  html: string;
};

type Post = {
  createdAt: string;
  datePublished: string;
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  content: Object<Content>;
  author: Object<Author>;
  caver: Object<Caver>;
};

export interface IPostsProps {
  posts: Post[];
}

export interface IPost {
  post: Object<Post>;
}

export interface ISinglePostParams {
  params: {
    slug: string;
  };
}

