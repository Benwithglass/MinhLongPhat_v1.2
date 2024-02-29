// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import MyContext from './myContext'



function myState(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState('light');
  
    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(17, 24, 39)';
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }

  return (
    <MyContext.Provider value={{mode, toggleMode}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default myState