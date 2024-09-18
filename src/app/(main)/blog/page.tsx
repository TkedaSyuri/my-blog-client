import BlogCard from "@/components/Blog/BlogCard/BlogCard";
import { getPosts } from "@/app/api/post";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <main>
      <h2 className="text-2xl font-bold">ブログ一覧</h2>
      <button className="bg-gray-600 text-white p-1 rounded-lg">
        <Link href={"blog/new"}>投稿する</Link>
      </button>
      <BlogCard posts={posts} />
    </main>
  );
};

export default BlogPage;
