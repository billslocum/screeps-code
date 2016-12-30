var roleGuard2 = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var goThere = Game.flags.Guards;
        var goThere3 = Game.flags.RoomNorth;
        var goThere4 = Game.flags.LoveItHere2;
        var goThere2 = Game.flags.VisitorCenter;   

        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            creep.moveTo(closestHostile);
            creep.attack(closestHostile);
        }
        else {
            creep.moveTo(goThere);
        }
    }
};

module.exports = roleGuard2;