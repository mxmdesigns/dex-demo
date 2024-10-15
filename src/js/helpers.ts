import { USERS } from "./sample_data";
import { PaymentType } from "./types";

export const formatToPesos = (centavos: number): string => {
  const pesos = centavos / 100;

  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(pesos);
};

export const getUser = (id: string) => {
  return USERS.find((user) => user.id === id);
};

export const getBalance = (payments: PaymentType[]) => {
  const balanceSheet = {};

  payments.forEach((payment) => {
    const { payor, payee, amount, ways } = payment;

    if (!balanceSheet[payor]) balanceSheet[payor] = 0;
    balanceSheet[payor] -= amount / ways;

    if (!balanceSheet[payee]) balanceSheet[payee] = 0;
    balanceSheet[payee] += amount / ways;
  });

  return balanceSheet;
};
