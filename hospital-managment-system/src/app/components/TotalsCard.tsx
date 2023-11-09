import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SumCard from "./SumCard";

const totals = [
  {
    icon: "group",
    title: "Total Patients",
    sum: "146",
  },
  {
    icon: "payment",
    title: "Total Income",
    sum: "$3,098",
  },
  {
    icon: "date",
    title: "Total Appointment",
    sum: "231",
  },
  {
    icon: "treatment",
    title: "Treatments",
    sum: "402",
  },
];

const TotalsCard = (props: any) => {
  return (
    <div className="w-full ms-3">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="flex flex-row">
            {props?.data?.map((item: Object, index: Number) => {
              return (
                <SumCard
                  data={item}
                  last={index === totals.length ? true : false}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TotalsCard;
