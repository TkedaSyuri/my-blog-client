"use client";

import { editPost } from "@/app/api/post";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";




const EditPostPage = ({ params }: { params: { id: string } }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const id = params.id


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await editPost(title, content,id);
    router.push("/blog");
    router.refresh()
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="font-bold flex justify-start">
        <Link href={"/blog"}>
          <span>戻る</span>
        </Link>
      </div>

      <div className="mt-10 mx-auto w-full max-w-sm">
        <h1 className="pt-2 text-2xl font-bold flex justify-center">
          ブログ編集
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold">タイトル</label>
            <input
              type="text"
              className="block mt-1 py-1.5 px-2 w-full rounded-md border-2 border-gray shadow-sm outline-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>
          <div>
            <label className="block font-semibold ">本文</label>
            <textarea
              className="block mt-1 py-1.5 px-2 w-full rounded-md border-2 border-gray shadow-sm outline-none"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
            />
          </div>
          <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 px-1 bg-gray-300 border-2 border-black rounded-sm "
          >
            <span>編集する</span>
          </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostPage;
