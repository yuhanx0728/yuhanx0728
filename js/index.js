let allTechStack = new Set();
$(document).ready(function() {
  $("#projects").hide();
  $("#headshot").hide();
  $("footer").hide();
	$("#headshot").fadeIn(800, function() {
		typewriter();
    setTimeout(function() {$("#projects").fadeIn(800, function() {
      $("footer").fadeIn(800);
      $("#projects").children().each(function(i) {
        line = $(this).html().split("&nbsp;")
        words = line[1].split(", ");
        newWords = "";
        cnt = 0;
        for (let w of words) {
          allTechStack.add(w);
          newWords += "<span class=\"tech-stack "+ getClassName(w) +"\" >" + w + "</span>";
          if (cnt++ < words.length - 1) {
            newWords += ", ";
          }
        }
        $(this).html(line[0] + "&nbsp;" + newWords);          
        console.log(words);
      })

      attachHoverOverListener();
    })}, 1200);
	});
});


function attachHoverOverListener() {
  $("div#projects span.tech-stack").hover(function() {
    console.log("1");
    currStack = "";
    var classList = $(this).attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
      if (item !== "tech-stack") {
        currStack = item;
      }
    });

    if (currStack != "tech-stack") {
      $("#projects").find("span."+currStack).addClass("highlighted");
    }
  }, function() {
    console.log("2");
    currStack = "";
    var classList = $(this).attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
      if (item !== "tech-stack") {
        currStack = item;
      }
    });

    if (currStack != "tech-stack") {
      $("#projects").find("."+currStack).removeClass("highlighted");
    }
  });
}

function getClassName(word) {
  return word.toLowerCase().split(" ").join("-");
}

function typewriter() {
  // set up text to print, each item in array is new line
  var aText = new Array(
    "I am a rising ECE senior in CMU and a SWE intern at Salesforce.", 
    "I am interested in full-stack web development and machine learning.",
    "In my free time, I cook and make websites."
  );
  var iSpeed = 5; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typing() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);

    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }

    $("#intro").html(sContents + aText[iIndex].substring(0, iTextPos) + "_");

    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typing, 100);
      }
    } else {
      setTimeout(typing, iSpeed);
    }
  }
  
  typing();

}
