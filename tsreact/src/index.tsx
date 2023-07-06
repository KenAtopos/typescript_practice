import React from "react";
import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import { EventComponent } from "./events/EventComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
