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
    <li className="flex flex-col items-center max-w-[300px]">
      <div className="mb-6 w-[120px] h-[120px] flex justify-center items-center z-10 bg-secondary-fff">
        <Image
          src={`/icons/order-tracking/${icon}`}
          alt={title}
          width={44}
          height={44}
        />
      </div>
      <p className="mb-2 text-sm/[1.5] text-[#e95257] uppercase">Step {step}</p>
      <h3 className="mb-4 font-medium text-lg/[1.5]">{title}</h3>
      <p className="text-center font-medium text-secondary-666">{caption}</p>
    </li>
  );
};

export default OrderStepsItem;
