// Function to reset dropdowns, removes DRY code
function resetDDs (...args) {
    for (let arg of args) {
        document.getElementById(arg).value = 0;
    }
}

// Function to return singular or plural of given prompt i.e story or stories
// 0 == amount, 1 == prompt, 2 == time
function singlePlural(...args) {
    if (args[0] > 1) { // if amount is greater than 1, change prompt to plural
        if (args[1] == "story") { // if prompt is story, change to stories
            args[1] = "stories";
        } else if (args[1] == "joke") { // if prompt is joke, change to jokes
            args[1] = "jokes";
        }
        // check if args has 3 elements, if so, add time to text
        if (args.length == 3) {
            var text = `Give me ${args[0]}, ${args[2]} ${args[1]}`;
        } else {
            var text = `Give me ${args[0]} ${args[1]}`;
        }
      } else {
        if (args.length == 3) {
            var text = `Give me a ${args[2]} ${args[1]}`;
        } else {
            var text = `Give me a ${args[1]}`;
        }
      }

    return text;
}

// Function to add grade to text
function addGrade(grade) {
    if (grade == 'reception') {
        var gradeText = ' for a kid in reception';
    } else if (grade == 0) {
        var gradeText = " for a kid";
    } else {
        var gradeText = ` for a ${grade} kid`;
    }
    return gradeText;
}

function story() {
  var prompt = document.getElementById("prompts").value;
  // reset number, grade, country, and time dropdowns
  resetDDs("response-number", "grade", "country", "time");

  if (prompt == 0) {
    document.getElementById("textarea1").innerHTML = "";
  } else {
    document.getElementById("textarea1").innerHTML = `Give me a ${prompt} for a kid`;
  }
}

function number() {
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  // reset grade, country, and time dropdowns
  resetDDs("grade", "country", "time");

  if (prompt == 0) {
    document.getElementById("textarea1").innerHTML = "";
  } else {
    document.getElementById("textarea1").innerHTML = `${singlePlural(num, prompt)} for a kid`;
  }
}

function kidGrade() {
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  var grade = document.getElementById("grade").value;
  // reset country and time dropdowns
  resetDDs("country", "time");

  if (grade != 0) {
    var finalText = singlePlural(num, prompt) + addGrade(grade);
  }

  if (grade == 0) {
    document.getElementById("textarea1").innerHTML = "";
    // reset response-number and prompts dropdowns
    resetDDs("response-number", "prompts");
  } else {
    if (num == 0 && prompt == 0) {
        document.getElementById("textarea1").innerHTML = "";
    } else {
        document.getElementById("textarea1").innerHTML = finalText;
    }
  }
}

function selectCountry() {
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  var grade = document.getElementById("grade").value;
  var country = document.getElementById("country").value;
  // resets time dropdown
  resetDDs("time");

  if (country != 0) {
    var finalText = `${singlePlural(num, prompt)}${addGrade(grade)} in ${country}`;
  }

  if (country == 0) {
    document.getElementById("textarea1").innerHTML = "";
    // reset grade, response-number and prompts dropdowns
    resetDDs("grade", "response-number", "prompts");
  } else {
    if (num == 0 && prompt == 0) {
        document.getElementById("textarea1").innerHTML = "";
    } else {
        if (prompt != 0) {
            document.getElementById("textarea1").innerHTML = finalText;
        }
    }
  }
}

function duration() {
  var time = document.getElementById("time").value;
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  var grade = document.getElementById("grade").value;
  var country = document.getElementById("country").value;

  if (time != 0) {
    if (country == 0) {
        var finalText = text + gradeText;
    } else {
        var finalText = `${singlePlural(num, prompt, time)}${addGrade(grade)} from ${country}`;
    }
  }

  if (time == 0) {
    document.getElementById("textarea1").innerHTML = "";
    // reset grade, response-number, prompts and country dropdowns
    resetDDs("grade", "response-number", "prompts", "country");
  } else {
    if (num == 0 && prompt == 0) {
        document.getElementById("textarea1").innerHTML = "";
    } else {
        if (prompt != 0) {
            document.getElementById("textarea1").innerHTML = finalText;
        }
    }
  }
}

function suggestion(id) {
    var suggestion = document.getElementById(id).innerHTML;
    document.getElementById("textarea1").innerHTML = suggestion;
}