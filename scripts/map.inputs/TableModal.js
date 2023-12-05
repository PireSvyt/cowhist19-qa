import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  Button,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  IconButton,
  List,
  ListItem, FormControl, InputLabel, Select, MenuItem
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";

import AddIcon from "@mui/icons-material/Add.js";

// Components
import InviteModal from "./InviteModal.js";
import PlayerCard from "../components/PlayerCard.js";
// Services
import serviceTableDelete from "../../services/OLD/serviceTableDelete.js";
// Shared
import ConfirmModal from "./ConfirmModal.js";
// Reducers
import appStore from "../../store/appStore.js";
import { serviceTableCreate, serviceTableSave } from "../../services/table/table.services.js";

export default function TableModal() {
  if (process.env.REACT_APP_DEBUG === "TRUE") {
    console.log("TableModal");
  }
  // i18n
  const { t } = useTranslation();

  // Selects
  const select = {
    open: useSelector((state) => state.tableModalSlice.open),
    tableid: useSelector((state) => state.tableModalSlice.tableid),
    inputs: useSelector((state) => state.tableModalSlice.inputs),
    errors: useSelector((state) => state.tableModalSlice.errors),
    disabled: useSelector((state) => state.tableModalSlice.disabled),
    loading: useSelector((state) => state.tableModalSlice.loading),
    openInviteModal: useSelector((state) => state.inviteModalSlice.open),
    openDeleteConfirmModal: useSelector(
      (state) => state.tableModalSlice.deleteConfirm,
    ),
  };

  // Changes
  const changes = {
    name: (e) => {
      appStore.dispatch({
        type: "tableModalSlice/change",
        payload: {
          inputs: { name: e.target.value },
          errors: { name: false },
        },
      });
    },
    guests: (e) => {
      appStore.dispatch({
        type: "tableModalSlice/change",
        payload: {
          inputs: { guests: e.target.value },
          errors: { guests: false },
        },
      });
    },
    players: (e) => {
      appStore.dispatch({
        type: "tableModalSlice/change",
        payload: {
          inputs: { players: e.target.value },
          errors: { players: false },
        },
      });
    },
    invite: () => {
      console.log("TableModal.invite");
      appStore.dispatch({type: "inviteModalSlice/open"})
    },
    create: () => {
      console.log("TableModal.create");
      serviceTableCreate()
    },
    save: () => {
      console.log("TableModal.save");
      serviceTableSave()
    },
  };

  // Constants
  const componentHeight = window.innerHeight - 115;

  // Confirm modal
  const [deleting, setDeleting] = useState(false);
  function confirmCallback(choice) {
    switch (choice) {
      case "close":
        appStore.dispatch({
          type: "tableModalSlice/change",
          payload: {
            deleteConfirmOpen: false,
          },
        });
        break;
      case "delete":
        appStore.dispatch({
          type: "tableModalSlice/change",
          payload: {
            deleteConfirmOpen: false,
          },
        });
        setDeleting(true);
        serviceTableDelete(select.id).then(() => {
          setDeleting(false);
        });
        break;
      default:
        console.error("HistoryCard.confirmCallback unmatched " + choice);
    }
  }

  return (
    <Box>
      <Dialog
        open={select.open}
        onClose={() => {
          appStore.dispatch({ type: "tableModalSlice/close" });
        }}
        fullWidth={true}
        data-testid="modal-table"
      >
        <DialogTitle>{t("table.label.title")}</DialogTitle>
        <DialogContent
          sx={{
            height: componentHeight,
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <TextField
              name="name"
              label={t("generic.input.name")}
              variant="standard"
              value={select.inputs.name}
              onChange={changes.name}
              autoComplete="off"
              sx={{ mb: 1 }}
              error={select.errors.name}
              data-testid="modal-table-input-name"
            />

            <FormControl variant="standard">
              <InputLabel>{t("table.input.guests")}</InputLabel>
              <Select
                value={select.inputs.guests}
                label={t("table.input.guests")}
                onChange={changes.guests}
                error={select.errors.guests}
                data-testid="modal-table-input-guests"
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
              </Select>
            </FormControl>

            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="body1"
                sx={{
                  pt: 2,
                  pb: 2,
                }}
                color={select.errors.players ? "error" : null}
              >
                {t("table.label.players")}
              </Typography>
              <IconButton
                sx={{ p: 2 }}
                onClick={() => {
                  changes.invite()
                }}
                data-testid="modal-table-button-invite player"
              >
                <AddIcon />
              </IconButton>
            </Stack>

            {select.inputs.players.length === 0 && select.id === "" ? (
              <Box
                sx={{
                  m: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                data-testid="modal-table-box-error on creating without user"
              >
                <Typography
                  sx={{ mt: 2, mb: 2, whiteSpace: "pre-line" }}
                  variant="h6"
                  component="span"
                  align="center"
                >
                  {t("table.label.nouserscreate")}
                </Typography>
                <SmsFailedIcon
                  sx={{ mt: 2, mb: 2 }}
                  fontSize="large"
                  color="primary"
                />
                <Typography
                  sx={{ mt: 2, mb: 2, whiteSpace: "pre-line" }}
                  variant="body1"
                  component="span"
                  align="center"
                >
                  {t("table.label.nouserscreateexplanation")}
                </Typography>
              </Box>
            ) : select.inputs.players.length === 0 ? (
              <Box
                sx={{
                  m: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                data-testid="modal-table-box-error on saving without user"
              >
                <Typography
                  sx={{ mt: 2, mb: 2, whiteSpace: "pre-line" }}
                  variant="h6"
                  component="span"
                  align="center"
                >
                  {t("table.label.nousersdelete")}
                </Typography>
                <SmsFailedIcon
                  sx={{ mt: 2, mb: 2 }}
                  fontSize="large"
                  color="error"
                />
                <Typography
                  sx={{ mt: 2, mb: 2, whiteSpace: "pre-line" }}
                  variant="body1"
                  component="span"
                  align="center"
                >
                  {t("table.label.nousersdeleteexplanation")}
                </Typography>
              </Box>
            ) : (
              <List 
                dense={true} 
                data-testid="list-players"
              >
                {select.inputs.players.map((player) => (
                  <ListItem 
                    key={"player-" + player._id}
                  >
                    <PlayerCard player={player} />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              appStore.dispatch({ type: "tableModalSlice/close" });
            }}
            data-testid="modal-table-button-cancel"
          >
            {t("generic.button.cancel")}
          </Button>
          <LoadingButton
            data-testid="modal-table-button-save"
            variant="contained"
            onClick={() => {
              if (select.id === "") {
                changes.create()
              } else {
                changes.save()
              }
            }}
            disabled={select.disabled}
            loading={select.loading}
            color={
              select.inputs.players.length === 0 && select.id === ""
                ? "primary"
                : select.inputs.players.length === 0
                ? "error"
                : "primary"
            }
          >
            {t("generic.button.save")}
          </LoadingButton>
        </DialogActions>
      </Dialog>

      {select.openInviteModal === true ? <InviteModal /> : null}

      {select.openDeleteConfirmModal === true ? (
        <ConfirmModal
          open={select.openDeleteConfirmModal}
          data={{
            title: "table.confirm.deletenoeusers.title",
            content: "table.confirm.deletenoeusers.content",
            callToActions: [
              {
                label: "generic.button.cancel",
                choice: "close",
              },
              {
                label: "generic.button.proceed",
                choice: "delete",
                variant: "contained",
                color: "error",
              },
            ],
          }}
          callback={confirmCallback}
        />
      ) : null}
    </Box>
  );
}
