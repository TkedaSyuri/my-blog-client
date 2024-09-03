import Link from "next/link";

export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>
        <header className="bg-gradient-to-r   from-red-600  to-gray-800 ">
          <Link href="/" className="font-bold text-4xl">
            Syuri Takeda
          </Link>
          <div className="flex justify-end gap-4">
            <div className="flex justify-start">
              <button>
                <div className="bg-gray-400 p-1 ">blogを追加する+</div>
              </button>
              <div className="text-white">
                <Link href="/" className="font-semibold">
                  TOPへ←
                </Link>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};

export default MainLayout;
