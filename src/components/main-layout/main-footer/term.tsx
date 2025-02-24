import Link from "next/link";

const FooterTerm = () => {
  return (
    <ul className="flex">
      <li>
        <Link href="/">© Vogue 2025. All Rights Reserved</Link>
      </li>
      <li>
        <Link href="/">Privacy Policy</Link>
      </li>
      <li>
        <Link href="/">Terms & Conditions</Link>
      </li>
    </ul>
  );
};

export default FooterTerm;
