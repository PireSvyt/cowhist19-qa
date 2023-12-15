import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Box, Tabs, Tab, Fab, Typography, Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import ErrorIcon from "@mui/icons-material/Error";

// Components
import Appbar from "./components/Appbar.js";
import TableStats from "./components/TableStats.js";
import TableHistory from "./components/TableHistory.js";
import GameModal from "./modals/GameModal.js";
import Snack from "./components/Snack/Snack2.js";
// Services
import {
  serviceTableGetDetails,
  serviceTableGetHistory,
  serviceTableGetStats,
} from "../services/table/table.services.js";
// Reducers
import appStore from "../store/appStore.js";

export default function Table() {
  if (process.env.REACT_APP_DEBUG === "TRUE") {
    console.log("Table");
  }
  // i18n
  const { t } = useTranslation();

  // States
  const [tab, setTab] = useState(0);

  // Selects
  const select = {
    authLoaded: useSelector((state) => state.authSlice.loaded),
    signedin: useSelector((state) => state.authSlice.signedin),
    tableState: useSelector((state) => state.tableSlice.state),
    tableDenied: useSelector((state) => state.tableSlice.denied),
    name: useSelector((state) => state.tableSlice.name),
    snackData: useSelector((state) => state.sliceSnack.snackData),
    openGameModal: useSelector((state) => state.gameModalSlice.open),
  };
  /*
  console.log("select.authLoaded", select.authLoaded)
  console.log("select.signedin", select.signedin)
  console.log("select.tableState", select.tableState)
  console.log("select.name", select.name)
  */

  // Changes
  let changes = {
    edittable: () => {
      console.log('Table.changes.edittable')
      appStore.dispatch({
        type: "tableModalSlice/open",
        payload: {
          tableid: appStore.getState().tableSlice.tableid,
          name: appStore.getState().tableSlice.name,
          players: appStore.getState().tableSlice.players,
        },
      });
    },
    newgame: () => {
      appStore.dispatch({ type: "gameModalSlice/new" });
    }
  }

  // Load at opening
  if (select.authLoaded === true && select.signedin === true && select.tableState.details === undefined) {
    serviceTableGetDetails();    
  }
  if (select.authLoaded === true && select.signedin === true && select.tableState.stats === undefined) {
    serviceTableGetStats();  
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={"tabpanel-" + index}
        aria-labelledby={"tab-" + index}
        {...other}
      >
        {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
      </Box>
    );
  }
  function changeTab(event, newTabIndex) {
    switch (newTabIndex) {
      case 0:
        serviceTableGetStats();
        setTab(newTabIndex);
        break;
      case 1:
        serviceTableGetHistory();
        setTab(newTabIndex);
        break;
      default:
        if (process.env.REACT_APP_DEBUG === "TRUE") {
          console.log("/!\\ no match tab index : " + newTabIndex);
        }
    }
  }

  return (
    <Box data-testid="page-table">
      <Appbar
        route="table"
        title={select.name}
        edittable={changes.edittable}
      />
      <Box sx={{ height: 48 }} />
      {select.authLoaded !== true ? (
        <Box sx={{ left: "10%", right: "10%" }}>
          <LinearProgress />
        </Box>
      ) : select.signedin === false ? null : select.tableDenied === true ? (
        <Box
          sx={{
            m: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          data-testid="page-table-box-denied access"
        >
          <Typography
            sx={{ mt: 2, mb: 2, whiteSpace: "pre-line" }}
            variant="h6"
            component="span"
            align="center"
          >
            {t("table.label.deniedaccess")}
          </Typography>
          <ErrorIcon sx={{ mt: 2, mb: 2 }} fontSize="large" color="error" />
          <Typography
            sx={{ mt: 2, mb: 2, whiteSpace: "pre-line" }}
            variant="body1"
            component="span"
            align="center"
          >
            {t("table.label.deniedaccessexplanation")}
          </Typography>
          <Button
            onClick={() => {
              window.location = "/";
            }}
            variant={"contained"}
            sx={{ mt: 2, mb: 2 }}
            data-testid="page-table-button-to home"
          >
            {t("generic.button.tohome")}
          </Button>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
            data-testid="page-table-box-granted access"
          >
            <Tabs value={tab} onChange={changeTab} variant="fullWidth">
              <Tab
                label={t("table.label.stats")}
                id="tab-0"
                aria-controls="tabpanel-0"
                data-testid="page-table-button-to analytics tab"
              />
              <Tab
                label={t("table.label.history")}
                id="tab-1"
                aria-controls="tabpanel-1"
                data-testid="page-table-button-to history tab"
              />
            </Tabs>
          </Box>
          <TabPanel 
            value={tab} index={0}
            data-testid="page-table-box-analytics tab"
          >
            <TableStats />
          </TabPanel>
          <TabPanel 
            value={tab} index={1}
            data-testid="page-table-box-history tab"
          >
            <TableHistory />
          </TabPanel>
          <Fab
            variant="extended"
            color="primary"
            sx={{ position: "fixed", bottom: 20, right: 20 }}
            onClick={changes.newgame}
            data-testid="page-table-button-new game"
          >
            {t("table.button.newgame")}
          </Fab>
          <Box sx={{ height: 60 }} />

          {select.openGameModal === true ? <GameModal /> : null}

          <Snack data={select.snackData} />
        </Box>
      )}
    </Box>
  );
}
