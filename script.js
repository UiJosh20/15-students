studentArray = []

const dropAll = () => {
  document.getElementById('closeOn').style.display = "block";
  document.getElementById('dropOn').style.display = "none";
 class Fifteen {
  constructor(cname, age, gender, height, skinColor){
    this.cname = cname;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.skinColor= skinColor;
  } 
 }
 let one = new Fifteen("Adebayo", 20, "Male", "5.6ft", "Dark")
 let two = new Fifteen("Damola", 23, "Male", "5.2ft", "Dark")
 let three = new Fifteen("Timilehin", 24, "Male", "5.7ft", "brown")
 let four = new Fifteen("kenny", 18, "Female", "4.7ft", "Chocolate-Brown")
 let five = new Fifteen("Joshua", 23, "Male", "5.6ft", "Dark")
 let six = new Fifteen("Oluwaseun", 20, "Male", "5.6ft", "light brown")
 let seven = new Fifteen("Mohammed", 26, "Male", "6.6ft", "Light")
 let eight = new Fifteen("Rema", 25, "Male", "5.9ft", "Dark")
 let nine = new Fifteen("Damilare", 20, "Male", "5.6ft", "Dark")
 let ten = new Fifteen("Pamilarin", 27, "Female", "5.6ft", "Dark")
 let eleven = new Fifteen("olamilekan", 25, "Male", "5.8ft", "light")
 let twelve = new Fifteen("Fatima", 24, "Female", "5.1ft", "light")
 let thirteen = new Fifteen("Boluwatife", 29, "Female", "5.2ft", "Dark")
 let fourteen = new Fifteen("Halimot", 27, "Female", "5.5ft", "DarkJade")
 let fifteen = new Fifteen("Temitope", 23, "Male", "5.6ft", "brown")


 studentArray.push(one, two, three, four, five, six,seven, eight, nine, ten,eleven,twelve, thirteen, fourteen, fifteen)
 studentArray.map((information, i)=>{
  display.innerHTML += `
  <div class="book d-flex flex-column m-3">
  <p>${information.cname}</p>
  <p>${information.age}</p>
  <p>${information.gender}</p>
  <p>${information.height}</p>
  <p>${information.skinColor}</p>
  <div class="cover">
  <p>${i+1}</p>
  </div>
 </div>
  `
 })


}


const closeAll = () => {
  document.getElementById('dropOn').style.display = "block";
  document.getElementById('closeOn').style.display = "none";
  display.innerHTML = ""
}

