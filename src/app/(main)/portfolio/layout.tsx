import MainHeader from "@/components/MainHeader";

export const PortfolioLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
};

export default PortfolioLayout;
