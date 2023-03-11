import React, { useState } from 'react'
import  "./Style.css";
import Menu from './MenuApi';
import Menucard from './Menucard';

   

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filteritem = (category) => {
      const updatedList = Menu.filter((curElem)=> {

        return curElem.category === category;
      });

      setMenuData(updatedList);

    };



  return (
   <>     
   <nav className='navbar'>
    <div className='btn-group'>
      <button className='btn-group__item' onClick={() => filteritem("breakfast")}>
        Breakfast</button>
      <button className='btn-group__item' onClick={() => filteritem("lunch")}>lunch</button>
      <button className='btn-group__item' onClick={() => filteritem("dinner")}>dinner</button>
      <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>

    </div>

   </nav>
   <Menucard menuData={menuData}  />   
   </>
  )
}

export default Resturant;
