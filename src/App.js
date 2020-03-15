import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/";
import Header from "./layout/header";
import auditTrails from "./views/auditTrail/index";
import appRegistration from "./views/appRegistration/index";
import actionTypeConfig from "./views/actionTypeConfig/index"
// Add all icons to the library so you can use it in your page

function App() {
  
  return (
    <Provider store={store}>
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/" component={appRegistration} />
          <Route path="/audit/trails" component={auditTrails} />
          <Route path="/action/type/config" component={actionTypeConfig} />

        </main>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
