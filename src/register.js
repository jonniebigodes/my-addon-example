// .storybook/my-addon/register.js

import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import { useParameter } from "@storybook/api";

const PARAM_KEY = "myAddon";
const ADDON_ID = "myaddon";
const PANEL_ID = `${ADDON_ID}/panel`;

// give a unique name for the panel
/* const MyPanel = () => <div>MyAddon</div>; */
const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : "No story parameter defined";
  return <div>{item}</div>;
};
addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "My Addon",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
