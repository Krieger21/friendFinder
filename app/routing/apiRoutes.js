var express = require("express");
var app = express();
var path = require("path");



var friends = require('/Users/coltenkrieg/Desktop/friendFinder/app/data/friends.js')


module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        return res.json(friends)

}),

    app.post("/api/friends", function(req,res){
        var newFriend = req.body
        friends.push(newFriend)
        var newArray = []
        var newArray2 = []
        var newArray3 = []
        var newArray4 = []
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

        integers2 = friends.forEach(parse2)

       var newFriend2 = newFriend.scores

       var integers = newFriend2.forEach(parse)
       
      
       var total = 0
       for (var i = 0; i < newArray.length; i++) {
           total += newArray[i]
       }
       newArray4.push(total)

       var array7 = []
 function ya(x) {
     var newer = Math.abs(x - newArray4[0])
     array7.push(newer)
 }

newArray3.forEach(ya)


function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 9; i < a.length; i+=9) {
     if (a[i] < a[lowest]) lowest = i;
     var friend = lowest/9
    }
    console.log(friend);
    return res.json(friends[friend]);
   }
   indexOfSmallest(array7)
   
    

})


}