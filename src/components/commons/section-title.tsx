interface ISectionTitle {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: ISectionTitle) => {
  return <h2 className="text-center">{children}</h2>;
};

export default SectionTitle;
