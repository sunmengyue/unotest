import React from "react";
import "../style/Dashboard.css";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
};

export default Dashboard;
