import React, { useState } from 'react'
import MenuOptions from "./MenuOptions"

const MenuBtn = () => {
  let [showMenuBar,setShowMenuBar] = useState(false);

  function MenuBtnClick() {
    setShowMenuBar(true);
  }

  return (
    <>
      <div className='[@media(min-width:768px)]:hidden flex justify-evenly items-center flex-col gap-1 cursor-pointer' onClick={MenuBtnClick}>
        <div className='h-1 w-7 bg-[#457D4E]'></div>
        <div className='h-1 w-7 bg-[#457D4E]'></div>
        <div className='h-1 w-7 bg-[#457D4E]'></div>
      </div>

      {showMenuBar && <MenuOptions setMenu={setShowMenuBar}/>}
    </>
  )
}

export default MenuBtn