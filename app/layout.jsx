import "@styles/globals.css"

import React from 'react'

export const metadata = {
    title: "Proomptopia",
    description: "Discover and Share AI powered prompts",
}

function RootLayout({children}) {
  return (
    <html lang="en">
   
    <body>
        <div className="main">
        <div className="gradient"/>
        </div>

        <main className="app">
            {children}
        </main>
    </body>
    </html>
  )
}

export default RootLayout