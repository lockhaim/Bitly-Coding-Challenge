var arr = require('./decodes.json');
//calling on the original array provided in decodes.json as opposed to hard coding for the final product.

// require csvtojson
var csv = require("csvtojson");

// Convert a csv file with csvtojson

let test = csv()
  .fromFile('./encodes.csv')
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
     jsonArray = jsonArrayObj
     // console.log(jsonArrayObj);
     //i had a lot of problems when using the csv to json and it was due to the object being returned being a promise. Thankfully we worked with promises previously so I moved all of the code inside of the promise, because initially nothing was being returned other than an empty object.



     var uriMap = {}
     // console.log(typeof jsonArray);


     // jsonArray.forEach(row => {
     //   let bitlink = `http://${row['domain']}/${row['hash']}`
     //   uriMap[bitlink] = row['long_url']
     // })

     // for (const property in object) {
     //   console.log(${property}: ${object[property]});
     // }

     for (let i = 0; i < jsonArray.length; i++) {
       // console.log(jsonArray[i])
       row = jsonArray[i]
       let bitlink = `http://${row['domain']}/${row['hash']}`
       uriMap[bitlink] = row['long_url']
     }
     // console.log(uriMap);
     // I am looping through the jsonArray and setting the variable bitlink equal to the correct formnat that the problkem asks for, as well as mapping the long utl to the bitlink.






     let subset = arr.filter(row =>
       row["bitlink"] in uriMap && row["timestamp"].startsWith("2021"))
     // console.log(subset)


     //the subset function tells the program what data we want to filter based on if the data returned (a variable we are calling a row since this is formatted with each json output as if it is its own row in a table) has a corresponding value related to the 'bitlink' key (or column if we are thinking of it as a table), and only if that entries timestamp key (column) has a value that starts with '2021' as specified in the original problem. The FILTER array method returns an array (ours is just filled with objects) all of which is the raw data that has passed through the filter. Documentation on the .filter() array method here 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'


     var urlCount = {}
     // console.log(urlCount)

     subset.forEach(row => {
       if (uriMap[row["bitlink"]] in urlCount){
           urlCount[uriMap[row["bitlink"]]]++
       }else{
           urlCount[uriMap[row["bitlink"]]] = 1
     }})

     // console.log(urlCount);

     // created an empty object name urlCount to store the filtered results. The function iterates over each entry and determines whether the count needs to be incremented or initialized because you cannot increment what doesnt exist. forEach array method documentation here 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'




     // subset.sort(function(a, b){return Object.values(b)[0] - Object.values(a)[0]})
     let result = Object.keys(urlCount).map((key) => {
         return {[key]: urlCount[key]}
     })
     //here were are just formatting (transforming) the data to the specified solution requested by mapping the keys from urlCount (the long url) to the value associated with that key.
     //documentation on the .map() array method can be found here 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'



     result.sort(function(a, b){return Object.values(b)[0] - Object.values(a)[0]})
     console.log(result)
     //finally we are sorting into descending order azs requested.




   })
// console.log(test);





let jsonArray=csv().fromFile('./encodes.csv');

// console.log(jsonArray);

//CSVtoJSON node package is installed so that we can parse the csv data from our encodes.csv  to use later in our filtration and sorting. Documentation provided here 'https://github.com/Keyang/node-csvtojson' and learned about from 'https://stackoverflow.com/questions/16831250/how-to-convert-csv-to-json-in-node-js'




// let arr = [
//     {"bitlink": "http://bit.ly/2kJdsg8", "user_agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7", "timestamp": "2020-02-15T00:00:00Z", "referrer": "t.co", "remote_ip": "4.14.247.63"},
//     {"bitlink": "http://bit.ly/2kJdsg8", "user_agent": "Mozilla/5.0 (iPhone; U; CPU iOS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/XXXXX Safari/525.20", "timestamp": "2020-07-29T00:00:00Z", "referrer": "direct", "remote_ip": "4.14.244.85"},
//     {"bitlink": "http://bit.ly/2kJej0k", "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36", "timestamp": "2021-06-20T00:00:00Z", "referrer": "twitter.com", "remote_ip": "2.203.85.0"},
//     {"bitlink": "http://es.pn/2lNPjVU", "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36", "timestamp": "2021-11-17T00:00:00Z", "referrer": "direct", "remote_ip": "2.17.160.0"},
//     {"bitlink": "http://bit.ly/2kjqil6", "user_agent": "Mozilla/5.0 (Android; Tablet; rv:30.0) Gecko/30.0 Firefox/30.0", "timestamp": "2021-02-24T00:00:00Z", "referrer": "direct", "remote_ip": "2.16.120.255"}
// ]

//I hard coded a few entries from the decodes.json so I could test each step with only a few lines of code as opposed to 10,000+ from the file.





// let go = 0
// let gh = 0
// let tw = 0
// let rd = 0
// let li = 0
// let yt = 0

//originally I was just going to manually create a filter and counter based on each individual link through a for loop, and had a seperate counter for each link. The above were variable initializations for each counter





// sortedArr = [
  // {"https://google.com": go},
  // {"https://github.com": gh},
  // {"https://twitter.com": tw},
  // {"https://reddit.com": rd},
  // {"https://linkedin.com": li},
  // {"https://youtube.com": yt}
// ]

//initialized a new array that would store the long url with the corresponding counter variable for each. I did play with having this array initialized completely empty as well as with each one starting at 0.





//console.log(arr[0]);
// console.log(arr[0].bitlink);
// console.log(arr[0].timestamp);
// console.log(arr[0]['timestamp']);

//testing to make sure I was accessing the original array and corresponding key value pairs accurately using bracket notation for the key as well.





// for (i = 0; i < arr.length; i++) {
//   if ( arr[i].bitlink === 'http://bit.ly/31Tt55y' && arr[i].timestamp.includes('2021-')) {
//     go++
//   }
//   if ( arr[i].bitlink === 'http://bit.ly/2kJO0qS' && arr[i].timestamp.includes('2021-')) {
//     gh++
//   }
//   if ( arr[i].bitlink === 'http://bit.ly/2kkAHNs' && arr[i].timestamp.includes('2021-')) {
//     tw++
//   }
//   if ( arr[i].bitlink === 'http://bit.ly/2kJdsg8' && arr[i].timestamp.includes('2021-')) {
//     rd++
//   }
//   if ( arr[i].bitlink === 'http://bit.ly/2kJej0k' && arr[i].timestamp.includes('2021-')) {
//     li++
//   }
//   if ( arr[i].bitlink === 'http://bit.ly/2lNPjVU' && arr[i].timestamp.includes('2021-')) {
//     yt++
//   }
// }

// The program runs a loop that intializes at 0 (the first element in the array) and increments by one over the length of the array. each pass the loop does will increment the corresponding link counter by one only if the object's bitlink key property has the matching value AND the timestamp key starts with 2021





// console.log(go);
// console.log(gh);
// console.log(tw);
// console.log(rd);
// console.log(li);
// console.log(yt);

// testing each link and counter to make sure the counters were incrementing correctly





// sortedArr.push({'https://google.com':go})
// sortedArr.push({'https://github.com':gh})
// sortedArr.push({'https://twitter.com':tw})
// sortedArr.push({'https://reddit.com':rd})
// sortedArr.push({'https://linkedin':li})
// sortedArr.push({'https://youtube.com':yt})
// console.log(sortedArr)

// initially was testing just manually pushing eaach object into the sortedArr array using push method, but quickly realized that the results were filtered and not necessarily sorted.






// console.log(go)
// for (i=0; i < sortedArr.length; i++){
//   if (go < gh) {
//     sortedArr.unshift({'https://github.com':gh})
//     sortedArr.pop()
//   }
//   if (gh < tw){
//     sortedArr.unshift({'https://twitter.com':tw})
//     sortedArr.pop()
//   }
//   if (tw < rd){
//       sortedArr.unshift({'https://reddit.com':rd})
//       sortedArr.pop()
//   }
//   if (rd < li){
//       sortedArr.unshift({'https://linkedin.com':li})
//       sortedArr.pop()
//   }
  // if (li < yt){
  //     sortedArr.unshift({'https://youtube.com':yt})
  //     sortedArr.pop()
  // }
  // if (yt < go){
  //   sortedArr.unshift({'https://google.com':go})
  //   sortedArr.pop()
  // }
// }
// console.log(sortedArr[0])
// console.log(sortedArr[1])
// console.log(sortedArr[2])
// console.log(sortedArr[3])
// console.log(sortedArr[4])
// console.log(sortedArr[5])

//considered running more nested if statements in a for loop and then sorting via the unshift and pop methods provided with js, but this was tedious and ugly code (with a larger big-O notation i believe)







// var object1 = [
//   {'test1': 10},
//   {'test2': 20},
//   {'test3': 30},
// ];
//
// object1.sort((a,b) => Object.values([a]) < Object.values([b]))
// console.log(object1)
//
// object1.sort((a,b) => Object.values([a]) > Object.values([b]))
// console.log(object1)

// I learned how reference just the values (since each key was technically different) through Object.values while reading up on how the sort method worked. I knew from previous experience that sort was what I wanted to use all along as opposed to a manual for loop but didnt know how to reference just the value. until further research. I wanted to make sure I was just referencing the value since each key (a string) would have a different numerical value.





// var uriMap = {
//   'http://bit.ly/31Tt55y': 'https://google.com',
//   'http://bit.ly/2kJO0qS': 'https://github.com',
//   'http://bit.ly/2kkAHNs': 'https://twitter.com',
//   'http://bit.ly/2kJdsg8': 'https://reddit.com/',
//   'http://bit.ly/2kJej0k': 'https://linkedin.com/',
//   'http://bit.ly/2lNPjVU': 'https://youtube.com/',
// }

//the above is a variable in the form of an object of all of the key value pairs provided in the encodes.csv which i hardcoded initially.





// console.log(sortedArr)
// console.log(Object.values(sortedArr[0]))
