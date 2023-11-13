let studentArray = []


const dropAll = () => {
  closeText.style.display = "block"
  dropText.style.display = "none"
  document.getElementById('closeOn').style.display = "block";
  document.getElementById('dropOn').style.display = "none";
  const savedStudentArray = JSON.parse(localStorage.getItem('studentArray'));
  console.log(savedStudentArray);
  
  class Fifteen {
    constructor(cname, age, gender, height, skinColor){
     this.cname = cname;
     this.age = age;
     this.gender = gender;
     this.height = height;
     this.skinColor= skinColor;
  } 
 }


 let one = new Fifteen("Adebayo", 20, "Male", "5.6 ft", "Dark")
 let two = new Fifteen("Damola", 23, "Male", "5.2 ft", "Dark")
 let three = new Fifteen("Timilehin", 24, "Male", "5.7ft", "brown")
 let four = new Fifteen("kenny", 18, "Female", "4.7 ft", "Chocolate-Brown")
 let five = new Fifteen("Joshua", 23, "Male", "5.6 ft", "Dark")
 let six = new Fifteen("Oluwaseun", 20, "Male", "5.6 ft", "light brown")
 let seven = new Fifteen("Mohammed", 26, "Male", "6.6 ft", "Light")
 let eight = new Fifteen("Rema", 25, "Male", "5.9 ft", "Dark")
 let nine = new Fifteen("Damilare", 20, "Male", "5.6 ft", "Dark")
 let ten = new Fifteen("Pamilarin", 27, "Female", "5.6 ft", "Dark")
 let eleven = new Fifteen("olamilekan", 25, "Male", "5.8 ft", "light")
 let twelve = new Fifteen("Fatima", 24, "Female", "5.1 ft", "light")
 let thirteen = new Fifteen("Boluwatife", 29, "Female", "5.2 ft", "Dark")
 let fourteen = new Fifteen("Halimot", 27, "Female", "5.5 ft", "DarkJade")
 let fifteen = new Fifteen("Temitope", 23, "Male", "5.6 ft", "brown")

 studentArray.push(one, two, three, four, five, six,seven, eight, nine, ten,eleven,twelve, thirteen, fourteen, fifteen)
    for(let i = 0; i < 15; i++){
      const information = studentArray[i];
      display.innerHTML += `
      <div class="book d-flex flex-column m-3" id="bag">
      <h2>${information.cname}</h2>
      <p>${information.age} years old</p>
      <p>${information.gender}</p>
      <p>${information.height}</p>
      <p>${information.skinColor}</p>
      <div class="cover">
      <p class="fs-2">${i+1}</p>
      </div>
      </div>
      `
    }



}
const closeAll = () => {
  // document.getElementById('display').style.display = "none";
  document.getElementById('dropOn').style.display = "block";
  document.getElementById('closeOn').style.display = "none";
  display.innerHTML = ""

}

document.addEventListener('DOMContentLoaded', () => {
  dropAll()
});


