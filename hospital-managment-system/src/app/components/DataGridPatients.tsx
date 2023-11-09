import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataGridPatients = (props: any) => {
  return (
    <div className="w-full">
      {props.data ? (
        <DataGrid
          sx={{
            "& .MuiDataGrid-cellContent": {
              whiteSpace: "normal",
              lineHeight: "normal",
            },
            "& .MuiDataGrid-columnContent": {
              height: "unset !important",
              maxHeight: "168px !important",
            },
          }}
          rows={props.data}
          columns={props.headers}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DataGridPatients;
