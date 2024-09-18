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
              <div className="text-2xl hover:text-blue-600 cursor-default">
                <div className="text-white">{post.title}</div>
              </div>
              <div className="font-semibold ">作成日 : {post.created_at}</div>
              <div className="">
                <Link href={`blog/post/${post.id}`}>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-gray-600 group-hover:from-purple-600 group-hover:to-red-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none  ">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
