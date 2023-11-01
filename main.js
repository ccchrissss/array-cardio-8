// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// function inventors1500() {
//   inventors.filter((inventor) => {
//     if(inventor.year >= 1500 && inventor.year <= 1599) {
//       return true
//     }
//   })
// }
// console.log(inventors1500())

// const inventors1500 = inventors.filter( (inventor) => {
//   if (inventor.year >= 1500 && inventor.year <= 1599) {
//     return true
//   }
// })

// console.table(inventors1500)

// const fifteen = inventors.filter(inventor => {
//   if(inventor.year >= 1500 && inventor.year <= 1599) {
//     return true
//   }
// })
// console.table(fifteen)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// function firstAndLast(arr) {
//   return arr.map(name => 
//   `${name.first} ${name.last}`)
// }
// console.table(firstAndLast(inventors))

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// function birthYearSort (array) {
//   return array.sort((a,b) => a.year - b.year)
// }
// console.table(birthYearSort(inventors))

// function deathYearSort (array) {
//   return array.sort((a,b) => b.passed - a.passed)
// }
// console.table(deathYearSort(inventors))

// Array.prototype.reduce()
// // 4. How many years did all the inventors live all together?
// function lifeSpanReduce(arr) {
//   let ageCalc = arr.map(lifeSpan => lifeSpan.passed - lifeSpan.year)
//   return ageCalc.reduce((a,b) => a + b, 0)
// }
// console.table(lifeSpanReduce(inventors))

// function inventorLifeSpan(arr) {
//   let ageCalc = arr.map(banana => {
//     return banana.passed - banana.year
//   })
//     return ageCalc.reduce((a,b) => a + b, 0)
// }
// console.log(inventorLifeSpan(inventors))


// const totalYears = inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year);
// }, 0);


// 5. Sort the inventors by years lived

// function lifeSpanSort() {

//   for(let i = 0; i < inventors.length; i++) {
//     inventors[i].lifeSpan = inventors[i].passed - inventors[i].year
//   }
//   // return inventors.sort((a,b) => a + b)
// }

// lifeSpanSort()

// let sortedByLifeSpan = inventors.sort((a,b) => a.lifeSpan - b.lifeSpan)


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// below is to simulate the double tabbing in the original index-start.html file for the array cardio problem set. We left the tabbing there so we could practice trimming the strings of white space 
//     let bigStringOfBoulevards = 
//     `Boulevard Auguste-Blanqui
//     Boulevard Barbès
//     Boulevard Beaumarchais
//     Boulevard de l'Amiral-Bruix
//     Boulevard Mortier
//     Boulevard Poniatowski
//     Boulevard Soult
//     Boulevard des Capucines
//     Boulevard de la Chapelle
//     Boulevard de Clichy
//     Boulevard du Crime
//     Boulevard du Général-d'Armée-Jean-Simon
//     Boulevard Haussmann
//     Boulevard de l'Hôpital
//     Boulevard des Italiens
//     Boulevard Lefebvre
//     Boulevard de la Madeleine
//     Boulevard de Magenta
//     Boulevard Malesherbes
//     Boulevard Marguerite-de-Rochechouart
//     Boulevard Montmartre
//     Boulevard du Montparnasse
//     Boulevard Raspail
//     Boulevard Richard-Lenoir
//     Boulevard Saint-Germain
//     Boulevard Saint-Michel
//     Boulevard de Sébastopol
//     Boulevard de Strasbourg
//     Boulevard du Temple
//     Boulevard Voltaire
//     Boulevard de la Zone`

// function strToArr (str) {

//   let boulevards = str.split('\n')

//   console.log(boulevards)

//   // boulevards.forEach( (e, i) => {
//   //   boulevards[i] = e.trim()
//   // })

//   boulevards = boulevards.map(e => e.trim())

//   console.log(boulevards)

//   let onlyBoulevardsWithDe = boulevards.filter( e => e.includes('de') )

//   return onlyBoulevardsWithDe
// }

// console.log(strToArr(bigStringOfBoulevards))


// 7. sort Exercise
// Sort the people alphabetically by last name

// parameters
// take in array of ppl

// return
// new array

// example
// ['bob', 'jim', 'alex'] to ['alex', 'bob', 'jim']

// pseudo code

// function peopleSorter(arr) {
//   return arr.sort()
// }


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];


// This is solving it without reduce... 

let testSet = new Set(data)

console.log(testSet)

function bakedPotato(arr) {
  
  let transport = Array.from(new Set(data))
  console.log(transport)
  // this is transport array: ['car', 'truck', 'bike', 'walk', 'van']
  // find how mannny times 'car' appears in the data array

  let filtered = []
  let sum = 0

  for (let i = 0; i < transport.length; i++) {
    // console.log('i: ', i)

    filtered = arr.filter( e => e == transport[i])

    sum += filtered.length
    // console.log(filtered, filtered.length)
    console.log(`transportation: ${transport[i]} \n instances: ${filtered.length}`)
    
  }

  return `total sum: ${sum}`

}

console.log(bakedPotato(data))

// parameters: array     // of strings
// return: sum     // of all the instances
// or
// return: sum     // array of strings and corresponnding number of instances. or array of objects

// e.g. instanceCounter([1,1,1,2,3])
// results in 5

// e.g. instanceCounter([1,1,1,2,3])
// results in ['1: 3', '2: 1', '3: 1']

// e.g. instanceCounter([1,1,1,2,3])
// results in [ {vehicle: 1, rep: 3}, {vehicle: 2, rep: 1}, {vehicle: 3, rep: 1} ]

// create a funcntion which takes in an array
// iterate through array and check if elements repeat
// if so, take note of it
// ultimately, return the findings like one of the examples above
