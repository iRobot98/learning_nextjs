import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import React from "react";

export const metadata = {
  title: "Proomptopia",
  description: "Discover and Share AI powered prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
