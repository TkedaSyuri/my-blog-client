import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div>
        <div>
          <Link href="portfolio" className="text-4xl">
            ポートフォリオ
          </Link>
        </div>
        <div>
          <Link href="record" className="text-4xl">
            学習記録
          </Link>
        </div>
        <div>
        <Link href="profile" className="text-4xl">
          プロフィール
        </Link>
        </div>
      </div>
    </main>
  );
}
