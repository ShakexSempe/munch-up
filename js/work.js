const work = [{
        id: 1,
        title: "Frozen Theme Cake",
        category: "girls",
        price: 450.00,
        img: "images/item-1-min.jpg",
        desc: `Frozen themed cake that is fitting for this freezing winter day.  `,
    },
    {
        id: 2,
        title: "dragonballZ Theme cake",
        category: "boys",
        price: 450.00,
        img: "images/item-2-min.jpg",
        desc: `Another childhood memory cake which is still loved to this day `,
    },
    {
        id: 3,
        title: "BMW theme cake",
        category: "boys",
        price: 400.00,
        img: "images/item-3-min.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "white wedding",
        category: "adults",
        price: 500.00,
        img: "images/item-4-min.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "mother's birthday",
        category: "adult",
        price: 550.00,
        img: "images/item-5-min.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "mother's birthday rose bucket",
        category: "adults",
        price: 450.00,
        img: "images/item-6-min.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "ladies birthday",
        category: "adults",
        price: 550.00,
        img: "images/item-7-min.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "birthday classic drip",
        category: "girls",
        price: 450.00,
        img: "images/item-8-min.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "chocolate & vanilla",
        category: "birthday",
        price: 400,
        img: "images/item-9-min.jpg",
        desc: `Delicious birthday Cakes.. Munch Up`,
    },
    {
        id: 10,
        title: "Munch Up",
        category: "cupcakes",
        price: 250,
        img: "images/item-10-min.jpg",
        desc: `Delicious Cupcakes.. Munch Up`,
    },
    {
        id: 11,
        title: "Baby Boy birthday cake",
        category: "kids",
        price: 400,
        img: "images/item-11-min.jpg",
        desc: `Delicious Baby birthday Cakes.. Munch Up`,
    },
    {
        id: 12,
        title: "Valentines Cupcakes",
        category: "cupcakes",
        price: 250,
        img: "images/item-12-min.jpg",
        desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
    },
    {
        id: 13,
        title: "berry compote and cream cheese filling cake",
        category: "adults",
        price: 550,
        img: "images/item-13-min.jpg",
        desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
    },
    {
        id: 14,
        title: "spiderman theme cake",
        category: "kids",
        price: 500,
        img: "images/item-14-min.jpg",
        desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
    },
    {
        id: 15,
        title: "Munch Up",
        category: "kids",
        price: 450,
        img: "images/item-15-min.jpg",
        desc: `How I miss putting the smile on people's faces with the work of my hands, being creative and putting my best foot forward. `,
    },
    {
        id: 16,
        title: "lemon blueberry cake",
        category: "adults",
        price: 550,
        img: "images/item-16-min.jpg",
        desc: `So for Mothers day, make this delicious lemon blueberry cake. So moist, got that tang and considering including this baby in my cake list.`,
    },
    {
        id: 17,
        title: "birthday cake",
        category: "birthday",
        price: 550,
        img: "images/item-17-min.jpg",
        desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
    },
    {
        id: 18,
        title: "vanilla and rose flavour marble cake",
        category: "birthday",
        price: 550,
        img: "images/item-18-min.jpg",
        desc: `Made this delicious moist cake for one of my loyal customers, a vanilla and rose flavour marble cake for her birthday. Just enjoy making people smile through a slice of cake`,
    },
    {
        id: 19,
        title: "Superhero cake",
        category: "kids",
        price: 400,
        img: "images/item-19-min.jpg",
        desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
    },
    {
        id: 20,
        title: "Spiderman theme",
        category: "boys",
        price: 400,
        img: "images/item-20-min.jpg",
        desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
    },
    {
        id: 21,
        title: "Teletubbies theme cake",
        category: "kids",
        price: 0,
        img: "images/item-21-min.jpg",
        desc: `Wholesome meals. Delicious Cakes.. Munch Up`,
    },


];
//target portfolio section to be populated ith items:
const portfolio = document.querySelector('.portfolio');
//display items via () when DOM content has loaded 
window.addEventListener('DOMContentLoaded', () => {
    displayWorkItems(work);
})
//function to display work items in portfolio section 
//map() to display each work item wrapped in the item class via template literal
//join("");
// portfolio innerHTML
displayWorkItems = (workItems) => {
    let displayWork = workItems.map(item => {
        return `<div class="item">
                    <img src=${item.img} alt="cake">
                    <div class="action">
                        <h3>${item.title}</h3>
                        <p >${item.desc}</p>
                        <button class="overlaybtn" href="contact.html">R${item.price}</button>
                    </div>
                </div>`
    });
    displayWork = displayWork.join("");
    portfolio.innerHTML = displayWork;


}

