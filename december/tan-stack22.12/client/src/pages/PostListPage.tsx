import { useState } from "react";
import { usePosts } from "../hooks/use-posts";
import { Link } from "react-router-dom";
import { Post } from "../types/types";

const PostListPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const limit = 10;

  const { data, isLoading, isError, error } = usePosts({
    page,
    limit,
    search,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); 
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />

      <div className="space-y-4">
        {data?.posts.map((post: Post) => (
          <div key={post._id} className="border p-4 rounded-md shadow-md">
            <Link to={`/posts/${post._id}`}>
              <h2 className="font-bold text-xl">{post.title}</h2>
              <p>{post.content.substring(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={data && page * limit >= data.total}
          className="px-4 py-2 ml-2 bg-gray-500 text-white rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostListPage;
