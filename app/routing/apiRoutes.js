var express = require("express");
var app = express();
var path = require("path");


// Requiring in the friends.js data
var friends = require('/Users/coltenkrieg/Desktop/friendFinder/app/data/friends.js')

// allowing for the export of these calls to my server
module.exports = function(app) {
    // returning to my survey route the friends.js data
    app.get("/api/friends", function(req, res){
        return res.json(friends)

}),
// adding the new user input to the friends.js array & logic for returning new best friend
    app.post("/api/friends", function(req,res){
        // pushing user input to the friends.js array
        var newFriend = req.body
        friends.push(newFriend)
        // creating new arrays to hold user input and friends.js scores data
        var newArray = []
        var newArray2 = []
        var newArray3 = []
        var newArray4 = []
        // Function for the parseInt values for the user input array and pushing these values to their own array
        function parse(x) {
           newArray.push(parseInt(x))
           
        }

        function parse2(x) {
            total2 = 0
               for (var w = 0; w < x.scores.length; w++) {
                   newArray2.push(parseInt(x.scores[w]))
                   for (var n = 0; n < newArray2.length; n++) {
                       total2 += newArray2[n]
                       newArray3.push(total2)
                       newArray2 = []
                   }                    
               }
            }
            // for each function parseInt-ing the the scores data from preexisting users and pushing them to newArray3
        var integers2 = friends.forEach(parse2)

        // for each function pushing parseInt(newFriend.scores) to the newArray variable
       var newFriend2 = newFriend.scores
       var integers = newFriend2.forEach(parse)
       
    //   loop that totals the newArray array into one number and pushes that number to newArray4
       var total = 0
       for (var i = 0; i < newArray.length; i++) {
           total += newArray[i]
       }
       newArray4.push(total)

    //    a future forEach function that subtracts the user answers total score from every number in newArray3 (which is the running total of the previous user answers) and pushing these results to array7
       var array7 = []
 function ya(x) {
     var newer = Math.abs(x - newArray4[0])
     array7.push(newer)
 }

newArray3.forEach(ya)
console.log(array7)

// in this function I know that only the indexes of array7 that are useful to me are multiples of 9, so is set my loop for multiples of nine and then return the index of the lowest possible difference between user answers and the data from the friends.js.scores array
function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 9; i < a.length; i+=10) {
     if (a[i] < a[lowest]) lowest = i;
     var friend = Math.round(lowest/9)
    }
    console.log(friend);
    return res.json(friends[friend]);
   }
//    I call the function entering array
   indexOfSmallest(array7)
   
    

})


}