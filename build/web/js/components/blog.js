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
    </p>
    
    
    HW 4 Display Data
    <p>
    
    It's nearly 3am while writing this, so I'll keep this entry brief. This week
    I retrofitted last week's API into being displayed as a nice, neat table, using an ajax call.
    
    <ul>
    <b> Difficulties</b>
    
        <li>
            I spent about 3 hours trying to track down the hole where a JSON parsing call should be
        </li>
        <li>
            The lack of this call caused many functions to flag as invalid, and I spent most of that 3 hours analyzing the
            symptoms rather than the disease, as it were
        </li>
        <li>
            As this codebase grows, it's a bit of a hunt to find all the places where modifications need to allow new sample code
            to interface with other databases
        </li>
        <li>
            It took a bit of time to figure out how function scoping works in .js files, for the routing
        </li>
    <br>
    <b> Not-So-Difficulties</b>
    
        <li>
            Updating the database tables to include images was a breeze, even though it felt like there should've been a better way to do it
        </li>

    </ul>
    
    </p>
    
    <br>
    HW5 Tutorial Proposal
    
    <ul>
                    <li><a href="tutorial/proposal.pdf">Proposal PDF</a> <hr/></li>
                    <li><a href="tutorial/poc.html">Proof of Concept</a> <hr/></li>
    </ul>
   
   <ul>
    <b> Difficulties</b>
    
        <li>
            I realized too late in this assignment that I probably should have just done the slideshow homework, I don't feel I've
            yet sufficiently developed my competency to deliver on this assignment
        </li>
        <li>
            I felt the selection criteria for topics was vague, and attempting to settle on an sufficient sample
            ate through most of the time and energy I had earmarked for this homework
        </li>

    <br>
    <b> Not-So-Difficulties</b>
    
        <li>
            since poc.html was specified, I didn't have to wrestle with figuring out how to add a page with a unique style sheet and its
            own scripting into the routing table
        </li>

    </ul>
    </p>
    
    HW6 Logon
    
    <p>
    
    <ul>
    <b> Difficulties</b>
    
        <li>
            I spent a solid 2 hours trying to fix a bug that was already fixed because I forgot to clear my cache
        </li>
        <li>
            Accidentally uploaded the .java files rather than the .class files, which baffled me for a while
        </li>
        <li>
            Deciding what an API returns and how it should return it is a little mindboggling
        </li>

    <br>
    <b> Not-So-Difficulties</b>
    
        <li>
            Writing the APIs themselves
        </li>

    </ul>
    </p>
        
    HW7 Delete
    
    <p>
    
    <ul>
    <b> Difficulties</b>
    
        <li>
            Many of my problems at this stage in the game are stemming from my early inconsistent use of naming conventions, I see how important a clean start is now
        </li>
        <li>
            Missing code in my table builder befuddled me for an hour
        </li>
        <li>
            It is a little tough to get my head around everything that is going on in the table builder
        </li>

    <br>
    <b> Not-So-Difficulties</b>
    
        <li>
            This was a pretty easy homework overall, I had time to bring the functionalities of my faction table up to par with users and characters
        </li>

    </ul>
       `;
        document.getElementById(id).innerHTML = content;
}
