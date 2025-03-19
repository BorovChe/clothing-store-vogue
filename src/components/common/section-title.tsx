interface ISectionTitle {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: ISectionTitle) => {
  return <h2 className="text-center text-[28px] sm:text-[32px]">{children}</h2>;
};

export default SectionTitle;
