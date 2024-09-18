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
    await deletePost(detailPost.id);
    router.push("/blog");
    router.refresh()
  };

  return (
    <div>
      <div className="font-bold flex justify-start ">
        <Link href={"/blog"}>
          <span>戻る</span>
        </Link>
      </div>

      <div className=" py-4 text-4xl font-bold flex justify-center">
        「{detailPost.title}」
      </div>
      <div className="font-bold flex justify-center">
        作成日: {detailPost.created_at}
      </div>
      <div className="border-t-2 border-black">
        <div>{detailPost.content}</div>
      </div>
      <button className="bg-green-500 rounded-sm">
        <Link href={`/blog/edit/${detailPost.id}`}>編集する</Link>
      </button>
      <button className="bg-red-500 rounded-sm" onClick={() => handleDelete()}>
        削除する
      </button>
    </div>
  );
};

export default DetailPost;
