import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Items} from "./components/Items/Items";
import {Cart} from "./components/Cart/Cart";
import {Login} from "./components/Login/Login";

const App: React.FC = () => (
    <div className="app">
        <Header/>
        <Switch>
            <Route exact path={"/"} component={Main}/>
            <Route path={"/items"} component={Items}/>
            <Route path={"/cart"} component={Cart}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/*"} render={()=>"Not Found"}/>
        </Switch>
    </div>
);


const ShopApp: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
};

export default ShopApp;
