import React, { useState } from "react";
import "./Sidebar.css";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import SettingsFillIcon from "remixicon-react/ToolsFillIcon";
import { TwitterPicker } from "react-color";
import { Button } from "@chakra-ui/react";

const Sidebar = ({
  sidebar,
  handleUpdateBackground,
  deleteSelectedEncounter,
}) => {
  const [chromePickerColor, setChromePickerColor] = useState("#8ED1FC");

  const handleClick = () => {
    deleteSelectedEncounter();
  };

  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <SettingsFillIcon className="sidebar-item-icon" /> Settings
      </li>
      <div className="monster-card-background-color-title-container">
        <div className="monster-card-background-color-title">
          Monster Card Colour
        </div>
      </div>
      <div className="color-picker-container">
        <TwitterPicker
          color={chromePickerColor}
          triangle="hide"
          colors={[
            "#abdee6",
            "#cbaacb",
            "#ffffb5",
            "#ffccb6",
            "#f3b0c3",
            "#c6dbda",
            "#8fcaca",
            "#ffdbcc",
            "#eceae4",
            "#cce2cb",
          ]}
          onChange={(color) => {
            setChromePickerColor(color.hex);
            handleUpdateBackground(color.hex);
          }}
        />
      </div>

      <li
        className="clickable-sidebar-li"
        onClick={() =>
          window.open(
            "https://github.com/Zinka010/dnd-monster-tracker",
            "_blank",
          )
        }
      >
        <GithubFillIcon className="sidebar-item-icon" />
        GitHub
      </li>

      <li>
        <Button size="md" colorScheme="red" onClick={handleClick}>
          Delete Current Encounter
        </Button>
      </li>

      <h5 className="author-note">Created with love by Justin Toft</h5>
    </div>
  );
};

export default Sidebar;
