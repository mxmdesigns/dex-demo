import React from "react";
import AllPayments from "../components/Split/AllPayments";
import Balance from "../components/Split/Balance";
import SplitContainer from "../components/Split/SplitContainer";
import SuggestedPayments from "../components/Split/SuggestedPayments";
import { PAYMENTS as SAMPLE_DATA } from "../js/sample_data";

export const Split = () => {
  return (
    <SplitContainer>
      <Balance payments={SAMPLE_DATA} />
      <SuggestedPayments payments={SAMPLE_DATA} />
      <AllPayments payments={SAMPLE_DATA} />
    </SplitContainer>
  );
};

export default Split;
