import MainHeader from "@/components/MainHeader";

export const PortfolioLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
};

export default PortfolioLayout;
