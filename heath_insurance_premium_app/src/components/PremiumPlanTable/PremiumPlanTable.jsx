import React from "react";
import { useSelector } from "react-redux";

const PremiumPlanTable = () => {
  const state = useSelector((state) => state.premiumReducer);
  const premium = state.premium;
  return <div>{premium.membersPremium?.map((member) => member.name)}</div>;
};

export default PremiumPlanTable;
