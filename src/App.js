import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./containers/Home";
import CardDetail from "./containers/CardDetail";
import NotFound from "./containers/NotFound";

import "./static/styles/Global.scss";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:name" component={CardDetail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}


export default App;
