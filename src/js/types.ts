export type PaymentType = {
  id: string;
  payor: string;
  payee: string;
  amount: number;
  group: string;
  ways: number;
  description: string;
};

export type GroupType = {
  group: string;
  amount: number;
  payor: string;
  payees: string[];
  description: string;
  payments: string[];
};

export type UserType = {
  id: string;
  name: string;
};

export type CreditDebtType = {
  user: string;
  amount: number;
};

export type BalanceType = {
  payor: string;
  payee: string;
  amount: number;
};
