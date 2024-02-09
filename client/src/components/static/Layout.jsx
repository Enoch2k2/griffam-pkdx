import React from 'react'

const Layout = ({ children }) => {
  return (
    <div style={{width: "80%", backgroundColor: "white", margin: "0 auto", marginTop: "12px", padding: "12px 12px 12px 12px"}}>
      {children}
    </div>
  )
}

export default Layout