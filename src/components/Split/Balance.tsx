import React from "react";
import { formatToPesos, getBalance } from "../../js/helpers";
import { USERS } from "../../js/sample_data";
import { UserType } from "../../js/types";
import "../../styles/Split/Balance";

export const Balance = ({ payments }) => {
  const balanceSheet = getBalance(payments);

  return (
    <div className="balance">
      <div className="balance__header">Balance</div>
      <div className="balance__content">
        {Object.entries(balanceSheet)
          .sort((a, b) => (b[1] as number) - (a[1] as number))
          .map(([balancedUser, balance]) => (
            <div className="balance__item">
              <div className="balance__item-user">
                {USERS.find((user) => user.id === balancedUser)?.name}
              </div>
              <div className="balance__item-amount">
                {formatToPesos(balance as number)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Balance;
