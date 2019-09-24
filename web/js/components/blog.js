function blog(id) {

// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
var content = `  
    HW 1 Home Page
    <p>
        My web development experience consists of nothing, prior to this class. This is the first time I've worked on anything front end related.
    </p>
    <p>
        In this homework I learned about HTML, CSS, and how to publish a web page.
        The parts that I found easy were publishing the website, including links
        and images with html, and styling text with css 
        Positioning elements in CSS is something I need to work on more, and it 
        took me a little bit of time to grasp the system of nesting divs
    </p>
    HW 2 Routing &amp; DB
    <p>
        I think I briefly had an overview of Microsoft Access in a 100 level 
        computer science class at Delaware County Community College. Until this 
        week, that was the extent of my database exposure, to my memory. However,
        I'm taking a database class alongside this one, so I'm sure the double database
        dose will bring me up to speed quickly
    </p>
    <p>
        In this homework I learned how to include and utilize javascript files on my page, how to use javascript
        to inject html code into a page and have it be displayed, and how to set up and populate a database with MySQL Workbench
        The parts that I found easy were setting up the database, and writing Select statements 
        I had trouble rewriting the code for routing and dropdowns, so I
        ended up using the provided template code, with no major tweaks.
        I ran into a issue wherein the starting page, home.js, wouldn't load initally
    </p>
    <ul>
        <li>
            To see how my routing works, click on these icons: home, then blog, then home again.
    
        </li>
        <li>
            To see my database work, click <a href="misc/databaseScreenshots.pdf">here</a>.
        </li>
    </ul>
    
        HW 3 Web API
    <p>
            Maybe unsuprisingly given my prior blog entries, this was my first jaunt
            into server-side database access code. My, how strange would it be otherwise?
            As if I'd never touched HTML, CSS, or any sort of database, but had extensive
            experience in writing database interfaces. That'd definitely be an interesting
            story to tell the kids, <i>if you had exhausted every other possible story, every topic
            of conversation, and counted every ceiling tile prior.</i>
        
    </p>
    
   <ul>
    <b> Difficulties</b>
    
        <li>
            Setting up tunneling was initally a little tricky
        </li>
        <li>
            I encountered an issue where my JSP files would suddenly and unceremoniously
            fail to acknowledge the inclusion of the gson library as valid
        </li>
        <li>
            SQL is finicky to the newcomer, and statements assembled over multiple lines
            of code can be somewhat tricky to bugfix to said newcomer.
        </li>
    <br>
    <b> Not-So-Difficulties</b>
    
        <li>
            The GSON and mySQL connector libraries make a molehill out of a mountain, code complexity-wise
        </li>
        <li>
            The double dose from both this class and Principles of Database Systems is rapidly building my SQL tolerance, and my mySQL tolerance
        </li>
    </ul>
    
    <p>
            I've implemented 3 table APIs, the faction table is linked to the web user table
            which seems important in the context of this and future assignments, but is of dubious use
            in the table's eventual purpose.
            <br>
            The character table is more cogent to the future mechanics of the website, but I couldn't
            dream up a sensible reason to link it to the web user table.
            <br>
            Thus, I've included both for your viewing pleasure.
    </p>
    <ul>
        <li>
            To see my web users api work, click  <a href="webAPIs/listUsersAPI.jsp">here</a>.
        </li>
        <li>
            To see my character table api work, click  <a href="webAPIs/listCharacterAPI.jsp">here</a>.
        </li>
        <li>
            To see my faction table api work, click  <a href="webAPIs/listFactionsAPI.jsp">here</a>.
        </li>
    </ul>
    
    <p>
        Finally, before I forget, click <a href="misc/SQL_errors.docx">here</a> to see the intentionally caused and solved SQL bugs.
        <br>
        I fully support this part of the exercise, I feel it made the rest of the project a whole lot easier, and helped me learn a lot.
       `;
        document.getElementById(id).innerHTML = content;
        }
