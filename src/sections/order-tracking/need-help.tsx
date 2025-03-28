import MainBtn from "@/components/common/main-btn";

const NeedHelpSection = () => {
  return (
    <section className="py-20 bg-primary-f5f6f8">
      <h2 className="text-center text-[32px] mb-4">Need Help?</h2>
      <p className="max-w-[260px] mx-auto mb-[42px] opacity-70 text-center font-medium">
        Get answers to all your questions you might have
      </p>
      <div className="max-w-[184px] mx-auto">
        <MainBtn link="/contact-us">CONTACT US</MainBtn>
      </div>
    </section>
  );
};

export default NeedHelpSection;
