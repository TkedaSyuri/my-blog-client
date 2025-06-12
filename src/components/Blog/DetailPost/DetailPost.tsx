"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Posts } from "@/types/types";
import { deletePost } from "@/app/lib/api/delete";


interface PostProps {
  detailPost: Posts;
}

const DetailPost: React.FC<PostProps> = ({ detailPost }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("本当にこの投稿を削除してもよろしいですか？")) return;
    try {
      await deletePost(detailPost.id);
      router.push("/blog");
    } catch (error) {
      console.error("削除エラー:", error);
    }
  };

  const formattedDate = new Date(detailPost.created_at).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href="/blog">
        <p className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <span className="mr-2 text-xl">←</span>戻る
        </p>
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <header className="mb-4 text-center">
          <h1 className="text-3xl font-bold mb-1">「{detailPost.title}」</h1>
          <p className="text-sm text-gray-500">作成日: {formattedDate}</p>
        </header>

        <article className="prose prose-lg mb-6">
          <p>{detailPost.content}</p>
        </article>

        <div className="flex justify-end space-x-4">
          <Link href={`/blog/edit/${detailPost.id}`}> 
            <p className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              編集
            </p>
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
