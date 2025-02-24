import SendDiscountEmail from "./send-discount-email";
import SocialLinksList from "./social-links-list";

const NewsLetter = () => {
  return (
    <div className="w-[270px]">
      <h3 className="max-w-48">
        JOIN THE LIST AND RECEIVE 15% OFF YOUR FIRST ORDER
      </h3>
      <SendDiscountEmail />
      <SocialLinksList />
    </div>
  );
};

export default NewsLetter;
