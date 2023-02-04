// Function to use suggestion list to fill in textarea
function suggestion(id) { // id is the id of the suggestion element clicked
    var suggestion = document.getElementById(id).innerHTML; // get the text of the suggestion element
    document.getElementById("textarea1").value = suggestion; // set the textarea to the suggestion text
}

// Function to reset dropdowns, removes DRY code
function resetDDs (...args) {
    for (let arg of args) { // for each argument, set value to 0, this resets the value of the argument i.e dropdown
        document.getElementById(arg).value = 0; // set dropdown value to 0
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
        if (args.length == 3) { // check if args has 3 elements, if so, add time to text i.e arg[2]
            var text = `Give me ${args[0]}, ${args[2]} ${args[1]}`;
        } else {
            var text = `Give me ${args[0]} ${args[1]}`; // if args has 2 elements, add prompt and amount to text
        }
      } else { // if amount is 1, make a singular prompt
        if (args.length == 3) { // check if args has 3 elements, if so, add time to text i.e arg[2]
            var text = `Give me a ${args[2]} ${args[1]}`;
        } else {
            var text = `Give me a ${args[1]}`; // if args has 2 elements only add prompt to text
        }
      }
    return text;
}

// Function to add grade to text
function addGrade(grade) {
    if (grade == 'reception') { // Check if grade is reception
        var gradeText = ' for a kid in reception';  // if so, generate text with reception
    } else if (grade == 0) { // if grade is 0, generate text with no grade
        var gradeText = " for a kid";
    } else {  // Else add grade to text
        var gradeText = ` for a ${grade} kid`;
    }
    return gradeText;
}

// Function to add generated text for textarea
function textArea(prompt, finalText) {
    // Check if prompts is empty before adding text to textarea
    if (prompt == 0) {
        document.getElementById("textarea1").value = ""; // if prompts is empty, make textarea empty
    } else {
        document.getElementById("textarea1").value = finalText; // Else add text to textarea
    }
}

// Function for type of prompt and amount of responses selection dropdowns
function promptAndNumber(id) {
    // Get all the needed elements from html page
    var prompt = document.getElementById("prompts").value;
    var num = document.getElementById("response-number").value;
    // Check if id is prompts, if so, reset response-number, grade, country and time dropdowns
    if (id == 'prompts') {
        resetDDs("response-number", "grade", "country", "time");
        var finalText = `Give me a ${prompt} for a kid`; // Generate text with prompt
    } else if (id == 'response-number') { // Check if id is response-number
        resetDDs("grade", "country", "time"); // reset grade, country and time dropdowns
        var finalText = `${singlePlural(num, prompt)} for a kid`; // Generate text with prompt and amount
    }
    // Add text to textarea
    textArea(prompt, finalText);
}

// Function for grade selection dropdown
function kidGrade() {
  // Get all the needed elements from html page
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  var grade = document.getElementById("grade").value;
  // reset country and time dropdowns
  resetDDs("country", "time");
  // Generate singular or plural text and add grade
  var finalText = singlePlural(num, prompt) + addGrade(grade);

  if (grade == 0) { // Check if grade is empty
    document.getElementById("textarea1").value = ""; // Reset textarea
    resetDDs("response-number", "prompts"); // reset response-number and prompts dropdowns
  } else { // Add text to textarea
    textArea(prompt, finalText);
  }
}

// Function for country selection dropdown
function selectCountry() {
  // Get all the needed elements from html page
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  var grade = document.getElementById("grade").value;
  var country = document.getElementById("country").value;
  // resets time dropdown
  resetDDs("time");
  // Generate singular or plural text, with grade and country
  var finalText = `${singlePlural(num, prompt)}${addGrade(grade)} in ${country}`;

  if (country == 0) { // Check if country is empty
    document.getElementById("textarea1").value = ""; // Reset textarea
    resetDDs("grade", "response-number", "prompts"); // reset grade, response-number and prompts dropdowns
  } else { // Add text to textarea
    textArea(prompt, finalText);
  }
}

// Function for time selection dropdown
function duration() {
  // Get all the needed elements from html page
  var time = document.getElementById("time").value;
  var prompt = document.getElementById("prompts").value;
  var num = document.getElementById("response-number").value;
  var grade = document.getElementById("grade").value;
  var country = document.getElementById("country").value;
  // Generate singular or plural text, with grade, country and time
  if (time != 0) { // Check if time is empty
    if (country == 0) { // Check if country is empty, to know whether to add country to text
        var finalText = singlePlural(num, prompt, time) + addGrade(grade); // Generate text without country
    } else {
        var finalText = `${singlePlural(num, prompt, time)}${addGrade(grade)} from ${country}`; // Generate text with country
    }
  }

  if (time == 0) { // Check if time is empty
    document.getElementById("textarea1").value = ""; // Reset textarea
    // reset grade, response-number, prompts and country dropdowns
    resetDDs("grade", "response-number", "prompts", "country");
  } else { // Add text to textarea
    textArea(prompt, finalText);
  }
}
