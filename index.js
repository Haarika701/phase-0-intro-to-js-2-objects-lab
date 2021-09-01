// Write your solution in this file!
var employee = {
    name : "Haary",
    streetAddress : "41 Kenny cir"
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    return Object.assign({} , employee,{
        [key] : value
    });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee[key] = value;
   return employee;
}
function deleteFromEmployeeByKey(employee,key){
 var newObj = Object.assign({},employee);
 delete newObj[key];
 return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}