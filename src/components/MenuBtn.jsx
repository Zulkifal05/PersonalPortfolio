import React, { useState } from 'react'
import MenuOptions from "./MenuOptions"

const MenuBtn = ({about,skills,projects,contact}) => {
  let [showMenuBar,setShowMenuBar] = useState(false);

  function MenuBtnClick() {
    setShowMenuBar(true);
  }

  return (
    <>
      <div className='[@media(min-width:768px)]:hidden flex justify-evenly items-center flex-col gap-1 cursor-pointer' onClick={MenuBtnClick}>
        <div className='h-1 w-7 bg-green-500'></div>
        <div className='h-1 w-7 bg-green-500'></div>
        <div className='h-1 w-7 bg-green-500'></div>
      </div>

      {showMenuBar && <MenuOptions setMenu={setShowMenuBar} showMenu={showMenuBar} about={about} skills={skills} projects={projects} contact={contact}/>}
    </>
  )
}

export default MenuBtn