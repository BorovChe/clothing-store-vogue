import Link from "next/link";
import Image from "next/image";

import IJournalProps from "@/interfaces/journal";

const JournalItem = ({ id, image, date, caption }: IJournalProps) => {
  return (
    <li className="max-w-[370px] ">
      <Link
        href={`/journal/${id}`}
        className="flex flex-col items-center overflow-hidden outline-none"
      >
        <div className="relative w-full h-[216px] sm:w-[370px] sm:h-[278px] mb-4">
          <Image
            src={`/temp/journal/${image}`}
            alt={caption}
            fill
            sizes="(max-width: 1170px) 370px, 278px"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-[280px] sm:max-w-[338px]">
          <p className="mb-2 text-center font-medium text-sm text-secondary-666">
            {date}
          </p>
          <p className="text-center font-medium text-lg">{caption}</p>
        </div>
      </Link>
    </li>
  );
};

export default JournalItem;
