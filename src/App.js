import React, { useRef, useState } from "react";
import "./index.css"
import Image from "./Image";
import Button from "./Bouton";

export default function App() {
    const [background, setBackground]=useState('chiot1.jpg')
    const [btnSelect, setBtnSelect] = useState(0)
    const chiots = ['chiot1.jpg', 'chiot2.jpg', 'chiot3.jpg', 'chiot4.jpg']

    const elm = []

    for(let i = 0; i<4; i++){
        elm.push(<Button chiots={chiots} defineBtn={(id)=>setBtnSelect(id)} clicked={btnSelect == i ? true : false} defineBg={(e)=>setBackground(e)} id={i} key={i} />)
    }

    return (
        <>
            <div className="w-[900px] h-[600px] relative">
               <Image background={background} />
                <div className=" absolute bottom-0 left-0 right-0 h-[60px] flex justify-between" >
                    {elm}
                </div>             
            </div>
        </>
    )
}