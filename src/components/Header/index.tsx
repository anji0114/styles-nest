import React from "react";
import { HeaderDashboard } from "./Dashboard";
import { HeaderLp } from "./Lp";

export const Header = () => {
  return <>{true ? <HeaderDashboard /> : <HeaderLp />}</>;
};
