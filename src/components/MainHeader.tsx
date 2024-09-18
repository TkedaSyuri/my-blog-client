import Link from "next/link";

export const MainHeader = () => {
  return (
    <header className="bg-gradient-to-r   from-red-700  to-gray-800">
      <div>
        <Link href="/" className="text-white font-semibold text-4xl">
           PortFolio Blog
        </Link>
      </div>
      <div className="px-1 text-white flex justify-end gap-5">
        <div>
          <Link href="/portfolio" className="font-semibold">
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
        <div>
          <Link href="/portfolio" className="font-semibold">
            ポートフォリオ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
