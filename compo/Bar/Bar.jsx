import React, { useState } from 'react'
import './Bar.css'
import {motion} from 'framer-motion'
import Logo from './logo1.png'
import { BarData } from '../../Data/Data'
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons" 


const Bar = () => {

  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const barVariants = {
    true:{
    left: '0'
    },
    false: {
      left: '-60%'
    }
  }


  return (
    <>
    <div className = 'bars' style={expanded?{left:'60%'}:{left:'5%'}}
    onClick={()=>setExpanded (!expanded)}
    >
      <UilBars/>
    </div>
   <motion.div className="Bar"
   variants={barVariants}
   animate={window.innerWidth<=768 ?`${expanded}`:''}
   >
    {/*Logo*/}
    <div className="logo">
      <img src={Logo} alt="" />
      <span>
        Sh<span>o</span>ps
      </span>
     
    </div>
    <div className="menu">
  {BarData.map((item, index) => {
  return (
            <div className={selected=== index ? 'menuItem active' : 'menuItem'}               
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

      <div className="menuItem">
       <UilSignOutAlt/> 
      </div>
      
    </div>
   </motion.div>
   </>
  )
}

export default Bar