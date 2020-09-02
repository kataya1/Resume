getComputedStyle(document.documentElement)
    .getPropertyValue('--my-variable-name');

    // To set the value of a CSS variable using JavaScript, you use setProperty on documentElement's style property:

document.documentElement.style
    .setProperty('--my-variable-name', 'pink');