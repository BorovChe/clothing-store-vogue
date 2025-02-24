import socialsLinks from "@/data/navigation-social-links.json";
import SocialLinkItem from "./social-link-item";

const SocialLinksList = () => {
  return (
    <ul className="flex gap-4">
      {socialsLinks.map((link) => (
        <SocialLinkItem key={link.id} {...link} />
      ))}
    </ul>
  );
};

export default SocialLinksList;
