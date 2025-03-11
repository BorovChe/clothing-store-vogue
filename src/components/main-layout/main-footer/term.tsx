import Link from "next/link";

const FooterTerm = () => {
  return (
    <ul className="flex font-medium text-sm/[1.5] gap-4 mb-4 md:mb-0 text-secondary-666">
      <li className="pr-[2px] border-r-[1px] border-secondary-eee transition-color duration-200 hover:text-secondary-444">
        <Link href="/faqs">© Vogue 2025. All Rights Reserved</Link>
      </li>
      <li className="pr-3 border-r-[1px] border-secondary-eee transition-color duration-200 hover:text-secondary-444">
        <Link href="/faqs">Privacy Policy</Link>
      </li>
      <li className="transition-color duration-200 hover:text-secondary-444">
        <Link href="/faqs">Terms & Conditions</Link>
      </li>
    </ul>
  );
};

export default FooterTerm;
