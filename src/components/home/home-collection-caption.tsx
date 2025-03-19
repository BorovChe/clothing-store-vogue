interface IHomeCollectionCaption {
  title: string;
  caption: string;
}

const HomeCollectionCaption = ({ title, caption }: IHomeCollectionCaption) => {
  return (
    <>
      <h3 className="mb-2 text-center text-xl lg:text-2xl">{title}</h3>
      <p className="text-center text-base/1.5">{caption}</p>
    </>
  );
};

export default HomeCollectionCaption;
