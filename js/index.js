$(document).ready(function() {
  $("div").hide();
  $("#headshot").fadeIn(500, function() {
      typewrite();
      $("#projects");.fadeIn()
    });

});

function typewrite() {
  // set up text to print, each item in array is new line
  var aText = new Array(
    "I am a rising ECE senior in CMU and a SWE intern at Salesforce.", 
    "I am interested in full-stack web development and machine learning.",
    "In my free time, I cook and make websites."
  );
  var iSpeed = 1; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines

  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
  
  let typing = function() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);

   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   $("#intro").html(sContents + aText[iIndex].substring(0, iTextPos) + "_");
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout(typing, 100);
    }
   } else {
    setTimeout(typing, iSpeed);
   }
  }
  
  typing();
}
