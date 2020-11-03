import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="bui-react">
        <TopNav />
        <Hero />
    </div>
  );
}

export default App;
