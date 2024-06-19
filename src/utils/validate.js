export const   checkValid = (email, password, name) =>{

const isValidEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
const isValidName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(name);
if(!isValidEmail){
    return "email is not valid"
}
if(!isValidPassword){
    return "password is not valid"
}
// if(!isValidName){
//     return "name is not valid"
// }

return null;

}
