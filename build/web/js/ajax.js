/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ajax(url, successfulCallBack, errorID) {

    var httpReq;

    if (window.ActiveXObject) {
        httpReq = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHTTPRequest) {
        httpReq = new XMLHTTPRequest();
    } else {
        alert('ALART: NETSCAPE NAVIGATOR NOT SUPPORTED');
    }

    console.log("preparing to get" + url + "content");

    httpReq.open("GET", url); // identitfy the page I want to get

    //this all can happen while other things are loading to augment site
    //responsiveness

    httpReq.onreadystatechange = responseProcessing;

    function responseProcessing() {
        // readyState == 4 means that the http request is complete
        if (httpReq.readyState === 4) {
            if (httpReq.status === 200) {
                successfulCallBack(httpReq);
            } else {
                // First use of property creates new (custom) property
                document.getElementById(errorID).innerHTML = "Error (" + httpReq.status + " " + httpReq.statusText +
                        ") while attempting to read '" + url + "'";
            }
        }
    }
}//and scene