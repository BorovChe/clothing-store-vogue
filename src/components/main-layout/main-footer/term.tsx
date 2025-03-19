import Link from "next/link";

const FooterTerm = () => {
  return (
    <ul className="flex font-medium text-sm/[1.5] gap-4 mb-4 md:mb-0 text-secondary-666">
      <li className="pr-[2px] border-r-[1px] border-secondary-eee ">
        <Link
          href="/faqs"
          className="transition-color duration-300 hover:text-secondary-444 focus:text-secondary-444 outline-none"
        >
          © Vogue 2025. All Rights Reserved
        </Link>
      </li>
      <li className="pr-3 border-r-[1px] border-secondary-eee">
        <Link
          href="/faqs"
          className="transition-color duration-300 hover:text-secondary-444 focus:text-secondary-444 outline-none"
        >
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link
          href="/faqs"
          className="transition-color duration-300 hover:text-secondary-444 focus:text-secondary-444 outline-none"
        >
          Terms & Conditions
        </Link>
      </li>
    </ul>
  );
};

export default FooterTerm;
