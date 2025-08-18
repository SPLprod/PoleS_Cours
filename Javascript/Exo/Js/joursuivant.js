let result = window.prompt("Veuillez entrer un jour de la semaine svp / Please enter desired day")

if (result == "Lundi" || result == "lundi") {
    document.write("<h2>Demain il sera Mardi</h2>")
}

else if (result == "Monday" || result == "monday") {
    document.write("<h2>It'll be Tuesday tomorrow</h2>")
}

else if (result == "Mardi" || result == "mardi") {
    document.write("<h2>Demain il sera Mercredi</h2>")
}

else if (result == "Tuesday" || result == "tuesday") {
    document.write("<h2>It'll be Wednesday tomorrow</h2>")
}

else if (result == "Mercredi" || result == "mercredi") {
    document.write("<h2>Demain il sera Jeudi</h2>")
}

else if (result == "Wednesday" || result == "wednesday") {
    document.write("<h2>It'll be Thursday tomorrow</h2>")
}

else if (result == "Jeudi" || result == "jeudi") {
    document.write("<h2>Demain il sera Vendredi</h2>")
}

else if (result == "Thursday" || result == "thursday") {
    document.write("<h2>It'll be Friday tomorrow</h2>")
}

else if (result == "Vendredi" || result == "vendredi") {
    document.write("<h2>Demain il sera Samedi</h2>")
}

else if (result == "Friday" || result == "friday") {
    document.write("<h2>It'll be Saturday tomorrow</h2>")
}

else if (result == "Samedi" || result == "samedi") {
    document.write("<h2>Demain il sera Dimanche</h2>")
}

else if (result == "Saturday" || result == "saturday") {
    document.write("<h2>It'll be Sunday tomorrow</h2>")
}

else if (result == "Dimanche" || result == "dimanche") {
    document.write("<h2>Demain il sera Lundi</h2>")
}

else if (result == "Sunday" || result == "sunday") {
    document.write("<h2>It'll be Monday tomorrow</h2>")
}

else {
    document.write("<h2>Veuillez entrer un nom de jour valide!</h2> <h3>(Lundi/Mardi/Mercredi/Jeudi/Vendredi/Samedi/Dimanche)</h3> <h2>Please enter a valid day name!</h2> <h3>(Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday)</h3>")
}