import InstagramSection from "@/sections/main/instagram";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      <InstagramSection />
    </div>
  );
};

export default MainLayout;
