

// getComputedStyle(document.documentElement)
//     .getPropertyValue('--my-variable-name');

//     // To set the value of a CSS variable using JavaScript, you use setProperty on documentElement's style property:

// document.documentElement.style
//     .setProperty('--my-variable-name', 'pink');

//     // printinig
// window.print();
let initialOverlayWidth = getComputedStyle(document.documentElement).getPropertyValue('--initial-overlay-width')
let initialOverlayHeigth = getComputedStyle(document.documentElement).getPropertyValue('--initial-overlay-height')
let overlayWidth = getComputedStyle(document.documentElement).getPropertyValue('--overlay-width')
let overlayheigth = getComputedStyle(document.documentElement).getPropertyValue('--overlay-height')
const button = document.querySelector("#overlaybutton")
let responsiveStylesheet = document.querySelector('#xyz');
responsiveStylesheet.disabled = true;

function openNav(overlay) {
    overlay.style.width = overlayWidth;
    overlay.style.height = overlayheigth;
}
  
function closeNav(overlay) {
    overlay.style.width = initialOverlayWidth;
    overlay.style.height = initialOverlayHeigth;
}

// overlay button
buttonHandler = () => {
  const overlay = document.querySelector("#overlay")
  const button = document.querySelector("#overlaybutton")
  let toggled = button.getAttribute("aria-pressed") === "true"
  if(toggled){
    closeNav(overlay)
  }
  else{
    openNav(overlay)
  }
  button.setAttribute("aria-pressed", !toggled)

}


makeResponsive = (el) => {
  // stylesheet.disabled = e.target.checked
  console.log(el)
  responsiveStylesheet.disabled = !(el.checked)
  
}
onCheckboxChange = (e) => {
  e.preventDefault()
  console.log(e)
  
  let checkbox_state = e.target.checked
}

// print function
printCV= () => {
  //     // printinig
  window.print();
}