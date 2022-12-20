import { useQuery } from '@tanstack/react-query';
import { options, getPost, getPosts } from '../utils';

export function useGetPosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    ...options,
  });
}

export function useGetPost(slug: string) {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPost({ slug }),
    ...options,
  });
}
