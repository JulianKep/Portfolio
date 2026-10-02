import fileIcon from "./assets/file.svg";
import arrow from "./assets/arrow.svg";

import { useState } from "react";



export default function FileEntry({ name, onClick }){

    function handleClick() {
        console.log("test");
    }

    return (    
        <button id="folder-button" onClick={onClick}>
            <img src={fileIcon} width={20} height={20}></img>
            <span>{name}</span>
            <img id="selector" src={arrow} width={20} height={20}></img>
            </button>
    );
}