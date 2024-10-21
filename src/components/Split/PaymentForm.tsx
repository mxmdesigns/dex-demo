import React, { useEffect, useRef, useState } from "react";
import { USERS } from "../../js/sample_data";
import { PaymentType } from "../../js/types";
import "../../styles/Split/PaymentForm";

const DEFAULT_PAYMENT = {
  payor: "",
  amount: 0,
  description: "",
};

type PartialPaymentType = Pick<PaymentType, "payor" | "amount" | "description">;

export const PaymentForm = ({ setPayments }) => {
  const usersObject = USERS.reduce((acc, curr) => {
    return { ...acc, [curr.id]: false };
  }, {});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [paymentData, setPaymentData] =
    useState<PartialPaymentType>(DEFAULT_PAYMENT);
  const [payees, setPayees] = useState(usersObject);
  const [isPayorOpen, setIsPayorOpen] = useState<boolean>(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(paymentData);
  };

  const handleChange = (e) => {
    setPaymentData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    setPayees((prevPayees) => ({
      ...prevPayees,
      [e.target.name]: !prevPayees[e.target.name],
    }));
  };

  const handlePayorClick = () => {
    setIsPayorOpen(!isPayorOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsPayorOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div
        className="payment-form__input payment-form__select noselect"
        onClick={handlePayorClick}
      >
        <span>{paymentData.payor || "This person"}</span>
        {isPayorOpen && (
          <div className="payment-form__select-options" ref={dropdownRef}>
            {USERS.map((user) => (
              <div>{user.name}</div>
            ))}
          </div>
        )}
      </div>
      <span> paid </span>
      <label htmlFor="amount">
        PHP
        <input
          min={0}
          className="payment-form__input"
          id="amount"
          name="amount"
          type="number"
          onChange={handleChange}
          required
          placeholder="this much"
        />
      </label>
      <span> for: </span>
      <div className="payment-form__users">
        {USERS.map((user) => (
          <label htmlFor={user.id + "box"} key={user.id}>
            <span className="payment-form__users-name noselect">
              {user.name}
            </span>
            <input
              checked={payees[user.id]}
              name={user.id}
              onChange={handleCheck}
              id={user.id + "box"}
              type="checkbox"
            />
            <div className="payment-form__users-box">
              <div className="payment-form__users-box-check">
                {!!payees[user.id] && <span>X</span>}
              </div>
            </div>
          </label>
        ))}
      </div>
      <button type="submit" content="wew" />
    </form>
  );
};

export default PaymentForm;
