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
];

//  target container 
const flavorGroup = document.querySelector('.flavorGroup');
//display items via () when DOM content has loaded 
window.addEventListener("DOMContentLoaded", () => {
    //call function which displays mapped flavor items
    displayFlavor(flavors);
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