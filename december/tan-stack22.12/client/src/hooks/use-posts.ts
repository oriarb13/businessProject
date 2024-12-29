import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getPosts } from "../API/postsAPI";
import { Post } from "../types/types";

interface Options {
  page: number;
  limit: number;
  search: string;
}

export function usePosts({ page = 1, limit = 10, search = "" }: Options) {
  return useQuery<{ posts: Post[]; total: number }, Error>({
    queryKey: ["posts", { page, limit, search }],
    queryFn: () => getPosts({ page, limit, search }),
    staleTime: 300000,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  } as UseQueryOptions<{ posts: Post[]; total: number }, Error>);
}
