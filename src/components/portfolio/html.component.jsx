import React from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import OverviewComponent from './overview.component';
import CustomTab from './customtab.component';
import DetailsComponent from "./details.component";
import ChangeLogComponent from "./changelog.component";

const HTMLComponent = () => {
  let { name } = useParams();
  return (
    <React.Fragment>
      <Tabs activeTab='View' className="htmlContainer">
        <TabList className="htmlHeader">
          <OverviewComponent name={name}/>
          <Tab component={CustomTab} label='View' id='View' />
          <Tab component={CustomTab} label='Details' id='Details' />
          <Tab component={CustomTab} label='Change Log' id='Changes' />
          <hr/>
        </TabList>
        <TabList className="htmlBody">
          <TabPanel component={() => <Iframe src={name} title={name}/>} id='View' />
          <TabPanel component={() => <DetailsComponent name={name}/>} id='Details' />
          <TabPanel component={() => <ChangeLogComponent name={name}/>} id='Changes' />
        </TabList>
      </Tabs>
    </React.Fragment>
  );
};

export default HTMLComponent;