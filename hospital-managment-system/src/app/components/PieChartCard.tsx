"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartCard = (props: any) => {
  return (
    <div className="ms-3">
      <Card sx={{ minWidth: 275, height: "100%" }}>
        <CardContent>
          <span className="font-bold text-lg">Patient Overview</span>
          <div className="flex flex-row mt-10">
            <PieChart
              series={[
                {
                  data: props.data.length ? props.data : [],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PieChartCard;
