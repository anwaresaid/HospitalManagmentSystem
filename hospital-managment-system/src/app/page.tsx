"use client";
import Image from "next/image";
import TableComp from "./components/TableComp";
import AppointmentsCard from "./components/AppointmentsCard";
import Title from "./components/Title";
import TotalsCard from "./components/TotalsCard";
import PieChartCard from "./components/PieChartCard";
import BarChartCard from "./components/BarChartCard";
import React, { useState, useEffect, useLayoutEffect } from "react";

const tableHeaders = [
  "#",
  "NAME",
  "AGE",
  "DATE",
  "APPOINTED FOR",
  "PRIORITY",
  "ACTION",
];

export default function Home() {
  const [totals, setTotals] = useState([]);
  const [patients, setPatients] = useState([]);
  const [patientsOverview, setPatientsOverview] = useState([]);
  const [patientsGender, setPatientsGender] = useState([]);
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchJson();
  }, []);
  useEffect(() => {
    // Update the windowWidth state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchJson = () => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((response) => {
        setTotals(response.totals);
        setPatients(response.patients);
        setPatientsOverview(response.patientsOverview);
        setPatientsGender(response.patientsGender);
        setPatientAppointments(response.patientAppointments);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <main>
      <div className="font-bold text-3xl mb-3">Home</div>
      <div className="flex flex-row justify-between">
        <AppointmentsCard />
        <div className="right-container">
          <div className="w-full flex flex-row justify-center">
            <Title title={"Dr"} name={"Martin"} />
          </div>
          <div className="w-full flex my-5 justify-center">
            <TotalsCard data={totals} />
          </div>
          <div className="w-full flex flex-row justify-center">
            <TableComp data={patients} headers={tableHeaders}></TableComp>
          </div>
          <div
            className={
              windowWidth > 1200
                ? "w-full flex flex-row my-5 justify-between"
                : "w-full flex flex-col my-5 justify-between"
            }
          >
            <PieChartCard data={patientsOverview} />
            <BarChartCard data={patientsGender} />
          </div>
        </div>
      </div>
    </main>
  );
}
