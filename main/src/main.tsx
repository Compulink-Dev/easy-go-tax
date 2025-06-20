import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import UserContext from "./context/UserContext.tsx";
import SocketProvider from "./context/SocketContext.tsx";
import DriverContext from "./context/DriverContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DriverContext>
      <UserContext>
        <SocketProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SocketProvider>
      </UserContext>
    </DriverContext>
  </StrictMode>
);
