const user = {
    name:"Monish",
    address:{
        city:"New York"
    }
};
//console.log(user.address?.city); // "New York"
//console.log(user.address?.zipcode); // Undefined (no error)
console.log(user.contact.phone); // Undefined (safe access)
