import React, { createContext, useContext, useState, useEffect } from "react";
import PersonAppointmentCard from "./PersonAppointmentCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const mockData = [
  {
    name: "Lavern Laboy",
    sickness: "Partial Paralysis",
    time: "11:00 AM - 30 mins",
  },
  {
    name: "Lavern Laboy",
    sickness: "Partial Paralysis",
    time: "11:00 AM - 30 mins",
  },
  {
    name: "Lavern Laboy",
    sickness: "Partial Paralysis",
    time: "11:00 AM - 30 mins",
  },
  {
    name: "Lavern Laboy",
    sickness: "Partial Paralysis",
    time: "11:00 AM - 30 mins",
  },
];

const AppointmentsCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchJson();
  }, []);

  const fetchJson = () => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((response) => {
        setData(response.patients);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-center items-center mb-3">
        <div className="me-2">
          <Typography color="text.secondary">Upcoming Consultation</Typography>
        </div>
        <Chip label="This Week" variant="outlined" />
      </div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {data.slice(0, 3).map((item) => {
            return (
              <div className="mb-px">
                <PersonAppointmentCard data={item} />
              </div>
            );
          })}
        </CardContent>
      </Card>
      <div className="flex flex-row justify-center items-center mb-3">
        <div className="my-5 me-2">
          <Typography color="text.secondary">Previous Consultation</Typography>
        </div>
        <Chip label="This Week" variant="outlined" />
      </div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {data.slice(0, 3).map((item, index) => {
            return (
              <div className="mb-px" key={index}>
                <PersonAppointmentCard data={item} />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsCard;
