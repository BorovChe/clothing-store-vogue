interface ICollectionFilterRadioBtn {
  category: string;
  title: string;
  value: string;
  checked?: boolean;
}

const CollectionFilterRadioBtn = ({
  category,
  title,
  value,
  checked,
}: ICollectionFilterRadioBtn) => {
  return (
    <>
      <input
        type="radio"
        name={category}
        id={value}
        value={value}
        defaultChecked={checked}
      />
      <label htmlFor={value}>{title}</label>
    </>
  );
};

export default CollectionFilterRadioBtn;
