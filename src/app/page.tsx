import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 to-gray-800">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-white">Takeda Syuri - Blog</h1>
        <nav className="space-y-4">
          <Link
            href="/profile"
            className="block text-4xl font-bold text-blue-600 hover:text-blue-800 transition duration-200"
          >
            プロフィール
          </Link>
          <Link
            href="/blog"
            className="block text-4xl font-bold text-blue-600 hover:text-blue-800 transition duration-200"
          >
            ブログ
          </Link>
        </nav>
      </div>
    </main>
  );
}
