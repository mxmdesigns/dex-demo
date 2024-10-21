import React, { ReactElement, useEffect, useState } from "react";
import AllPayments from "../components/Split/AllPayments";
import Balance from "../components/Split/Balance";
import Menu from "../components/Split/Menu";
import Drawer from "../components/Split/Drawer";
import PaymentForm from "../components/Split/PaymentForm";
import SplitContainer from "../components/Split/SplitContainer";
import SuggestedPayments from "../components/Split/SuggestedPayments";
import UserForm from "../components/Split/UserForm";
import { PAYMENTS as SAMPLE_DATA } from "../js/sample_data";
import { PaymentType } from "../js/types";
import "../styles/Split/Global";

export const Split = () => {
  const [payments, setPayments] = useState<PaymentType[]>([]);
  const [useSampleData, setUseSampleData] = useState<boolean>(false);
  const [mode, setMode] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<"payment" | "user" | null>(null);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>(
    null
  );

  useEffect(() => {
    if (drawer === "payment") {
      setDrawerContent(<PaymentForm setPayments={setPayments} />);
    } else if (drawer === "user") {
      setDrawerContent(<UserForm />);
    } else {
      setDrawerContent(null);
    }
  }, [drawer]);

  return (
    <SplitContainer mode={mode}>
      <Balance payments={useSampleData ? SAMPLE_DATA : payments} />
      <SuggestedPayments payments={useSampleData ? SAMPLE_DATA : payments} />
      <AllPayments payments={useSampleData ? SAMPLE_DATA : payments} />
      <Menu
        useSampleData={useSampleData}
        setUseSampleData={setUseSampleData}
        mode={mode}
        setMode={setMode}
        setModal={setDrawer}
      />
      <Drawer
        content={drawerContent}
        title={drawer ? "Add " + drawer : null}
        setDrawer={setDrawer}
      />
    </SplitContainer>
  );
};

export default Split;
