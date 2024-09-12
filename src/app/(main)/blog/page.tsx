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
      <h2 className="text-2xl font-bold">ブログ一覧</h2>
    <button className="bg-gray-600 text-white p-1 rounded-lg">
      <Link href="blog/new">
      投稿する
      </Link> 
      </button>
      <div className="mt-7">
        <div className="grid gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-r   from-red-700  to-gray-700  p-5 mx-10"
            >
              <div className="text-2xl hover:text-blue-600 cursor-default">
                <div className="text-white">{post.title}</div>
              </div>
              <div className="font-semibold ">作成日 : {post.created_at}</div>
              <div className="">
                <Link href={`record/post/${post.id}`}>
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
    </main>
  );
};

export default page;
