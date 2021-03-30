  // dreamteam
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
 itog = []
for (i=0; i <members.length; i++){
  if (typeof members[i] === "string"){
  itog.push(members[i].split("")[0]);
  }

}
return itog.sort().join("");
};
