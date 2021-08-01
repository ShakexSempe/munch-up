const flavors = [
    {
        id: 1,
        flavor: 'chocolate',
    },
    {
        id: 2,
        flavor: 'vanilla'
    },
    {
        id: 3,
        flavor: 'strawberry'
    },
    {
        id: 4,
        flavor: 'black forrest'
    },
    {
        id: 5,
        flavor: 'red velvet'
    },{
        id: 6,
        flavor: 'carrot'
    },{
        id: 7,
        flavor: 'Coconut'
    },{
        id: 8,
        flavor: 'Lemon'
    },
    {
        id: 9,
        flavor: 'white chocolate'
    }
];
const work = [{
    id: 1,
    title: "Frozen Theme Cake",
    category: "girls",
    price: 450.00,
    img: "images/item-1.jpg",
    desc: `Frozen themed cake that is fitting for this freezing winter day.  `,
},
{
    id: 2,
    title: "dragonballZ Theme cake",
    category: "boys",
    price: 450.00,
    img: "images/item-2.jpg",
    desc: `Another childhood memory cake which is still loved to this day `,
},
{
    id: 3,
    title: "BMW theme cake",
    category: "boys",
    price: 400.00,
    img: "images/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
},
{
    id: 4,
    title: "white wedding",
    category: "adults",
    price: 500.00,
    img: "images/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
},
{
    id: 5,
    title: "mother's birthday",
    category: "adult",
    price: 550.00,
    img: "images/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
},
{
    id: 6,
    title: "mother's birthday rose bucket",
    category: "adults",
    price: 450.00,
    img: "images/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
},
{
    id: 7,
    title: "ladies birthday",
    category: "adults",
    price: 550.00,
    img: "images/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
},
{
    id: 8,
    title: "birthday classic drip",
    category: "girls",
    price: 450.00,
    img: "images/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
},
{
    id: 9,
    title: "chocolate & vanilla",
    category: "birthday",
    price: 400,
    img: "images/item-9.jpg",
    desc: `Delicious birthday Cakes.. Munch Up`,
},
{
    id: 10,
    title: "cupcakes",
    category: "cupcakes",
    price: 250,
    img: "images/item-10.jpg",
    desc: `Delicious Cupcakes.. Munch Up`,
},
{
    id: 11,
    title: "Baby Boy birthday cake",
    category: "kids",
    price: 400,
    img: "images/item-11.jpg",
    desc: `Delicious Baby birthday Cakes.. Munch Up`,
},
{
    id: 12,
    title: "Valentines Cupcakes",
    category: "cupcakes",
    price: 250,
    img: "images/item-12.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
},
{
    id: 13,
    title: "berry compote and cream cheese filling cake",
    category: "adults",
    price: 550,
    img: "images/item-13.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
},
{
    id: 14,
    title: "spiderman theme cake",
    category: "kids",
    price: 500,
    img: "images/item-14.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
},
{
    id: 15,
    title: "Gender reveal",
    category: "kids",
    price: 450,
    img: "images/item-15.jpg",
    desc: `How I miss putting the smile on people's faces with the work of my hands, being creative and putting my best foot forward. `,
},
{
    id: 16,
    title: "lemon blueberry cake",
    category: "adults",
    price: 550,
    img: "images/item-16.jpg",
    desc: `So for Mothers day, make this delicious lemon blueberry cake. So moist, got that tang and considering including this baby in my cake list.`,
},
{
    id: 17,
    title: "birthday cake",
    category: "birthday",
    price: 550,
    img: "images/item-17.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
},
{
    id: 18,
    title: "vanilla and rose flavour marble cake",
    category: "birthday",
    price: 550,
    img: "images/item-18.jpg",
    desc: `Made this delicious moist cake for one of my loyal customers, a vanilla and rose flavour marble cake for her birthday. Just enjoy making people smile through a slice of cake`,
},
{
    id: 19,
    title: "Superhero cake",
    category: "kids",
    price: 400,
    img: "images/item-19.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
},
{
    id: 20,
    title: "Spiderman theme",
    category: "boys",
    price: 400,
    img: "images/item-20.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
},
{
    id: 21,
    title: "Teletubbies theme cake",
    category: "kids",
    price: 0,
    img: "images/item-21.jpg",
    desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
},


];

//  flavors select group
//  target containers 
const flavorGroup = document.querySelector('.flavorGroup');
const classic = document.getElementById('classic');

//display items via () when DOM content has loaded 
window.addEventListener("DOMContentLoaded", () => {
    //call function which displays mapped flavor items
    displayFlavor(flavors);
    displayClassic(work);
});
//function to display work items in portfolio section 
//map() to display each work item wrapped in the item class via template literal
//join("");
// portfolio innerHTML
displayFlavor = (flavorsItem) => {
    flavor = flavorsItem.map( item => {
        return `<option>${item.flavor}</option>`
    });
    flavor = flavor.join("");
    flavorGroup.innerHTML = flavor;
}

//  product select group
displayClassic = (workItems) => {
    product = workItems.map(item => {
        return `<option>${item.title}</option>`
    });
    product = product.join("");
    classic.innerHTML = product
}