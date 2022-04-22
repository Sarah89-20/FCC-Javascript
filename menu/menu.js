const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpg",
        desc: "stufffffffff",
    },
    {
        id: 2,
        title: "Blueberry Pancakes",
        category: "breakfast",
        price: 15.00,
        img: "./images/item-2.jpg",
        desc: "stufffffffff f",
    },
    {
        id: 3,
        title: "Banana Pancakes",
        category: "breakfast",
        price: 16.00,
        img: "./images/item-3.jpg",
        desc: "stufffffffff ff",
    }, 
    {
        id: 4,
        title: "Walnut Pancakes",
        category: "breakfast",
        price: 16.00,
        img: "./images/item-4.jpg",
        desc: "stufffffffff fff",
    } 
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
    let displayMenu = menu.map(function(item){

return item;
    });
    console.log(displayMenu);
});