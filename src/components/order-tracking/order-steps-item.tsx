import Image from "next/image";

interface IOrderStepsItemProps {
  icon: string;
  step: string;
  title: string;
  caption: string;
}

const OrderStepsItem = ({
  icon,
  step,
  title,
  caption,
}: IOrderStepsItemProps) => {
  return (
    <li>
      <div>
        <Image
          src={`/icons/order-tracking/${icon}`}
          alt={title}
          width={28}
          height={40}
        />
      </div>
      <p>Step{step}</p>
      <h3>{title}</h3>
      <p>{caption}</p>
    </li>
  );
};

export default OrderStepsItem;
