import Image from "next/image";
import Link from "next/link";

interface ITeamItemProps {
  name: string;
  position: string;
  image: string;
}

const TeamItem = ({ name, position, image }: ITeamItemProps) => {
  return (
    <li className="w-[288px] sm:w-full h-full">
      <Link href="https://www.instagram.com/" target="_blank">
        <div className="relative mb-6 aspect-square overflow-hidden">
          <Image
            src={`/images/about-us/team/${image}`}
            alt={name}
            fill
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 focus:scale-105"
          />
        </div>
        <p className="mb-2 text-center font-medium text-lg uppercase">{name}</p>
        <p className="text-center font-medium">{position}</p>
      </Link>
    </li>
  );
};

export default TeamItem;
