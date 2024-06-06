import React, { useState,useContext } from 'react'
import {routes} from '../.././../../../constant'
import Navbar from './Navbar';
import Drawer from './Drawer';
import { PricingContext } from "../../../../../context/PricingProvider";
export default function Navigation() {

  // const [isOpen,setIsOpen] = useState(false);

  const { isOpen ,toggleDrawer} = useContext(PricingContext);

  return (


    <div >
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer}></Drawer>
       <Navbar routes={routes} toggleDrawer={toggleDrawer}/>  
    </div>
  )
}
 