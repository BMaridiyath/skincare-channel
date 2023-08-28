import React, { useEffect } from "react";
import "./App.css";

function App({ events, region }) {
  useEffect(() => {
    if (events.loaded) {
      console.log("coucou");
      events.loaded("Widget loaded successfully");
    }
  }, []);

  return (
    <div className="widget-container">
      <h1>REGION: {region}</h1>

      <h2>Modify Widet Container State</h2>
      {events.loaded ? (
        <>
          <div className="btn-container">
            <button onClick={() => events.removeFromCart()}>-</button>
            <button onClick={() => events.addToCart()}>+</button>
          </div>
          <button onClick={() => events.openTab("YIPxSr5zG8Q")}>OPEN</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
