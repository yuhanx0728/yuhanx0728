$(document).ready(function() {
  for (let i = 0; i < fadeInQueue.length; i++) {
    $(fadeInQueue[i]).hide().delay(i * fadeInInterval).fadeIn(fadeInSpeed)
  }

  setTimeout(function() {
    // wrap <span> around tech terms under #projects
    $("#projects .tech-stack").each(function(i) {
      attachSpanForTechStack($(this))
    })

    // when hovering over "web development", "machine learning" under #intro
    // highlight relevant tech stack terms under #projects
    enableWordGroups()
    // enable hover-over effects as soon as projects are loaded
  }, (fadeInQueue.length - 4) * fadeInInterval)
})

// wrap <span> around tech terms (under #projects)
function attachSpanForTechStack(dom) {
  line = dom.html().split("&nbsp;")
  terms = line[0].split(", ")
  newTerms = ""
  cnt = 0
  for (let t of terms) {
    newTerms += "<span class='" + getClassName(t) + "' >" + t + "</span>"
    if (cnt++ < terms.length - 1) {
      newTerms += ", "
    }
  }
  line[0] = newTerms
  dom.html(line.join("&nbsp;"))
}

// enable highlighting a group of words when one is hovered over
function enableWordGroups() {
  // e.g. add "web-development" class to "vue.js" <span>, etc, under #projects
  keywords.forEach((val, key, map) => {
    val.forEach(e => $("div#projects span."+getClassName(e)).addClass(key))
  })

  // attach listener to each interest under #intro-2
  $("div#intro span#intro-2 span").each(function() {
    attachHoverOverListener("div#intro span#intro-2 span", this.id)
  })
}

// attach listeners whenever <span id='_dom'> is hovered over
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

// sanitize input into a HTML class name
// e.g. "Vue.js" -> "vue-js", "Apache Hbase" -> "apache-hbase"
function getClassName(word) {
  return word.toLowerCase().split(/[\s.]+/).join("-")
}
