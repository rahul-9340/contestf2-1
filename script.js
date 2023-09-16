let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
    { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
    { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },]

  const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];



  // 1.1 Print Developers
  function printDeveloper() {
    for(let i=0; i<arr.length; i++ )
    console.log(arr[i].name);
  }
  printDeveloper();
  

function printDevelopers() {
    for(let i=0; i<data.length; i++ )
    console.log(data[i].name);
  }
  
printDevelopers();


//   // 2.2 Add Data
  function addData() {
    let addarray = [];
    let input1 = prompt(" Name")
    let input2 = prompt("Age")
    let input3 = prompt("proffesion")
    addarray.push(input1,input2,input3)
    console.log(addarray);
    alert(input1,input2,input3)
  }
 addData();


  // 3.3 Remove Admins
 


  function removeAdmin(le) {
    
  for(let i=2; i<le.length; i++){

    let de =  delete le[i].profession;
    console.log(de) 
  }

  }

  removeAdmin(arr);
  removeAdmin(data);
  


  // 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
  function mergeAndFilterProfessions() {
    //Write your code here, just console.log
  }

  // 4.4 Concatenate Array
  function concatenateArray() {
    arr = arr.concat(data);
    console.log(arr);
  }
 
  concatenateArray()

//   // 5. Find the personith the highest salary and reduce their salary by 10% as tax.
//   function applyTax() {
//     //Write your code here, just console.log
//   }



  
//   // 5.5 Average Age
//   function averageAge() {}

//   // 6. Check if every person in the array is a developer.
//   function isEveryoneDeveloper() {
//     //Write your code here, just console.log
//   }






  // 6.6 Age Check
  function checkAgeAbove25() {
    
     
  }
  
  checkAgeAbove25()






  // 7. Swap the professions of the first and last person in the array.
  function swapProfessions() {
    //Write your code here, just console.log
  }
  // 7.7 Unique Professions
  function uniqueProfessions() {}
  
  // 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
  function addExperienceProperty() {
    //Write your code here, just console.log
  }
  // 8.8 Sort by Age
  function sortByAge() {}
  
  // 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
  function groupByProfession() {
    //Write your code here, just console.log
  }
  // 9.9 Update Profession
  function updateJohnsProfession() {}
  
  // 10. Find the person who has a name with the longest length and capitalize their profession.
  function capitalizeLongestNamedPersonProfession() {
    //Write your code here, just console.log
  }
  
  // 11. Create a function that shuffles the array in a random order.
  function shuffleArray() {
    //Write your code here, just console.log
  }
  
  // 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
  function rotateArray(n) {
    //Write your code here, just console.log
  }
  
  // 13. Create a function that finds the person with the closest age to a given number.
  function findClosestAge(age) {
    //Write your code here, just console.log
  }
  
  // 14. Create a function that checks if there's any repeated name in the array.
  function hasRepeatedNames() {
    //Write your code here, just console.log
  }
  // 10.10 Profession Count
  function getTotalProfessions() {}


























