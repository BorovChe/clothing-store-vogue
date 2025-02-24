import Image from "next/image";

interface IPaymentMethodItemProps {
  icon: string;
}

const PaymentMethodItem = ({ icon }: IPaymentMethodItemProps) => {
  return (
    <li>
      <Image src={`/icons/footer/${icon}`} alt={icon} width={52} height={32} />
    </li>
  );
};

export default PaymentMethodItem;
