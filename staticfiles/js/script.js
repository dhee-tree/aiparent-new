// Function to reset dropdowns, removes DRY code
function resetDDs (...args) {
    for (let arg of args) {
        document.getElementById(arg).value = 0;
    }
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

  if (num > 1) {
    if (prompt == "story") {
        prompt = "stories";
    } else if (prompt == "joke") {
        prompt = "jokes";
    }

    var text = `Give me ${num} ${prompt} for a kid`;
    // "Give me " + num + " " + prompt + " for a kid"
  } else {
    var text = `Give me a ${prompt} for a kid`;
    // "Give me a " + prompt + " for a kid"
  }

  if (prompt == 0) {
    document.getElementById("textarea1").innerHTML = "";
  } else {
    document.getElementById("textarea1").innerHTML = text;
  }
}

function kidGrade() {
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  var grade = document.getElementById("grade").value;
  // reset country and time dropdowns
  resetDDs("country", "time");

  if (grade != 0) {
    if (num > 1) {
        if (prompt == "story") {
            prompt = "stories";
        } else if (prompt == "joke") {
            prompt = "jokes";
        }
        var text = `Give me ${num} ${prompt}`;
        //"Give me " + num + " " + prompt
    } else {
        var text = `Give me a ${prompt}`;
        // "Give me a " + prompt
    }

    if (grade == "reception") {
        var gradeText = " for a kid in reception";
    } else {
        var gradeText = ` for a ${grade} kid`;
        // " for a " + grade + " kid"
    }

    var finalText = text + gradeText;
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

    if (num > 1) {
        if (prompt == "story") {
            prompt = "stories";
        } else if (prompt == "joke") {
            prompt = "jokes";
        }
        var text = `Give me ${num} ${prompt}`;
        // "Give me " + num + " " + prompt
    } else {
        var text = `Give me a ${prompt}`;
        // "Give me a " + prompt
    }

    if (grade == "reception") {
        var gradeText = " for a kid in reception";
    } else if (grade == 0) {
        var gradeText = " for a kid";
    } else {
        var gradeText = ` for a ${grade} kid`;
        // " for a " + grade + " kid"
    }

    var finalText = `${text}${gradeText} in ${country}`;
    // text + gradeText + " from " + country
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

    if (num > 1) {
        if (prompt == "story") {
            prompt = "stories";
        } else if (prompt == "joke") {
            prompt = "jokes";
        }
        var text = `Give me ${num}, ${time} ${prompt}`;
        // "Give me " + num + ", " + time + " " + prompt
    } else {
        var text = `Give me a ${time} ${prompt}`;
        // "Give me a " + time + " " + prompt
    }

    if (grade == "reception") {
        var gradeText = " for a kid in reception";
    } else if (grade == 0) {
        var gradeText = " for a kid";
    } else {
        var gradeText = ` for a ${grade} kid`;
        // " for a " + grade + " kid"
    }

    if (country == 0) {
        var finalText = text + gradeText;
    } else {
        var finalText = `${text}${gradeText} from ${country}`;
        // text + gradeText + " from " + country
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