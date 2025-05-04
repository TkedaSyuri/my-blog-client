import { Posts } from "@/types/types";
import BlogCard from "@/components/Blog/BlogCard/BlogCard";
import Link from "next/link";

const BlogPage = async () => {
  const getPosts = async (): Promise<Posts[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts`, {
      cache: "no-store",
    });
    const data = await res.json();

    return data;
  };
  
  const posts = await getPosts();
  return (
    <main className="mx-2 mt-4">
      <h2 className="text-3xl text-center font-bold ">ブログ一覧</h2>
      <div className="flex justify-end">
        <button className="blcok flex justify-end bg-gray-600 text-white  p-1 rounded-lg">
          <Link href={"blog/new"}>投稿する</Link>
        </button>
      </div>
      <BlogCard posts={posts} />
    </main>
  );
};

export default BlogPage;
