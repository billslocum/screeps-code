var roleArcher2 = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var goThere = Game.flags.Archers2;
        
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

module.exports = roleArcher2;