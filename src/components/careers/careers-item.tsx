interface ICareersItemProps {
  title: string;
  location: string;
  salary: string;
  department: string;
}

const CareersItem = ({
  title,
  location,
  salary,
  department,
}: ICareersItemProps) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{department}</p>
      <p>{location}</p>
      <p>{salary}</p>
      <button type="button"></button>
    </li>
  );
};

export default CareersItem;
