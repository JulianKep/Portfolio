import FolderEntry from "./FolderEntry";
import FileEntry from "./FileEntry";

export default function Sidepanel(){

    return (

        <div id="sidepanel">
            <FolderEntry name="CV"/>
            <FolderEntry name="Projects"/>
            <FolderEntry name="CV"/>
            <FileEntry name="test"/>
            <FileEntry name="test"/>
            <FileEntry name="test"/>
        </div>

    );
}