import IJournalProps from "@/interfaces/journal";
import Image from "next/image";
import Link from "next/link";

const JournalItem = ({ id, image, date, caption }: IJournalProps) => {
  return (
    <li className="max-w-[370px]">
      <Link href={`/journal/${id}`}>
        <Image
          src={`/temp/journal/${image}`}
          alt={caption}
          width={370}
          height={278}
        />
        <p>{date}</p>
        <p>{caption}</p>
      </Link>
    </li>
  );
};

export default JournalItem;
