// class Operators {
//     constructor(number){
//         this.Number = number;
//     }
    
//     plus(x){
//         return this.Number + x;
//     }

//     divide(x){
//         return this.Number / x;
//     }

//     multiply(x){
//         return this.Number * x;
//     }

//     minus(x){
//         return this.Number - x;
//     }
// }

// let result = new Operators(50)
// console.log(result.Number);

// console.log(result.plus(6).minus(30).multiply(3).divide(2));

  // function akif(num, meme){
  //   this.kakas = num,
  //   this.dudus = meme
  // }

  // let nickname_Key = "username"
  // let akiff = {
  //   firstname : "lulus",
  //   secondname : "pepes",
  //   age : 89,
  //   [nickname_Key] : "unqalamunqala"
  // }


  // let nickname_Key = "username";
  // akiff[nickname_Key] = "kakas"  
  // console.log(akiff);


  // let user = Object.assign({}, akiff);
  // console.log(user);


// class Car {
//     constructor(number,model) {
//       this.number = number;
//       this.model = model
//     }

//     plus(num) {
//       this.number = this.number + num;
//       return this;
//     }

//     multiply(num) {
//       this.number = this.number * num;
//       return this;
//     }

//     divide(num) {
//       this.number = this.number / num;
//       return this;
//     }

//     minus(num) {
//       this.number = this.number - num;
//       return this;
//     }

//   }

//   let result = new Car(50,"Lambarquni");
//   result.plus(6);
//   result.minus(30);
//   result.multiply(3);
//   let result2 = result.divide(2);
//   console.log(result2);




// class User{
//   constructor(username, password){
//     this.username = username;
//     this.password = password
//   }
// }

// class Admin extends User{
//   constructor(username, password,section, isModerator){
//     super(username, password)
//     this.section = section;
//     this.isModerator = isModerator
//   }

//   isCorrect(){
//     let count1 = 0;
//     let count2 = 0;
//     for (let i = 0; i < this.password.length; i++) {
//       if (this.password.charAt(i)>0 && this.password.charAt(i)<9) {
//         count1++;
//         break;
//       }
//     }
//     for (let i = 0; i < this.password.length; i++) {
//       if (this.password.charAt(i) == this.password.charAt(i).toUpperCase()) {
//         count2++;
//         break;
//       }      
//     }
//     if (count1 == 0 && count2 == 0) {
//       console.log("Password sehvdir");
//     }
//     else{
//       console.log("Password duzgundur");
//     }
//   }
// }

// let admin = new Admin("Akif", "akif12", "djdf", "kjfj");

// admin.isCorrect();




// let parentAll = document.createElement("div");
// parentAll.className = "parentAll"
// parentAll.setAttribute("style","width:100%; border:2px solid green")

// let h1 = document.createElement("h1");
// h1.innerText = "I am h1 tag"

// let first_p = document.createElement("p");
// first_p.innerText = "I am first p tag"
// first_p.setAttribute("style","color:blue")

// let second_p = document.createElement("p");
// second_p.innerText = "I am second p tag"
// second_p.setAttribute("style","color:red")

// let first_span = document.createElement("span");
// first_span.innerText = "I am first span tag "
// first_span.setAttribute("style","font-weight:bold")

// let second_span = document.createElement("span");
// second_span.innerText = "I am first span tag"
// second_span.setAttribute("style","font-weight:bold")

// let h3 = document.createElement("h3");
// h3.innerText = "I am last h3 tag"
// h3.setAttribute("style","background-color:yellow")

// document.body.append(parentAll);
// parentAll.append(h1,first_p,second_p,first_span,second_span,h3);

// console.log(parentAll);

  



// let input = document.querySelector(".name")
// let button = document.querySelector(".btn");

// button.onclick = function () {
//   if (input.value.length >= 3) {
//     alert("narmalni addi");
//   } else {
//     alert("Get ozuve narmalni ad qoy");
//   }
// }

// let a = document.querySelector(".google");
// let button = document.querySelector(".button");
// let attr = a.getAttribute("href");

// button.onclick = function(){
//   let attr = a.getAttribute("href");
//   if (attr.includes("google")) {
//     a.setAttribute("href","https://www.youtube.com")
//     button.classList.remove("btn-outline-success");
//     button.classList.add("btn-outline-warning")
//     a.innerText = "Youtube";
//     a.setAttribute("style", "color:red !important")
//     button.innerText = "Youtube";
//   } else {
//     if (attr.includes("youtube")) {
//       a.setAttribute("href","https://www.google.com")
//       button.classList.remove("btn-outline-warning");
//       button.classList.add("btn-outline-success");
//       a.innerText = "Google"
//       a.setAttribute("style", "color:green !important")
//       button.innerText = "Google";
//     }
//   }
// }

// let nickname_Key = "nickname";

// let person = {
//   firstname : "Rashad",
//   secondname : "Farhadzada",
//   age : 22,
//   [nickname_Key] : "Akif"
// }

// let person2 = Object.assign({}, person);

// let person3 = {... person};


// console.log(person);
// console.log(person2);
// console.log(person3);

// class Zakir {
//   constructor(firstname,surname,age){
//     this.firstname = firstname;
//     this.surname = surname;
//     this.age = age;  
//   }

//   showInfo(){
//     console.log(`${this.firstname} ${this.surname} ${this.age}`)
//   }
// }

// let person = new Zakir("Zakir","Akifoglu",45)
// person.showInfo();







// let section = document.querySelector("section");
// let descs = document.querySelectorAll(".desc");
// let tabs = document.querySelectorAll(".countries");
// let tab = document.querySelector("part");

// console.log(descs);

// tabs.forEach((tab) => {
//   tab.onclick = function(){
//     descs.forEach((section) => {
//       section.style.zIndex = 0;
//     })
//     let colorId = tab.getAttribute("data-id")
//     let prts = document.getElementById(colorId);
//     prts.style.zIndex = 1;
//   } 
// });


// let menu = document.querySelector(".menu");
// let secondaryMenu = document.querySelector(".menu-click");
// let home = document.querySelector(".home");
// let closeBtn = document.querySelector(".button");

// menu.addEventListener("click",function () {
//   secondaryMenu.style.width = "360px";
//   secondaryMenu.style.height = "100vh";
// })


// closeBtn.addEventListener("click", function () {
//   secondaryMenu.style.width = "0px";
//   secondaryMenu.style.height = "0vh";
// })






let input = document.querySelector("#file");
let table = document.querySelector("#table");
let tBody = document.querySelector(".tbody");
let dropZone = document.querySelector(".dropZone");


dropZone.addEventListener("drop",function(e){
  e.preventDefault();
  let files = Array.from(e.dataTransfer.files);
  files.forEach((file)=>{
      ShowFIles(file);
  })
})

dropZone.addEventListener("dragover",function (e) {
  e.preventDefault();
})

input.addEventListener("change",function (e) {
  let chosenFiles  = Array.from(e.target.files);
  chosenFiles.forEach((file) => {
    ShowFIles(file);
  })
  
})

function ShowFIles(file) {
  if (!file.type.includes("image/")) {
    return;
  }
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener("loadend",function (e) {
    let src = fileReader.result;
    let row = document.createElement("tr");
    let num = document.createElement("td");
    let fileImg = document.createElement("td");
    let fileName = document.createElement("td");
    let fileType = document.createElement("td");
    let fileSize = document.createElement("td");
    let deletee = document.createElement("td");
    let img = document.createElement("img");
    let deleteBtn=document.createElement("button")
    
    
    deleteBtn.className="btn btn-danger";
    deleteBtn.innerText="Delete file";
    num.className = "nums";
    img.src = src;
    img.style.width = "100%"
    row.style.width = "100%";
    deletee.style.display = "flex";
    deletee.style.justifyContent = "center";
    deletee.style.alignItems = "center";
    deletee.append(deleteBtn);
    fileImg.append(img);
    row.append(num,fileImg,fileName,fileType,fileSize,deletee);
    tBody.append(row);
    fileName.innerText = file.name;
    let numbers = document.querySelectorAll(".nums")

    fileType.innerText = file.type;
    fileSize.innerText = (file.size / 1024).toString().substring(0,5)+ "kb"; 

    if (tBody.firstElementChild) {
      table.style.display="inline-table"
    }
    
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].innerText = i+1;
    }


    deleteBtn.addEventListener("click",function(){
      this.parentElement.parentElement.remove()
      
      let numbers=document.querySelectorAll(".nums")
      for (let i = 0; i < numbers.length; i++) {
          numbers[i].innerText=i+1;
          
      }
      if (!tBody.firstElementChild) {
          table.style.display="none"
      }
      
  })

  })
}