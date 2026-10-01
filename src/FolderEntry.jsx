import folderIcon from "./assets/folder.svg";
import arrow from "./assets/arrow.svg";

import { useState } from "react";



export default function FolderEntry({ name }){

    return (    
        <button id="folder-button">
            <img src={folderIcon} width={20} height={20}></img>
            <span>{name}</span>
            <img id="selector" src={arrow} width={20} height={20}></img>
            </button>
    );
}