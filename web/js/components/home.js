function home(id) {

// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
var content = `  
            <div class="centerbox">
                <a href="#/goldendeer"> <img src="pics/goldenDeerFlag.png" alt="Golden Deer House" height=90></a>

                <a href="#/bluelions"> <img src="pics/blueLionFlag.png" alt="Blue Lion House" height=90></a>

                <a href="#/blackeagles"> <img src="pics/blackEagleFlag.png" alt="Black Eagle House" height=90></a>
            </div>
            <p>
                This site contains tips, tricks, reference guides, calculators and many other tools to enhance one's experience playing Fire Emblem: Three Houses.
                This information will primarily be sourced from <a href='https://www.ign.com/wikis/fire-emblem-three-houses/'> https://www.ign.com/wikis/fire-emblem-three-houses/ </a>


            `;
        document.getElementById(id).innerHTML = content;
        }
        