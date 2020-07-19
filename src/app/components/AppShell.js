import React from "react";
import Header from "./layouts/Header";

export const AppShell = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);
