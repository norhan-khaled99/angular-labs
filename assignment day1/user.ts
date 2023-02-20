console.log("norhan");
import users from './users.json'


//1
const sortByUsername1 = users.sort((a, b) => a.username.localeCompare(b.username));
console.log(sortByUsername1);


//2
users.filter((x) =>{
if(x.address.geo.lat >= "-37.1496" && x.address.geo.lat <= "-68.6102" && x.address.geo.lng >="62.5342" && x.address.geo.lng <="81.1496")
     console.log(x.id)
})

//3
const createGoogleMapLinks = users.map(user => `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`);
console.log(createGoogleMapLinks);
  
  
