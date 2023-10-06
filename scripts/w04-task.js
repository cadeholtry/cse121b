/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Cade Holtry",
    photo: "images/Cade.jpg",
    favoriteFoods: [
        'Indian Curry',
        'Stir Fry',
        'Gyro',
        'Spanakopita',
        'Tonkatsu Ramen'
    ],
    hobbies: [
        'Lockpicking',
        'Tabletop gaming',
        'Puzzles',
        'Movie watching',
        'Speedrunning'
    ],
    placesLived: [],
}
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: 'North Dakota',
        length: '3 years'
    },
    {
        place: 'Alaska',
        length: '3 years'
    },
    {
        place: 'California',
        length: '15 years'
    }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.photo);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').append(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt');
    dt.textContent = places.place;
    let dd = document.createElement('dd');
    dd.textContent = places.length;
    document.querySelector('#places-lived').append(dt);
    document.querySelector('#places-lived').append(dd);
});

