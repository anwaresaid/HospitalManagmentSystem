import React from "react";

const Title = (props: any) => {
  return (
    <div>
      <span className="font-bold text-3xl">
        Good Morning, {props.title}.{props.name}
      </span>
      <p className="text-slate-700">
        Hello there! Welcome to our medical app. How can we assist you today?
      </p>
    </div>
  );
};

export default Title;
