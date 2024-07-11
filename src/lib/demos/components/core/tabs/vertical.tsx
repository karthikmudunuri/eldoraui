import { Tabs, TabList, TabPanel, Tab } from "@/lib/components/core/default/tabs";

export default function Demo() {
  return (
    <Tabs orientation="vertical">
      <TabList>
        <Tab id="overview">Overview</Tab>
        <Tab id="usage">Usage</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
      <TabPanel id="overview">You can view all your projects here. </TabPanel>
      <TabPanel id="usage"> You can view your usage here. </TabPanel>
      <TabPanel id="settings"> You can view your settings here. </TabPanel>
    </Tabs>
  );
}
