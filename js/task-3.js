// function getElementWidth(content, padding, border) {
//   const contentWidth = Number.parseFloat(content);
//   const paddingWidth = Number.parseFloat(padding);
//     const borderWidth = Number.parseFloat(border);
//     return contentWidth + paddingWidth * 2 + borderWidth * 2;
// }

// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));

// function checkForSpam(message) {
//   const lCaseMessages = message.toLowerCase();
//   return lCaseMessages.includes("spam") || lCaseMessages.includes("sale");
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function filterArray(numbers, value)
// {
//   const result = [];

//   for (let i = 0; i < numbers.length; i++)
//   {
//     if (numbers[i] > value) {
//     result.push(numbers[i]);
//     }
//   }
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



const profile =
{
  username: "Jacob",
  playTime: 300,

  changeUsername(newName)
  {
    this.username = newName;
  },

  updatePlayTime(hours)
  {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"