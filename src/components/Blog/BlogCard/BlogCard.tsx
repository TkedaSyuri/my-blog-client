"use client";

import { Posts } from "@/app/Type";
import Link from "next/link";
import React from "react";

interface PostsProps {
  posts: Posts[];
}

const BlogCard: React.FC<PostsProps> = ({ posts }) => {
  return (
      <div className="mt-7">
        <div className="grid gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-5 mx-10  bg-gradient-to-r   from-red-700  to-gray-700  rounded-md"
            >
              <div className=" hover:text-blue-600 cursor-default">
                <div className="text-3xl text-white">{post.title}</div>
              </div>
              <div className="font-semibold ">作成日 : {post.created_at}</div>
              <div className="">
                <Link href={`blog/post/${post.id}`}>
                  <button className="p-2 border-green-600 bg-black text-white border rounded-md">
                    <span className="">
                      blogを見る
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BlogCard;
