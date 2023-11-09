"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import PersonAppointmentCard from "../components/PersonAppointmentCard";
import TableComp from "../components/TableComp";
import DataGridPatients from "../components/DataGridPatients";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/store/store";

const tableHeaders = [
  {
    headerName: "NAME",
    field: "name",
    width: 100,
  },
  { headerName: "DATE", field: "date", width: 100 },
  { headerName: "TIME", field: "time", width: 100 },
  { headerName: "DESCRIPTION", field: "description", width: 1000 },
];

const page = () => {
  const [history, setHistory] = useState(null);
  const search = useAppSelector((state) => state.searchReducer.value.search);
  const [patients, setPatients] = useState([]);
  const [searchPatient, setSearchPatient] = useState();

  var temp: any = [];
  useEffect(() => {
    fetchJson();
  }, []);

  const fetchJson = () => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((response) => {
        setPatients(response.patients);
        response.patientAppointments.map((data: any, index: number) => {
          data.appointments.map((item: any, index2: number) => {
            temp.push({
              ...item,
              id: index + index2 + data.name,
              name: data.name,
            });
          });
        });
        setHistory(temp);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const patientExist = () => {
    let temp = patients?.find((item: any) => item.name.includes(search));
    return temp;
  };
  return (
    <div>
      {search !== "" ? (
        patientExist() ? (
          <PersonAppointmentCard data={patientExist()} width={"30%"} />
        ) : (
          // <PersonAppointmentCard />
          <p> Cannot find the patient</p>
        )
      ) : (
        <DataGridPatients headers={tableHeaders} data={history} />
      )}
    </div>
  );
};

export default page;
