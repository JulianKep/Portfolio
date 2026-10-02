import asciiArt from "../assets/ascii-art-text.png";

export default function Home(){


    return(

        <div class="text-content">

            <div class="inner-text-content">


                <div id="terminal">
                    <span id="terminal-1">$</span>
                    <span id="terminal-2"> /home/julian ❯ </span>
                    <span id="terminal-3">sudo greet_user</span>
                    <img id="terminal-4"src={asciiArt}></img>
                    <br/>
                    <span id="terminal-5">$</span>
                    <span id="terminal-6"> /home/julian ❯ </span>
                </div>
                <br/>
                <p>Diese Seite </p>
                <h2>AI</h2>
                <p></p>



            </div>

        </div>
    )
}
