"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const NewPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title, content);
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
