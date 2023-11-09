import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const PersonAppointmentCard = (props: any) => {
  return (
    <Card
      sx={props.width ? { width: props.width } : { minWidth: 275 }}
      className={props.width ? "flex align-center" : ""}
    >
      <CardContent>
        <div className="flex justify-around items-center">
          <Avatar alt="Remy Sharp" src={props.data.avatar} />
          <div>
            <Typography className="font-bold">{props.data.name}</Typography>
            <Typography color="text.secondary">
              {props.data.appointedFor}
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              {props.data.date ? props.data.date : ""}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonAppointmentCard;
