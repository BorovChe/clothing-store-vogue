const SendDiscountEmail = () => {
  const sendDiscountEmail = async (formData: FormData): Promise<void> => {
    "use server";
    const email = formData.get("discount-email");

    console.log(email);
  };

  return (
    <form action={sendDiscountEmail} className="relative mb-6">
      <label
        htmlFor="discount-email"
        className="absolute top-1/2 right-4 -translate-y-1/2"
      >
        <button type="submit" className="text-sm leading-[1.7] outline-none">
          SEND
        </button>
      </label>
      <input
        type="email"
        name="discount-email"
        placeholder="Your Email"
        className="w-full py-[10px] pl-4 pr-16 font-medium tracking-wider
             border-2 border-solid border-secondary-eee outline-none
         placeholder:text-black placeholder:opacity-40 
         transition-border duration-300
       hover:border-secondary-999 focus:border-secondary-999"
      />
    </form>
  );
};

export default SendDiscountEmail;
