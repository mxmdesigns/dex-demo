import React from "react";
import { formatToPesos, getUser } from "../../js/helpers";
import { GroupType, PaymentType } from "../../js/types";
import "../../styles/Split/AllPayments";

export const AllPayments = ({ payments }: { payments: PaymentType[] }) => {
  const groupPayments = payments.reduce((acc: GroupType[], curr) => {
    const group = acc.find((item) => item.group === curr.group);

    if (group) {
      group.payees.push(curr.payee);
      group.payments.push(curr.id);
    } else {
      acc.push({
        group: curr.group,
        amount: curr.amount,
        description: curr.description,
        payor: curr.payor,
        payees: [curr.payee],
        payments: [curr.id],
      });
    }
    return acc;
  }, []);

  return (
    <div className="all-payments">
      <div className="all-payments__header">Payments</div>
      <div className="all-payments__content">
        {groupPayments.map((payment, i) => (
          <div className="all-payments__item" key={`${payment.group}-${i}`}>
            <div className="all-payments__item-id">
              #{payment.group.split("-")[1]}
            </div>
            <div className="all-payments__item-names">
              {getUser(payment.payor)?.name} →{" "}
              {getUser(payment.payees[0])?.name}
              {payment.payees.length > 1 && <> + {payment.payees.length - 1}</>}
            </div>
            <div className="all-payments__item-desc">{payment.description}</div>
            <div className="all-payments__item-amount">
              {formatToPesos(payment.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPayments;
