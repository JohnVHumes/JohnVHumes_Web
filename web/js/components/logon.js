var logon = {};

logon.UI = function (id) {
    var content = `
 <div class='logon'>
 <br/>
 Email Address <input type="text" id="logonEmailAddress"/>
 &nbsp;
 Password <input type="password" id="logonPassword"/>
 &nbsp;
 <input type="button" value="Submit" onclick="logon.findUser('logonEmailAddress','logonPassword','msgArea')"/>
 <br/> <br/>
 <div id="msgArea"></div>
 </div>
 `; // closing back tick
    document.getElementById(id).innerHTML = content;
};
logon.findUser = function (emailId, pwId, msgId) {

    msgId = document.getElementById("msgArea");

    emailId = escape(document.getElementById(emailId).value);
    pwId = escape(document.getElementById(pwId).value);
    ajax({
        url: "webAPIs/logonAPI.jsp?UserEmail=" + emailId + "&Password=" + pwId,
        successFn: callBack,
        errorId: msgId
    });

    function callBack(obj) {

        // var obj = JSON.parse(hreq.responseText); // this already done by function ajax2...
        if (!obj) {
            msgId.innerHTML += "logon.findUser (success private fn): Http Request (from AJAX call) did not parse to an object.";
            return;
        }
        console.log("logon.findUser (success private fn): the obj passed in by ajax2 is on next line.");
        console.log(obj);

        if (obj.dbError.length > 0) {
            msgId.innerHTML += "Database Error Encountered: " + obj.dbError;
            return;
        } else if (obj.webUserList.length === 0) {
            msgId.innerHTML = "No Web User with those credentials was found in the Database.:" + emailId + pwId;
        } else {
            var msg = "&nbsp; Found Web User " + obj.webUserList[0].webUserId;
            msg += "<br/> &nbsp; Birthday: " + obj.webUserList[0].birthday;
            msg += "<br/> &nbsp; MembershipFee: " + obj.webUserList[0].membershipFee;
            msg += "<br/> &nbsp; User Role: " + obj.webUserList[0].userRoleId + " " + obj.webUserList[0].userRoleType;
            msg += "<br/> <img src ='" + obj.webUserList[0].image + "' width='200'>";
            msgId.innerHTML = msg;
        }

    } // end of function success



};

logon.getProfile = function (id) {

    var contentDOM = document.getElementById(id);

    contentDOM.innerHTML = "";

    ajax({
        url: "webAPIs/getProfileAPI.jsp",
        successFn: callBack,
        errorId: id
    });

    function callBack(obj) {
        if (!obj) {

            contentDOM.innerHTML = "You are not logged in. &#128534";

        } else {

            var result = "User ID: " + obj.webUserId;
            if (obj.birthday) {
                result += "<br/> Birthday: " + obj.birthday;
            }
            if (obj.membershipFee) {
                result += "<br/> Your Membership Price: " + obj.membershipFee;
            }
            if (obj.userRoleType) {
                result += "<br/> Your Role: " + obj.userRoleType;
            }
            if (obj.image) {

                result += "<br/> Your beautiful face<br/> ";
                result += "<img src ='" + obj.image + "' width='200'>";

            }

            contentDOM.innerHTML = result;
        }
    }



};

logon.logoff = function (id) {
    var contentDOM = document.getElementById(id);
    contentDOM.innerHTML = "";
    ajax({
        url: "webAPIs/logoffAPI.jsp",
        successFn: callBack,
        errorId: id
    });

    function callBack() {




    }

    contentDOM.innerHTML = "Yay you logged out!";

};
