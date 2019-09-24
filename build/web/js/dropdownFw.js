"use strict";
function dropDownFw (params) {

    var dropHeaderStyle = params.dropHeaderStyle || "dropHeader";

    var dropContentStyle = params.dropContentStyle || "dropContent";

    // elements slower to come in from the right
    // when it begins to travel in from the right, i've made it half as fast as default, if it defaults to the default default. 
    var hiddenRight = params.hiddenRight || "-1000px";

    var fw = {};

    // public function that references the drop down header that was clicked. First find the 
    // related drop down content (get first child classed dropContentStyle of the parent of the 
    // clicked DOM object). Then toggle this dropContent element (make it visible if hidden, or 
    // hidden if visible). 
    fw.toggle = function (clickedHeader) {  // public function

        // get the DOM element that is classed dropContentStyle which is a sibling 
        // of the dropHeader that was clicked. This is what we want to open or close.
        var parent = clickedHeader.parentElement;
        var dContent = parent.getElementsByClassName(dropContentStyle)[0];

        var dropContentList = document.getElementsByClassName(dropContentStyle);
        console.log(dropContentList);

        // when one dropdown is clicked, make sure to close any other ones
        // that the user may have left open.
        for (var i = 0; i < dropContentList.length; i++) {
            if (dropContentList[i] !== dContent) {
                hide(dropContentList[i]);
            }
        }

        // gotta make sure silly old javascript knows if it's initally visible or not                  
        if (dContent.style.visibility === "visible") {
            hide(dContent);
        } else {
            show(dContent);
        }
    }; 

    // private function, makes element invisible (display:none cannot be used with transition/amimation).
    // By setting the right attribute to large negative number, the element will be placed far off screen
    // to the right and this will be where it starts when it is next made visible (for the "zoom in from 
    // right" animation). 
    function hide(ele) {
        ele.style.right = hiddenRight;
        ele.style.visibility = "hidden";
    }

    // private function, makes element visible.
    function show(ele) {
        ele.style.visibility = "visible";
        ele.style.right = "0px";
    }

    function hideAllDropContents() {
        var dropContentList = document.getElementsByClassName(dropContentStyle);
        for (var i = 0; i < dropContentList.length; i++) {
            hide(dropContentList[i]);
        }
    }

    // Close all dropdown content menus whenever the user clicks anything but a drop down header
    window.onclick = function (event) {
        if (!event.target.matches('.'+dropHeaderStyle)) {
            hideAllDropContents();
            console.log("hiding all drop contents");
        } else {
            console.log("not hiding all drop contents");
        }
    };

    return fw;
}