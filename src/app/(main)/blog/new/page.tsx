"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";


const createPost = async (title: string, content: string) => {
    try {
       await fetch(`http://localhost:5000/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, content: content }),
      });
    } catch (err) {
      console.log(err);
      alert("投稿に失敗しました");
    }
  };



const NewPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    await createPost(title,content)
    router.push("/blog")
  };

  return (
    <div className="flex flex-col justify-center py-20">
      <div className="mt-10 mx-auto w-full max-w-sm">
        <h1 className="pt-2 text-2xl font-bold flex justify-center">
          ブログ新規投稿
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold">タイトル</label>
            <input
              type="text"
              className="block mt-1 py-1.5 px-2 w-full rounded-md border-2 border-gray shadow-sm "
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>
          <div>
            <label className="block font-semibold ">本文</label>
            <textarea
              className="block mt-1 py-1.5 px-2 w-full rounded-md border-2 border-gray shadow-sm"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 border-2 border-black rounded-sm"
          >
            投稿
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPostPage;
