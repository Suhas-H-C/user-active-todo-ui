import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { UserDropDownContext } from "../context/UserDropDownContextProvider";

const ClientDashboard = ({ name }) => {
  const { fetchGridData } = useContext(UserDropDownContext);
  const [row, setRow] = useState([]);

  useEffect(() => {
    (async () => {
      let gridData = await fetchGridData();
      setRow(gridData);
    })();
  }, []);

  const columns = [
    { field: "userId", headerName: "User ID", width: 90 },
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "completed",
      headerName: "Completed",
      width: 110,
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <div>Welcome {name[0]} and others</div>
        <DataGrid
          rows={row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default ClientDashboard;
