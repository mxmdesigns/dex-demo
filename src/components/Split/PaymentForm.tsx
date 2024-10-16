import React, { useState } from "react";
import { USERS } from "../../js/sample_data";
import { PaymentType } from "../../js/types";

export const PaymentForm = ({ setPayments }) => {
  const [paymentData, setPaymentData] = useState<PaymentType[]>([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setPayments((prev) => [...prev, ...paymentData]);
    console.log(paymentData);
  };

  const handleChange = (e) => {
    setPaymentData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.value);
    console.log(e.target.name);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <input
        className="payment-form__input"
        name="amount"
        onChange={handleChange}
        required
      />
      <button type="submit" content="wew" />
    </form>
  );
};

export default PaymentForm;
