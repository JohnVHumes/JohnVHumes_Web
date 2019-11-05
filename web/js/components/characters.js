var characters = {};

characters.list = function (id) {
    var contentDOM = document.getElementById(id);
    contentDOM.innerHTML = "";
    ajax({
        url: "webAPIs/listCharacterAPI.jsp",
        successFn: callBack,
        errorId: id
    });
    function callBack(obj) {

        //var obj = JSON.parse(hreq.responseText);
        if (!obj) {
            contentDOM.innerHTML += "Http Request (from AJAX call) did not parse to an object.";
            return;
        }
        console.log(obj);

        if (obj.dbError.length > 0) {
            contentDOM.innerHTML += "Database Error Encountered: " + obj.dbError;
            return;
        }

        var div = document.createElement("div");
        div.style.textAlign = "center";
        contentDOM.appendChild(div);
        div.innerHTML = `
            <h2>Character List</h2>
            Search Filter:
        `;

        var searchBox = document.createElement("input");
        searchBox.setAttribute("type", "text");
        div.appendChild(searchBox);

        var tableDiv = document.createElement("div");
        contentDOM.appendChild(tableDiv);

        // tweak obj.webUserList to include only the properties you want - combine, delete, etc. 
        var charList = [];
        for (var i = 0; i < obj.CharacterList.length; i++) {
            charList[i] = {}; // add new empty object to array
            
            charList[i].charID = obj.CharacterList[i].charID;
            charList[i].charName = obj.CharacterList[i].charName;
            charList[i].image = obj.CharacterList[i].image;
            charList[i].charLevel = obj.CharacterList[i].charLevel;
            charList[i].factionName = obj.CharacterList[i].factionName;
            
            charList[i].delete = "<img src='" + CRUD_icons.delete + "' alt='delete icon' onclick='characters.delete(" +
                    charList[i].charID + " ,this)'  />";
        }

        // add click sortable HTML table to the content area

        // ********************** function tableBuilder.build ***********************************
        // params.list: an array of objects that are to be built into an HTML table.
        // params.target: reference to DOM object where HTML table is to be placed (by buildTable) -- 
        //         (this is not the id string but actual reference like you get from method getElementById()
        // params.style: will be added as className to DOM element target,
        // params.orderPropName (string): name of property (of objects in list) for iniial sort
        // params.reverse (boolean): if true, initial sort will be high to low (else low to high). 
        // params.imgWidth: any columns that hold image files will be turned into <img> tags with this width.

        tableBuilder.build({
            list: charList,
            target: tableDiv,
            style: "data",
            orderPropName: "factionName",
            searchKeyElem: searchBox,
            reverse: false,
            imgWidth: "100px"
        });
    } // end of function success

}; // end of function characters.list


characters.delete = function (charID, icon) {
    if (confirm("Do you really want to delete character " + charID + "? ")) {
        console.log("icon that was passed into JS function is printed on next line");
        console.log(icon);
        // HERE YOU HAVE TO CALL THE DELETE API and the success function should run the 
        // following (delete the row that was clicked from the User Interface).
        ajax({
            url: "webAPIs/deleteCharacterAPI.jsp?deleteId=" + charID,
            successFn: success,
            errorId: charID
        });
    }
    function success(obj) {

// icon's parent is cell whose parent is row 
        var dataRow = icon.parentNode.parentNode;
        var rowIndex = dataRow.rowIndex - 1; // adjust for oolumn header row?
        var dataTable = dataRow.parentNode;
        dataTable.deleteRow(rowIndex);
    }

};

// for future implementation...
characters.find = function (targetId) {

};
