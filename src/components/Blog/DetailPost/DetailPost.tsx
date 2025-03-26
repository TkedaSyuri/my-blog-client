"use client";

import { deletePost } from "@/app/api/post";
import { Posts } from "@/app/Type";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PostProps {
  detailPost: Posts;
}

const DetailPost: React.FC<PostProps> = ({ detailPost }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await deletePost(detailPost.id);
      router.push("/blog");
      router.refresh();
    } catch (err) {
      console.log(err)
  };
}

  return (
    <div>
      <div className="font-bold flex justify-start ">
        <Link href={"/blog"}>
          <p>戻る</p>
        </Link>
      </div>
      <div className="border-b-2 border-black">
        <h1 className=" py-4 text-4xl font-bold flex justify-center">
          「{detailPost.title}」
        </h1>
        <div className="font-bold flex justify-center">
          作成日: {detailPost.created_at}
        </div>
      </div>
      <div className="ex justify-center  h-screen fl">
        <article className="w-full">
          <h2 className="text-4xl font-bold ">はじめに</h2>
          <div className="break-words ">
            <p className="text-2xl ">{detailPost.content}</p>
          </div>
          <div className="flex justify-end  gap-4">
            <button className="p-1 bg-green-500 rounded-md">
              <Link href={`/blog/edit/${detailPost.id}`}>編集する</Link>
            </button>
            <button
              className="p-1 bg-red-500 rounded-md"
              onClick={() => handleDelete()}
            >
              削除する
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DetailPost;
