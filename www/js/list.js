/*
This is the main JavaScript file for the list style pages.
*/

/* Function:     accordion_taggle(id)
   Source:       W3Schools
   URL:          https://www.w3schools.com/w3css/w3css_accordions.asp
   Instructions: This function is used in accordions to display/hide the sub-content.
*/
function accordion_toggle(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("accordion_hide") == -1) {
        x.className += " accordion_hide";
    } else {
        x.className = x.className.replace(" accordion_hide", "");
    }
}

/* Function:     accordion_hide_all()
   Source:       StackOverflow
   URL:          https://stackoverflow.com/questions/9153718/change-the-style-of-an-entire-css-class-using-javascript
   Instructions: This function is used to hide all the accordion content at document setup.
*/
function accordion_hide_all() {
  var sections = document.getElementsByTagName("section");
  for(var i =0, il = selects.length;i<il;i++){
	 if(sections.className.indexOf("accordion") != -1){
       selects[i].className += " hidden";
	 }
  }
}
/* Function:     accordionHider(ele)
   Instructions: Use this to hide/show accordion components.
*/
function accordionHider(ele) {
    if(ele.style.display == "none"){
	  ele.style.display = "block";
	} else{
	  ele.style.display = "none";
	}
}
/*
This is the main script for list style webpages. It runs once to setup the page for viewing. All useful default content should not depend on JS. The JS is only to enhance the viewing and function of existing content.
*/

accordion_hide_all();
