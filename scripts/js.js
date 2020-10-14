

// getComputedStyle(document.documentElement)
//     .getPropertyValue('--my-variable-name');

//     // To set the value of a CSS variable using JavaScript, you use setProperty on documentElement's style property:

// document.documentElement.style
//     .setProperty('--my-variable-name', 'pink');

//     // printinig
// window.print();

const button = document.querySelector("#overlaybutton")

function openNav(overlay) {
    overlay.style.width = "50%";
    overlay.style.height = "50%";
}
  
function closeNav(overlay) {
    overlay.style.width = "0%";
    overlay.style.height = "0%";
}

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
  console.log(Boolean(toggled))
  console.log(button)
}