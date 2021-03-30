//repeat

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(strs, optionss) {
 console.log(optionss);
  strs = String(strs)
    console.log(typeof(strs));
  if (optionss == null){
    return strs;
  }
  if (strs == null){
    return 'Error, задайте число - strs';
  }
  itog = [];
  if (optionss.repeatTimes == false){
    optionss.repeatTimes = 1;
  }
  if (optionss.additionRepeatTimes == false){
    optionss.additionRepeatTimes = 1;
  }
  for(let i = 0; i < optionss.repeatTimes; i++){
    let count = optionss.additionRepeatTimes;
    let addition = String(optionss.addition);
    let sub = []

    for ( let j = 0; j < optionss.additionRepeatTimes; j++){
      let sub_str = String(addition);
        sub.push(sub_str)
       if (j+1 !== optionss.additionRepeatTimes){
         if (optionss.additionSeparator == false){
           optionss.additionSeparator = '|'
         }
          sub.push(optionss.additionSeparator)
       }
    }
    sep = []
    if (i+1 !== optionss.repeatTimes){
       if (optionss.separator == false){
           optionss.additionSeparator = '+'
         }
      sep.push(optionss.separator);
    }
    /*  console.log(sub); */
    let letete = [ strs, sub.join("") ,sep.join("")]
  itog.push(letete.join(""));
  }
 
  return itog.join("");
}
