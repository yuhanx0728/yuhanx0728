let allTechStack = new Set();
$(document).ready(function() {
  $("#projects").hide();
  $("#headshot").hide();
  $("footer").hide();
	$("#headshot").fadeIn(800, function() {
		typewriter();
    setTimeout(function() {$("#projects").fadeIn(800, function() {
      $("footer").fadeIn(800);

      // put each of the tech stack terms into a span tag
      $("#projects").children().each(function(i) {
        attachSpanForTechStack($(this));         
      })

      // when hovering over "web development", "machine learning", "big data"
      // highlight relevant tech stack terms
      highlightKeywords();

    })}, 1200);
	});
});

function attachSpanForTechStack(t) {
  line = t.html().split("&nbsp;")
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
  t.html(line[0] + "&nbsp;" + newWords); 
}

// put words in [interests] from div#intro under <span>
function highlightKeywords() {
  let newHTML = ""
  let oldHTML = $("div#intro").html()
  let prevI = 0
  let startI = 0
  let spanMap = keywords.keys()
  for (let i = 0; i < keywords.size; i++) {
    if (i > 0) {
      prevI = startI + interests[i - 1].length
    }
    startI = oldHTML.indexOf(interests[i])
    newHTML += oldHTML.slice(prevI, startI)
    newHTML += "<span id='" + spanMap.next().value + "'>" + interests[i] + "</span>"
  }

  prevI = startI + interests[interests.length - 1].length
  newHTML += oldHTML.slice(prevI, newHTML.length)

  $("div#intro").html(newHTML)

  keywords.forEach((val, key, map) => {
    val.forEach(e => $("div#projects span.tech-stack."+getClassName(e)).addClass(key))
  })

  $("div#intro span").each(function() {
    attachHoverOverListener("div#intro span", this.id)
  })
}

function attachHoverOverListener(dom, id) {
  const _dom = dom + "#" + id
  $(_dom).hover(
    // add to highlighted class when hovering over
    () => { 
      $(_dom).addClass("highlighted")
      $("div#projects span." + id).addClass("highlighted")
    },
    // remove from highlighted class when no longer hovering over
    () => {
      $(_dom).removeClass("highlighted")
      $("div#projects span." + id).removeClass("highlighted")
    }
  )
}

/* sanitize input into a HTML class name
 * e.g. "Vue.js" -> "vue-js", "Apache Hbase" -> "apache-hbase"
 */
function getClassName(word) {
  return word.toLowerCase().split(/[\s.]+/).join("-");
}

// credit to https://codepen.io/gavra/pen/tEpzn
function typewriter() {
  // set up text to print, each item in array is new line
  var aText = new Array(
    "I am a rising ECE senior in CMU and a SWE intern at Salesforce.", 
    "I am interested in web development, big data and machine learning.",
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
