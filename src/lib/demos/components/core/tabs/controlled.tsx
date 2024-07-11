"use client";

import React from "react";
import type { Key } from "react-aria-components";
import { Tabs, TabList, TabPanel, Tab } from "@/lib/components/core/default/tabs";

export default function Demo() {
  const [selectedTab, setSelectedTab] = React.useState<Key>("overview");
  return (
    <div className="flex flex-col items-center gap-6">
      <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
        <TabList>
          <Tab id="overview">Overview</Tab>
          <Tab id="usage">Usage</Tab>
          <Tab id="settings">Settings</Tab>
        </TabList>
        <TabPanel id="overview"> You can view all your projects here. </TabPanel>
        <TabPanel id="usage"> You can view your usage here. </TabPanel>
        <TabPanel id="settings"> You can view your settings here. </TabPanel>
      </Tabs>
      <p className="text-sm text-fg-muted">
        Selected tab: <span className="font-bold text-fg">{selectedTab}</span>
      </p>
    </div>
  );
}
