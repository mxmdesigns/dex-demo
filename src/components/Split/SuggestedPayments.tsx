import React from "react";
import { formatToPesos, getBalance } from "../../js/helpers";
import { BalanceType, CreditDebtType } from "../../js/types";
import { USERS } from "../../js/sample_data";
import "../../styles/Split/SuggestedPayments";

export const SuggestedPayments = ({ payments }) => {
  const balanceSheet = getBalance(payments);
  const creditors: CreditDebtType[] = [];
  const debtors: CreditDebtType[] = [];

  Object.keys(balanceSheet).forEach((user) => {
    const amount = balanceSheet[user];

    if (amount > 0) {
      creditors.push({ user, amount });
    } else if (amount < 0) {
      debtors.push({ user, amount: -amount });
    }
  });

  const consolidatedTransactions: BalanceType[] = [];

  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const amountToSettle = Math.min(debtor.amount, creditor.amount);

    consolidatedTransactions.push({
      payor: debtor.user,
      payee: creditor.user,
      amount: amountToSettle,
    });

    debtor.amount -= amountToSettle;
    creditor.amount -= amountToSettle;

    if (debtor.amount === 0) i++;
    if (creditor.amount === 0) j++;
  }

  return (
    <div className="suggested">
      <div className="suggested__header">Suggested</div>
      <div className="suggested__content">
        {payments.length > 0 ? (
          consolidatedTransactions.map((transaction) => (
            <div className="suggested__item">
              <div className="suggested__item-users">
                <div className="suggested__item-users--payor">
                  {USERS.find((user) => user.id === transaction.payee)?.name}
                </div>
                <span> → </span>
                <div className="suggested__item-users--payee">
                  {USERS.find((user) => user.id === transaction.payor)?.name}
                </div>
              </div>
              <div className="suggested__item-amount">
                {formatToPesos(transaction.amount as number)}
              </div>
            </div>
          ))
        ) : (
          <div className="no-info">No information</div>
        )}
      </div>
    </div>
  );
};

export default SuggestedPayments;
