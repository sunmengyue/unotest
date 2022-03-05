import React from "react";
import TimeChart from "../assets/timeSeriesChart.png";
import Mark from "../assets/mark_nail.jpg";
import Mercy from "../assets/mercy.jpg";
import Valley from "../assets/valley.jpg";
import Upgrade from "../assets/upgrade.png";
import "../style/DashboardLeft.css";

const DashboardLeft = () => {
  const progressData = [
    { number: 16, name: "Team Members" },
    { number: 24, name: "Attachments" },
    { number: 32, name: "Access Credits" },
    { number: 40, name: "Likes" }
  ];

  const performers = [
    {
      profile: Mark,
      name: "Mark Nail",
      position: "Graphic Designer",
      contact: "@mark_naillo",
      progress: "57%"
    },
    {
      profile: Mercy,
      name: "Mercy Gelaro",
      position: "Copy Writer",
      contact: "@mercygelaore",
      progress: "32%"
    },
    {
      profile: Valley,
      name: "Valley Amtonyo",
      position: "Ui Designer",
      contact: "@valleyamtonyo",
      progress: "45%"
    }
  ];

  return (
    <div className="dashboard_left">
      <div className="dashboard_left_upper">
        <p className="dashboard_left_title">Monthly Progress</p>
        <div className="dashboard_left_progress">
          {progressData.map((el) => (
            <div className="progressdata" key={Math.random()}>
              <p className="dashboard_left_title">{el.number}</p>
              <p className="data_name">{el.name}</p>
            </div>
          ))}
        </div>
        <div className="chart_container">
          <img src={TimeChart} alt="time_series_chart" />
        </div>
      </div>
      <div className="dashboard_left_bottom">
        <div className="bottom_left">
          <p className="dashboard_left_title">Top Performers</p>
          <div className="performers">
            {performers.map((performer) => (
              <div className="performer" key={Math.random()}>
                <div className="profile">
                  <img
                    src={performer.profile}
                    alt="photo"
                    className="profile_photo"
                  />
                  <div className="profile_info">
                    <p>{performer.name}</p>
                    <p className="data_name">{performer.position}</p>
                  </div>
                </div>
                <p className="data_name">{performer.contact}</p>
                <p className="progress">{performer.progress}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom_right">
          <img src={Upgrade} alt="upgrade" />
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
