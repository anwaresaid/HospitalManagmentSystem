import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SumCard from "./SumCard";

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
                  last={index === props.data.length ? true : false}
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
