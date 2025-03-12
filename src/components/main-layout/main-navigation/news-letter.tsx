import SendDiscountEmail from "./send-discount-email";
import SocialLinksList from "./social-links-list";

const NewsLetter = () => {
  return (
    <div className="w-[272px] mx-auto lg:m-0">
      <h3 className="max-w-[240px] font-bold mb-4 leading-normal tracking-[0.12em]">
        JOIN THE LIST AND RECEIVE 15% OFF YOUR FIRST ORDER
      </h3>
      <SendDiscountEmail />
      <SocialLinksList />
    </div>
  );
};

export default NewsLetter;
