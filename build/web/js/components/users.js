function users(id) {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `  
      <p>
        User Content COMING SOON !
      </p>
    `;
    document.getElementById(id).innerHTML = content + ajax(webAPIs/listUsersAPI.jsp,callBack,id);
}


            // MAIN PROGRAM

            function callBack(httpRequest) {
                console.log(httpRequest.responseText);  // car list as text
                var carList = JSON.parse(httpRequest.responseText);
                console.log(carList);  // car list as an array of objects

                // parameters: list to sort, initial sort property, id where HTML table should be placed.
                makeTable(carList, "price", "listHere","icons/dark_downArrow_16.png" );
            }