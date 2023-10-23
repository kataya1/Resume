2023oct2

changed the order of the css importing

secondary.css is for the website function
style.css is for the resume look itself
I used to make the print margin = 0 using @print, and the margin is just html margin, it seems this is very wrong
(holy! i didn't even try to print my resumé before)
Now the #resume css padding simulates the print margins. the css padding is removed when printing

---

the ::before and the ::marker fucks up the word file conversion (from pdf)
replacing that with <hr>
sympols like "◈" fucks the word file aswell need to keep it simple "-"

---

let's simplify <hr> and not use absolute positioning
