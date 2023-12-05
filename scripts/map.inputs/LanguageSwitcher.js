import React, { useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { IconButton, Typography, Menu, MenuItem, Box } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language.js";

// Shared
import { random_id } from "../../services/_miscelaneous/toolkit.js";

export default function LanguageSwitcher() {
  if (process.env.REACT_APP_DEBUG === "TRUE") {
    console.log("LanguageSwitcher");
  }
  // i18n
  const { t } = useTranslation();

  // Constants
  const languages = ["enGB", "frFR"];

  // States
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Handles
  const openSwitcher = (event) => {
    setAnchorEl(event.currentTarget);
    setSwitcherOpen(true);
  };
  function closeSwitcher() {
    setSwitcherOpen(false);
  }

  return (
    <Box>
      <IconButton 
        onClick={openSwitcher} 
        size="small" 
        sx={{ ml: 2 }}
        data-testid="component-appbar-button-open localization"
      >
        <LanguageIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        open={switcherOpen}
        onClose={closeSwitcher}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        data-testid="component-appbar-list-localization"
      >
        {languages.map((language) => {
          return (
            <MenuItem
              key={random_id()}
              data-testid="component-appbar-listitem-localization"
              onClick={() => {
                Cookies.set("cowhist19_language", language);
                window.location.reload(false);
              }}
            >
              {t("generic.language." + language + ".long")}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
