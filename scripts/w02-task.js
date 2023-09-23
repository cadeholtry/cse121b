/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */
let fullName = "Cade Vernon Holtry";
let currentYear = 2023;
const profilePicture = "images/Cade.jpg"
/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let img_ = document.getElementsByTagName('img');
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
let imageElement = img_[0].setAttribute('src', profilePicture);
yearElement.textContent = currentYear;
img_[0].setAttribute('alt', `Profile image of ${fullName}`);
/* Step 5 - Array */
let favFoods = ['Indian Curry',' Stir Fry',' Gyro',' Spanakopita',' Tonkatsu Ramen'];
foodElement.innerHTML = favFoods;
anotherFav = " Hamburger";
favFoods.push(anotherFav);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
