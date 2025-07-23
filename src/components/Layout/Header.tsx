import Link from "next/link";

export const MainHeader = () => {
  return (
    <header className="py-4 bg-gradient-to-r from-red-700  to-gray-800">
      <div className="text-center">
        <Link href="/" className=" text-white font-semibold text-4xl">
           Takeda Syuri - Blog
        </Link>
      </div>
      <div className="px-1 pt-4 text-2x text-white flex justify-around ">
        <div>
          <Link href="/" className="font-semibold">
            ホーム
          </Link>
        </div>
        <div>
          <Link href="/profile" className="font-semibold">
            プロフィール
          </Link>
        </div>
        <div>
          <Link href="/blog" className="font-semibold">
            ブログ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
