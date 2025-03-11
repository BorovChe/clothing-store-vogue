import Image from "next/image";
import Link from "next/link";

import paymentMethods from "@/data/payment-methods.json";
import { IPaymentMethod } from "@/interfaces/payment-method";

const PaymentMethodsList = () => {
  return (
    <ul className="flex gap-3">
      {paymentMethods.map(({ id, icon, link }: IPaymentMethod) => (
        <li
          key={id}
          className="transition-transform duration-200 hover:scale-110"
        >
          <Link href={link} target="_blank">
            <Image
              src={`/icons/payment-methods/${icon}`}
              alt={icon}
              width={52}
              height={32}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PaymentMethodsList;
