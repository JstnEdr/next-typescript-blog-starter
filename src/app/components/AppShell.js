import React from "react";
import Header from "./Header";

export const AppShell = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);
