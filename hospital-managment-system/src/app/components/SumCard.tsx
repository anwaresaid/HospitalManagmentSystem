import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentsIcon from "@mui/icons-material/Payments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const SumCard = (props: any) => {
  return (
    <div
      className={
        props.last
          ? "flex flex-row w-full justify-center"
          : "flex flex-row w-full justify-center border-r-2 border-sky-200 "
      }
    >
      <div className="total-icon-container bg-sky-100">
        {props.icon === "groups" ? (
          <GroupsIcon />
        ) : props.data.icon === "payment" ? (
          <PaymentsIcon />
        ) : props.data.icon === "date" ? (
          <CalendarMonthIcon />
        ) : (
          <MedicalServicesIcon />
        )}
      </div>
      <div className="flex flex-col">
        {props.data.title}
        <span className="font-bold text-lg">{props.data.sum}</span>
      </div>
    </div>
  );
};

export default SumCard;
