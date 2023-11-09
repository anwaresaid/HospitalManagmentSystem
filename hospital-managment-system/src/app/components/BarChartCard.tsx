"use client";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const BarChartCard = (props: any) => {
  const [maleSeries, setMaleSeries] = useState([]);
  const [femaleSeries, setFemaleSeries] = useState([]);
  const [axis, setAxis] = useState([]);

  useEffect(() => {
    setAxis(props.data.map((item: any) => item.month));
    setMaleSeries(props.data.map((item: any) => item.male));
    setFemaleSeries(props.data.map((item: any) => item.female));
  }, [props.data]);

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <span className="font-bold text-lg">Gender Stats</span>
          {femaleSeries.length > 0 && (
            <BarChart
              xAxis={[{ scaleType: "band", data: axis }]}
              series={[{ data: maleSeries }, { data: femaleSeries }]}
              width={500}
              height={300}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BarChartCard;
