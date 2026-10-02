import FolderEntry from "./FolderEntry";
import FileEntry from "./FileEntry";

export default function Sidepanel({ onSelect }){

    return (

        <div id="sidepanel">
            <FileEntry name="Home" onClick={() => onSelect("home")}/>
            <FolderEntry name="Projects"/>
            <FolderEntry name="CV"/>
            <FileEntry name="AI" onClick={() => onSelect("ai")}/>
            <FileEntry name="Code" onClick={() => onSelect("code")}/>
            <FileEntry name="test"/>
        </div>

    );
}