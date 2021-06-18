import React from "react";
import { BrowserRouter } from "react-router-dom";
import ActivityBar from "../components/activitybar.component"
import TabsBar from "../components/tabsbar.component"
import StatusBar from "../components/statusbar.component"

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="activityWrapper">
            <ActivityBar />
            <TabsBar />
          </div>
          <StatusBar/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}