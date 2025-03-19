import MainLink from "@/components/common/links/main-link";

const NeedHelpSection = () => {
  return (
    <section className="py-20 bg-primary-f5f6f8">
      <h2 className="text-center">Need Help?</h2>
      <p className="text-center">
        Get answers to all your questions you might have
      </p>
      <div className="max-w-[184px] mx-auto">
        <MainLink href="/contact-us">CONTACT US</MainLink>
      </div>
    </section>
  );
};

export default NeedHelpSection;
