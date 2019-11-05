var factions = {};

factions.list = function (id) {
    var factionList = [];
    // clear out whatever may be currently in the content area
    var contentDOM = document.getElementById(id);
    contentDOM.innerHTML = "";

    // Remember: getting a DB error does NOT mean ajax call unsuccessful. That is a secondary error after ajax call OK.
    ajax({
        url: "webAPIs/listFactionsAPI.jsp",
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
            <h2>Faction List</h2>
            Search Filter:
        `;

        var searchBox = document.createElement("input");
        searchBox.setAttribute("type", "text");
        div.appendChild(searchBox);

        var tableDiv = document.createElement("div");
        contentDOM.appendChild(tableDiv);

        // tweak obj.factionList to include only the properties you want - combine, delete, etc. 
        for (var i = 0; i < obj.factionList.length; i++) {
            factionList[i] = {}; // add new empty object to array
            factionList[i].factionID = obj.factionList[i].factionID;
            factionList[i].factionName = obj.factionList[i].factionName;
            factionList[i].factionImgURL = obj.factionList[i].factionImgURL;
            factionList[i].factionMembership = obj.factionList[i].factionMembership;

            factionList[i].delete = "<img src='" + CRUD_icons.delete + "' alt='delete icon' onclick='factions.delete(" +
                    factionList[i].factionID + " ,this)'  />";

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
            list: factionList,
            target: tableDiv,
            style: "data",
            orderPropName: "factionName",
            searchKeyElem: searchBox,
            reverse: false,
            imgWidth: "100px"
        });
    } // end of function success

}; // end of function factions.list


factions.delete = function (factionId, icon) {
    if (confirm("Do you really want to delete user " + factionId + "? ")) {
        console.log("icon that was passed into JS function is printed on next line");
        console.log(icon);
        // HERE YOU HAVE TO CALL THE DELETE API and the success function should run the 
        // following (delete the row that was clicked from the User Interface).
        ajax({
            url: "webAPIs/deleteFactionAPI.jsp?deleteId=" + factionId,
            successFn: success,
            errorId: factionId
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
factions.find = function (targetId) {

};