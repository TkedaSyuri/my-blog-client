import React from "react";
import { Posts } from "../../Type";
import Link from "next/link";

export const getPosts = async (): Promise<Posts[]> => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const data = res.json();
  return data;
};

const page = async () => {
  const posts = await getPosts();
  return (
    <main>
      <h2 className="text-2xl font-bold">記録一覧</h2>
      <div className="mt-7">
      <div className="grid gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-gradient-to-r   from-red-600  to-gray-800  p-5 mx-10">
            <Link
              href={`record/post/${post.id}`}
              className="text-2xl hover:text-blue-600 cursor-default"
            >
              <div className="text-white">{post.title}</div>
            </Link>
            <div className="font-semibold ">作成日 : {post.created_at}</div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
};

export default page;
