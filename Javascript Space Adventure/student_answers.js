// These JavaScript (JS) functions need to be completed to progress through the challenege.
// Each function is almost done, but needs a few things added.
// Look for the comments that say TODO and write in the correct code.
// Save this file, refresh your website, and click "Check Step" to check your answer.

/*
Step 1: Getting started

Arguements:
 event: context information from the element that was clicked

Returns:
 None
*/
function step1(event) {
  // Get the HTML id of the planet that was clicked (given to us in the 'event' arguement)
  var planet = event.srcElement.id;

  // TODO: Print the id of the planet to the console using 'console.log()'

  // TODO: Alert the visitor with a message about which planet was clicked using 'alert()'
  // Challenge TODO: Update this code to display the planet's label text in this alert (instead of the planet id)

  // TODO: Prompt the user for a new name for the planet they clicked and update the displayed name using 'prompt()'
  // Info: The planet label id's are 'venus-label', 'earth-label', and 'neptune-label'
  const label = planet + "-label";
  var new_name; /* Complete code here */
  document.getElementById(label).innerText; /* Complete code here */
}

/*
Step 2: Astronaut ID (Picture Size)

Arguements:
 None

Returns:
 None
*/
function step2() {
  // TODO: Find the element id of the astronaut picture, and update the getElementById() function
  // Hint: Use the 'inspect' feature in your browser
  var img = document.getElementById("");

  // TODO: Declare another variable and store the value of the 'Height' input box in it
  /* Complete code here = document.getElementById("size-height").value; */

  // TODO: Declare a variable (use a descriptive name) and store the value of the 'Width' input box in it
  // Hint: Use the '.value' attribute

  // TODO: Update the width of the astronaut picture with the inputted width
  img.height; /* Complete code here */

  // TODO: Update the height of the astronaut picture with the inputted width

  // Challenge TODO: The desired final picture has a height/width ratio of 2/3
  //                  Instead of manually inputting a value for 'Height', calculate a value based on 'Width' and this ratio
}

/*
Step 3: Astronaut ID (Border Style and Name)

Arguements:
 None

Returns:
 None
*/
// Step 3:
function step3_border_color() {
  // TODO: Find the element id of the astronaut picture border, and update the getElementById() function
  // Hint: Use the 'inspect' feature in your browser

  // TODO: Find the element id of the color display box and store it in a variable

  // TODO: Define a variable for your border color, and prompt the user for a color
  // Hint: Find the colors you can use here - https://www.w3schools.com/tags/ref_colornames.asp

  // TODO: Set the border color to what the user entered
  border.style.borderColor; /* Complete code here*/

  // TODO: Update the color label with the name of the color chosen
  color_picked.innerText; /* Complete code here*/

  // Challenge TODO: Update the background of the color label with the color chosen
  // Hint: Try the .backgroundColor attribute
}

function step3_border_name() {
  // TODO: Find the element id of the astronaut name label and store it in a variable
  // TODO: Find the element id of the astronaut name input box and store it as a variable
  // Update the astronaut's name label with the value entered in the input box
  // Challenge TODO: Add a prefix or other stylization to the astronaut's label
}
