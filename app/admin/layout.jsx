import React from 'react'

const RootLayout = ({children}) => {
  return (
      <html
      lang="en"
      >
      <body className="min-h-full flex flex-col">
        <h1>Admin layout</h1>
        
        {children}</body>
    </html>

  )
}

export default RootLayout
