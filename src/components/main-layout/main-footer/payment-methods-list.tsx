import Image from "next/image";
import Link from "next/link";

import paymentMethods from "@/data/payment-methods.json";
import { IPaymentMethod } from "@/interfaces/payment-method";

const PaymentMethodsList = () => {
  return (
    <ul className="flex gap-3">
      {paymentMethods.map(({ id, icon, link }: IPaymentMethod) => (
        <li key={id} className="w-[38px] h-[24px] md:w-[52px] md:h-[32px] ">
          <Link
            href={link}
            target="_blank"
            className="relative block w-full h-full transition-transform duration-300 hover:scale-110 focus:scale-110 outline-none"
          >
            <Image src={`/icons/payment-methods/${icon}`} alt={icon} fill />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PaymentMethodsList;
