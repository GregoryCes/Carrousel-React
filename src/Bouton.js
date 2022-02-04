import React, { useState } from "react";

export default function Button(props) {
    const handleClick = () => {
       props.defineBg(props.chiots[props.id])
       props.defineBtn(props.id)
    }
    
    return(
        <>
            <button onClick={(e)=>{handleClick(e)}} className={(props.clicked ? "bg-indigo-500" : "bg-indigo-300") +' w-[125px] h-[60px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-[0_0_5px_rbga(0,0,0,.1)] shadow-zinc-500/50'}></button>
        </>
    )
}