let car = {};
let passengers = [" Tristan", " Dominique", " Jean", " Patrique", " Claire", " Amélie", " Gwenn"]
let madein = "Made in : "
let sold = "The car has been sold at : "
function display() {
    document.write("<ul>")
    for (let i in car) {
        document.write(`<li><strong>${car[i]}</strong></li>`);
        }
    document.write("</ul>")
}

// CAR = CADILLAC ELDORADO 4th GEN
car.brand = "Cadillac Eldorado Fourth Gen"
car.year = madein + "1959"
car.sell = sold + new Date("1959-12-25")
car.users = "Passengers :" + passengers[Math.floor(Math.random() * 7)] + " &" + passengers[Math.floor(Math.random() * 7)]
display();

// CAR2 = Ferrari Enzo Ferrari
car.brand = "Ferrari Enzo (F60)"
car.year = madein + "2002 - 2004"
car.sell = sold + new Date("2003-05-22")
car.users = "Passengers :" + passengers[Math.floor(Math.random() * 7)] + " &" + passengers[Math.floor(Math.random() * 7)]
display();

// CAR3 = DeLorean DMC-12
car.brand = "DeLorean DMC-12"
car.year = madein + "(1976) 1981 - 1983"
car.sell = sold + new Date("1980-04-08")
car.users = "Passengers :" + passengers[Math.floor(Math.random() * 7)] + " &" + passengers[Math.floor(Math.random() * 7)]
display();

// CAR4 = Fiat Panda
car.brand = "Fiat Panda"
car.year = madein + "1980–present"
car.sell = sold + new Date("2000-11-18")
car.users = "Passengers :" + passengers[Math.floor(Math.random() * 7)] + " &" + passengers[Math.floor(Math.random() * 7)]
display();