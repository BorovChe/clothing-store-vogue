import MainContainer from "@/components/commons/main-container";
import MainTitle from "@/components/commons/main-title";
import Link from "next/link";
import React from "react";

const CheckoutSection = () => {
  return (
    <section>
      <MainContainer>
        <MainTitle>Checkout</MainTitle>
        <p>Have a coupon? {<Link href={"/"}>Click here</Link>} to enter</p>
      </MainContainer>
    </section>
  );
};

export default CheckoutSection;
