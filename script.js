 var screen = document.querySelector(".screen")
 var buttons = document.querySelectorAll("button")
 var res

var data = []

function handleclick(button){
    value = button.innerText 

    if(value === "CLEAR ALL" ){
        data = []
        screen.innerText = "0"
    }else if (value === "="){
        // eval(data)
        
        res = (eval(data.join("")))
        data = [] //evaluate the result here instead of adding it like this 10*4+100 it will evaluate it and add the next one

        data.push(res)//then push the evaluated one inside this

        screen.innerText =res
    }else if(value === "C"){
    
        data.pop()
        screen.innerText = data.join("")
    }else{
        data.push(value)
        screen.innerText = data.join("")
    }

}

//  buttons.forEach((button) => button.onclick = () => console.log(button.innerText))
//0R

buttons.forEach(function(button){
    button.onclick = function(){
        handleclick(button)
    }
})




// OOP (objected oriented programming)
// we have
// class: it is a blueprint for creating object

// class person{
//     constructor(name, country){
//         this.name = name;
//         this.country = country;
//     }
// }
// var p1 = new person("amina","usa")
// var p2 = new person("halima","canada")
// var p3 = new person()

// console.log(p2.country)

// class animal {
//     constructor(name, species,features){
//         this.name = name;
//         this.species = species;
//         this.features = features;
//     }
// }
// var a1 = new animal ("goat","mammal","4legs")
// var a2 = new animal ("fish","terrestial","fin")

// console.log(a2)
// console.log(a2.features)

// class person{
//     constructor(name, gender){
//         this.myname =name;
//         this.mygender = gender;
//     }
//     info(){
//         alert(`my name is ${this.myname} and i am a ${this.mygender}`)
//     }
// }

// var p1 = new person("sherif","M")
// var p2 = new person("amina", "F")
// p2.info()

// //inheritance
// class car extends person{
//     constructor(name, gender,year,model){
//         super(name,gender)
//         this.year = year
//         this.model = model 
//     }
//     cardata(){
//         alert(`my name is ${this.myname} and i am a ${this.mygender} this car ${this.year} ${this.model}`)
//     }
// }
// var c1 = new car("sherif", "M",2030, "toyota")
// var c2 = new car("amina", "F",2020,"nissan")

// c1.cardata()

