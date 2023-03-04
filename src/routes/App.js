import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound';
import Layout from "../components/Layout";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/dummyproducts/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;