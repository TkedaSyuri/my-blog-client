import Header from "@/components/Layout/Header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Takeda Syuri - Blog",
  description: "This is Takeda Syuri Blog",
};


 const PortfolioLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-100">
      <Header />
      {children}
    </div>
  );
};

export default PortfolioLayout;
