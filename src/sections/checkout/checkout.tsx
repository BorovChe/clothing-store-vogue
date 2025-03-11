import CheckoutForm from "@/components/checkout/billing-details-form";
import TotalOrder from "@/components/checkout/total-order";
import MainContainer from "@/components/common/main-container";
import MainTitle from "@/components/common/main-title";
import Link from "next/link";
import React from "react";

const CheckoutSection = () => {
  return (
    <section>
      <MainContainer>
        <MainTitle>Checkout</MainTitle>
        <p className="text-center">
          Have a coupon? {<Link href={"/"}>Click here</Link>} to enter
        </p>
        <div className="flex justify-between">
          <div>
            <h3>BILLING DETAILS</h3>
            <CheckoutForm />
          </div>
          <TotalOrder />
        </div>
      </MainContainer>
    </section>
  );
};

export default CheckoutSection;
