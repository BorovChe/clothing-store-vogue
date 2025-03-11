import InstagramSection from "@/sections/main/instagram";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <InstagramSection />
    </>
  );
};

export default MainLayout;
