const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let disc; 
  let number_sec;
  let score;
  
   score = turnsSpeed / 3600;
   disc = Math.pow( 2, disksNumber ) - 1;
  
   number_sec = Math.floor( disc / score );
  let itog = {
    turns: disc,
    seconds: number_sec
  };
  return itog;
};
