const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(animal) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        const orangeAnimals = animal.filter(pet => {
          return pet.color === 'orange';
        });
        const orangeAnimalNames = orangeAnimals.map(pet => {
          return pet.name;
        });

        return orangeAnimalNames;

    // Annotation:
    // Used 2 methods to accomplish this: filter & map
    // Returned an array of string names

  },

  sortByAge(animal) {
    // Sort the kitties by their age

    const descendingAges = animal.sort((animalA, animalB) => {
      return animalB.age - animalA.age;
    });

    return descendingAges;

    // Annotation:
    // Researchd .sort to accomplish this (a-b = ascending order, b-a = descending order)
    // Returned an array of objects
  },

  growUp(animal) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const ageUp = animal.map(pet => {
      pet.age += 2;
      return pet;
    });

    return ageUp;

    //used map
    //altered kitty.age by 2 and reassigned it then returned kitty object
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const keysList = clubs.reduce((acc, currentClub) => {
      currentClub.members.forEach((currentPerson) => {
        if(!acc.includes(currentPerson)){
           acc.push(currentPerson)
        }
      })
      return acc;
    }, [])
  
    const formatList = keysList.reduce((acc, currentPerson) => {
      const clubsList = []
      clubs.forEach((currentClub) => {
        if(currentClub.members.includes(currentPerson)){
          clubsList.push(currentClub.club)
        }
      })
      acc[currentPerson] = clubsList
      return acc
    }, {})
    
    return formatList

    // Annotation:
    // You CAN do this. You are capable of mastering iterators
    // Yes! Break the problem down, 1 goal at a time 
    // (get keys, format list, get values)
    // Don't overthink it, just try it
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const modInfo = mods.reduce((acc, currentMod)=> {
      const modClass = {};
      modClass.mod = currentMod.mod
      const ratio = currentMod.students/currentMod.instructors;
      modClass.studentsPerInstructor = ratio;
      acc.push(modClass);
      return acc;
    },[]);
    return modInfo;

    // Annotation:
    // reduce is great is return a single array
    // feel free to delcare an emty object in your 
    // reduce and add keys/values to it later
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    return cakes.reduce((acc, current) => {
      const cakeInfo = {};
      cakeInfo.flavor = current.cakeFlavor;
      cakeInfo.inStock = current.inStock;
      acc.push(cakeInfo);
      return acc;
    }, [])

    // Annotation:
    // When you're feeling confident, you can just return the iterator
    // instead of assigning it to a variable and returning that variable
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    return cakes.filter((current) => {
      return current.inStock > 0;
    })

    // Annotation:
    // Keep up that pseudo code! At least state your goal and what
    // iterator you think you might use
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    return cakes.reduce((total, currentCake) => {
      total += currentCake.inStock;
      return total;
    }, 0)

    // Annotation:
    // Keep it simple and easy baby! 1 value? Use reduce!
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    return cakes.reduce((acc, current) => {
      current.toppings.forEach((current) => {
        if(!acc.includes(current)){
              acc.push(current);
        }
      })
      return acc;
    }, [])

    // Annotation:
    // Reduce + forEach is great combo to get inside an array of an array
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const ingredientList = cakes.reduce((acc, current) => {
      current.toppings.map((current) => {
        if(!acc[current]){
          acc[current] = 0;
        }
        acc[current] += 1;
      })
      return acc;
    }, {})
    return ingredientList;

    // Annotation:
    // Read over this, its a bit complicated
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    const feList = classrooms.filter((currentClass) => {
      return currentClass.program === "FE";
    })
    return feList;

    // Annotation:
    // Keep it simple, don't overthink it
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const capInfo = {};
    const feCap = classrooms.reduce((acc, current) => {
      if(current.program === "FE"){
      acc+=current.capacity;
    }
      return acc;
    }, 0)
    
    const beCap = classrooms.reduce((acc, current) => {
    if(current.program === "BE"){
      acc+=current.capacity;
    }
      return acc;
    }, 0)
    
    capInfo.feCapacity = feCap;
    capInfo.beCapacity = beCap;
    return capInfo;

    // Annotation:
    // Remember! You don't need to accomplish everything in the 
    // iterator! Use iterator as single task then use the function
    // itself to construct your answer (exmample, use reduce to
    // get feCapacity then use the function to construct your obect)
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const capSortedList = classrooms.sort((classA, classB) => {
      return classA.capacity-classB.capacity;
    })
    return capSortedList;

    // Annotation:
    // Don't forget: when using sorted(), you can still access any
    // property in the object still(example: sorted used on classrooms
    // objects on its .capacity property buy typing classA.capacity);
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const booksNotHorrorOrTrueCrime = books.filter((currentBook) => {
      return currentBook.genre != "Horror" && currentBook.genre != "True Crime"
    })
    const titleList = booksNotHorrorOrTrueCrime.map((currentBook) => {
      return currentBook.title
    })
    return titleList

    // Annotation:
    // Slow down and read the goal

  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const booksFrom90sAnd00 = books.filter((currentBook) => {
      return currentBook.published >= 1990
    })
    
    const booksFormattedList = booksFrom90sAnd00.reduce((acc, currentBook) => {
      const bookInfo = {}
      bookInfo.title = currentBook.title;
      bookInfo.year = currentBook.published
      acc.push(bookInfo)
      return acc
    }, [])
    return booksFormattedList

    // Annotation:
    // Don't forget to intiaize reduce with a starting point
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const booksAfterYear = books.filter((currentBook) => {
      return currentBook.published >= year
    })
    const bookFormatted = booksAfterYear.reduce((acc, currentBook) => {
      const bookInfo = {}
      bookInfo.title = currentBook.title
      bookInfo.year = currentBook.published
      acc.push(bookInfo)
      return acc;
    }, [])
    return bookFormatted

    // Annotation:
    // Use what you know! Build upon it based off the recent exercise
    // Buiild the full skeleton of an iterator before proceeding
    // Don't forget about using that acc and returning it
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const tempArray = weather.reduce((acc, current) => {
      const tempAvg = (current.temperature.high + current.temperature.low)/2;
      acc.push(tempAvg);
      return acc;
    }, [])
    return tempArray;

    // Annotation:
    // Create local variables (const, let) to hold your calculations
    // then push it into your acc so its easier to read
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
    const sunnyArray = weather.filter(current => {
      return current.type === "sunny" || current.type === "mostly sunny";
    })
    const formattedArray = sunnyArray.map(current => {
      return `${current.location} is ${current.type}.`;
    })
    return formattedArray;

    // Annotation:
    // Its okay to break up the problem into multiple iterators
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
    const humidList = weather.reduce((acc, current) => {
      acc.push(current.humidity);
      return acc;
    }, []);
    const humidListSorted = humidList.sort((humidA, humidB) => {
      return humidB-humidA;
    })  
    const mostHumid = weather.find(currentWeather => {
      return currentWeather.humidity === humidListSorted[0];
    });
    return mostHumid;

    // Annotation:
    // Its okay to break it up inter different iterators to solve
    // the problem

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

  const visitInfo = {};
  
  const parksToVisitList = nationalParks.filter((current) => {
    return current.visited === false;
  })
  .map((current) => {
    return current.name;
  })

  const parksVisitedList = nationalParks.filter((current) => {
    return current.visited === true;
  })
  .map((current) => {
    return current.name;
  })

  visitInfo.parksToVisit = parksToVisitList;
  visitInfo.parksVisited = parksVisitedList;
  
  return visitInfo;

    // Annotation:
    // You can chain iterators if you're feeling confident
    // Use the iterator to collect the info you need and use 
    // the function to help format your answer
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const stateInfoList = nationalParks.map((current) => {
      const stateInfo = {};
      stateInfo[current.location] = current.name;
      return stateInfo;
    })
    return stateInfoList;

    // Annotation:
    // Its okay to break down the problem and start over with basics
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const activitiesList = nationalParks.reduce((acc, current) => {
      current.activities.forEach((current2) => {
        if(!acc.includes(current2)){
              acc.push(current2);
        }
      })
      return acc;
    }, [])
    return activitiesList;

    // Annotation:
    // Reduce + forEach great combo! forEach is great for getting inside
    // array of arrays. It can modify the acc on the outside
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const beerCount = breweries.reduce((acc, beer) => {
      acc += beer.beers.length;
      return acc;
    }, 0)
    return beerCount;

    // Annotation:
    // 1 value number? Good time to use .reduce()
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const breweriesBeerList = breweries.map((currentBrewery) => {
      const breweryInfo = {};
      breweryInfo.name = currentBrewery.name;
      breweryInfo.beerCount = currentBrewery.beers.length;
      return breweryInfo;
    });
    return breweriesBeerList;

    // Annotation:
    // Reread your goal!
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5
    const beerCount = breweries.find((brewery)=> {
      return brewery.name === breweryName;
    })
    return beerCount.beers.length;

    // Annotation:
    // .find returns the whole element (object in this case) then you
    // use the function's return to access its value 
    // (return beerCount.beers.lenght)
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const arrayOfBrews = breweries.reduce((acc, current) => {
      acc.push(current.beers);
      return acc;
    }, []).flat();
    const sorrtedArray = arrayOfBrews.sort((beerA, beerB) => {
      return beerB.abv - beerA.abv;
    });
    return sorrtedArray[0];

    // Annotation:
    // Use .flat() at end of array to flatten it (for instances when
    // your array is an array of something [[{obj}]] => [{obj}])
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    return boardGames[type].map((currentGame) => {
      return currentGame.name
    })

    // Annotation:
    // Keep that psuedocode up!
    // Kept it simple, if it's the same about of elements, then use map
    // like you did, then just access the info you need, in this case,
    // just the names
    // great use of bracket notation and deciding what array to iterate on
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    const genreList = boardGames[type].map((currentGame) => {
      return currentGame.name
    })
    return genreList.sort()

    // Annotation:
    // Rewriting it is good practice but in the test, try to call the 
    //previous function to save time
    // Great use of sort on the returned item 
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    const sortedList = boardGames[type].sort((a, b) => {
      return b.rating - a.rating
    })
    return sortedList[0]

    // Annotation:
    // Keep up that pseudocoding! It's very helpful
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    const total = boardGames[type].reduce((acc, currentGame) => {
      acc += currentGame.rating
      return acc
    }, 0)
    const avg = total/boardGames[type].length
    return avg

    // Annotation:
    // Remeber to finish reading instructions!! Forgot the note there
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
