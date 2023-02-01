function story() {
  var prompt = document.getElementById("prompts").value;
  // reset number and grade dropdowns
  document.getElementById("response-number").value = 0;
  document.getElementById("grade").value = 0;
  document.getElementById("country").value = 0;
  document.getElementById("time").value = 0;

  if (prompt == 0) {
    document.getElementById("textarea1").innerHTML = "";
  } else {
    document.getElementById("textarea1").innerHTML = `Give me a ${prompt} for a kid`;
  }
}

function number() {
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  // reset grade dropdown
  document.getElementById("grade").value = 0;
  document.getElementById("country").value = 0;
  document.getElementById("time").value = 0;

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
  // reset country dropdown
  document.getElementById("country").value = 0;
  document.getElementById("time").value = 0;

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
    // reset response-number dropdown and prompt
    document.getElementById("response-number").value = 0;
    document.getElementById("prompts").value = 0;
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
  // resets duration dropdown
  document.getElementById("time").value = 0;

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
    // reset grade response-number dropdowns
    document.getElementById("grade").value = 0;
    document.getElementById("response-number").value = 0;
    document.getElementById("prompts").value = 0;
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
    // reset grade response-number dropdowns
    document.getElementById("grade").value = 0;
    document.getElementById("response-number").value = 0;
    document.getElementById("prompts").value = 0;
    document.getElementById("country").value = 0;
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