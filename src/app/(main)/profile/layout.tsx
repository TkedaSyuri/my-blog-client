import MainHeader from "@/components/MainHeader";

export const ProfileLayout = ({
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

export default ProfileLayout;
