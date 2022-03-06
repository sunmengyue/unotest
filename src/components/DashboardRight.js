import React from "react";
import {
  BsHandIndexThumb,
  BsPencilSquare,
  BsTelephone,
  BsJournalText,
  BsUpload,
  BsThreeDotsVertical
} from "react-icons/bs";
import { BiCoffee } from "react-icons/bi";
import "../style/DashboardRight.css";

const DashboardRight = () => {
  const schedules = [
    {
      time: "9:00 am",
      plans: [
        {
          icon: <BsHandIndexThumb className="planIcon" />,
          task: "Meet John",
          timeDuration: "09:00 - 09:30"
        },
        {
          icon: <BiCoffee className="planIcon" />,
          task: "Goes to Caffe Indoran",
          timeDuration: "09:30 - 10:00"
        }
      ]
    },
    {
      time: "10:00 am",
      plans: [
        {
          icon: <BsPencilSquare className="planIcon" />,
          task: "Update task",
          timeDuration: "10:00 - 10:15"
        },
        {
          icon: <BsTelephone className="planIcon" />,
          task: "Call Dhea for work",
          timeDuration: "10:15 - 10:45"
        },
        {
          icon: <BsJournalText className="planIcon" />,
          task: "Schedule for assignments",
          timeDuration: "10:45 - 11:00"
        }
      ]
    },
    {
      time: "11:00 am",
      plans: [
        {
          icon: <BsUpload className="planIcon" />,
          task: "Send some work",
          timeDuration: "11:00 - 11:30"
        }
      ]
    }
  ];
  return (
    <div className="dashboard_right">
      <div className="schedules">
        {schedules.map((schedule) => (
          <div className="schedule" key={Math.random()}>
            <p className="schedule_time">{schedule.time}</p>
            <div className="schedule_plans">
              {schedule.plans.map((plan) => (
                <div className="plan" id={plan.task} key={Math.random()}>
                  <div className="planIcon_container">{plan.icon}</div>
                  <div className="planInfo">
                    <p className="planInfo_task">{plan.task}</p>
                    <p className="planInfo_time">{plan.timeDuration}</p>
                  </div>
                  <BsThreeDotsVertical className="plan_more" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardRight;
