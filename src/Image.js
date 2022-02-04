import React from "react";

export default function Image(props) {
    return(
        <>
            <div className="bg-zinc-300 absolute w-[900px] h-[500px]" style={{backgroundImage: `url('${props.background}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        </>
    )
}