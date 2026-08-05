import React, { useContext } from 'react'
import {Themecontext, Usercontext} from'../App'

const ChildC = () => {
    // const user=useContext(Usercontext)
    const {theme,settheme}=useContext(Themecontext);
    function handleClick(){
        if(theme==='light')
            settheme('dark')
        else
            settheme('light')
    }
  return (
    <div>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC
