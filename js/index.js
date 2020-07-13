document.write('<style>body { visibility: hidden; }</style>');
$(document).ready(function() {
	$("body").css("visibility","visible");
    // var secs = 100000;
    // setTimeout(function() {
		$('#headshot').fadeIn(5000, function() {
			// fadeInIntro();
			typewriter();
		});
    // }, secs);
});

// set up text to print, each item in array is new line
var aText = new Array(
"I am a rising ECE senior in CMU and a SWE intern at Salesforce.", 
"I am interested in full-stack web development and machine learning.",
"In my free time, I cook and make websites."
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("intro");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 100);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

// $.fn.characterize = function (wrapper, options) {
//   var txt = this.text(),
//       self = this;

//   this.empty();
  
//   wrapper = wrapper || '<span />';
//   options = options || {};

//   Array.prototype.forEach.call(txt, function (c) {
//     options.text = c;
//     self.append($(wrapper, options));
//   });
// };

// function fadeInIntro() {

// 	var $intro = $('#intro');

// 	$intro.characterize('<span />', {
// 		class: 'fd',
// 		css: {
// 			opacity: 0
// 		}
// 	});

// 	$intro.css('opacity', 1);

// 	$('.fd').each(function (i) {
// 		$(this).animate({opacity: 1}, (i + 1) * 30);
// 	});

// 	// var $template = $("#intro-template");
// 	// var $intro = $("#intro");
// 	// var html = "";

// 	// $template.children().each(function(p) {
// 	// 	html += "<p>";
// 	// 	var sentence = $(this).text().split(" ");
// 	// 	for (var i = 0; i < sentence.length; i++) {
// 	// 	    html += "<span>" + sentence[i] + " </span>";
// 	// 	};
// 	// 	html += "</p>";
// 	// });

// 	// var spanIndex = 0;
// 	// $intro.html(html).children().each(function(i) {
// 	// 	$(this).children().hide().each(function(j) {
// 	// 		$(this).delay(spanIndex*75).fadeIn(1250);
// 	// 		spanIndex++;
// 	// 	})
// 	// });
// }
