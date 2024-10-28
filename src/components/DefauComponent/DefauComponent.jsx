import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefauComponent = ({children}) => {
  return (
    <div>
      <HeaderComponent/>
      <main>{children}</main>
    </div>
  )
}

export default DefauComponent