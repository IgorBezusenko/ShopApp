import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Products} from "./components/Products/Products";

const App: React.FC = () => (
    <div className="app">
        <Header/>
        <Switch>
            <Route path={"/main"} component={Main}/>
            <Route path={"/products"} component={Products}/>
            <Route path={"/cart"} component={Main}/>
            <Route path={"/login"} component={Main}/>
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
