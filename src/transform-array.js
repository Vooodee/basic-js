// transform
const CustomError = require("../extensions/custom-error");

module.exports = function transform(  arr ) {
 try { 
  if (Array.isArray(arr) !== true){
     throw new RangeError();
  }
}
    catch (e) {
  alert( "Извините, в данных ошибка. Число arr = " + arr + " должно являться массивом");
}
console.log(arr);
let itog = [];
for( let i = 0;i < arr.length; i++ ){
    if (typeof  arr[i] === "number"){
      itog.push(arr[i]);
    } else if (arr[i] === "--double-next" ){
      if (typeof  arr[i+1] === "number"){
         itog.push(arr[i+1]);
      }
    } else if (arr[i] === "--double-prev" ){
      if (typeof  arr[i-1] === "number"){
          itog.push(arr[i-1]);
      }
    } else if (arr[i] === "--discard-next" ){
        let x = arr.indexOf(arr[i]) 
          console.log(x); 
          arr.splice((x), 1);
    } else if (arr[i] === "--discard-prev" ){
      let x = arr.indexOf(arr[i]) 
          console.log(x); 
        itog.pop();
    }
}
return itog
};
