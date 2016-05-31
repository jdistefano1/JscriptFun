/*
var batwing = {
    status: "Ready",
    rescueBatman: function(){
//        document.write("Locating his transponder....initiating launch....");
    }
}


if (batwing.status === "Ready") {
    batwing.rescueBatman();
}

var utilities = {
    printAllMembers: function (targetObject) {
        for (i in targetObject) {
            document.write("<br />" + targetObject[i]);
        }
    }
}

*/
//utilities.printAllMembers(batwing);

/*
var i_am_empty = {};
utilities.printAllMembers(i_am_empty);
*/

var planet = {
    id: 34,
    name: "Iggy",
    faction: {
        factionId: 2,
        name: "Nex",
        notification: function () {
            document.write("Nex alliance...unite!");
        }
    },
    cities: [
        { locationid: 15, name: "gladius" },
        { locationid: 16, name: "cheuck" },
        { locationid: 17, name: "meaty" }
    ]
};