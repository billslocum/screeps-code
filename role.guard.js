var roleGuard = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var targetRoom = 0;
        var goThere = Game.flags.Guards;
        var goThere2= Game.flags.Halfway;
        var goThere3 = Game.flags.VisitorCenter;       
       
        if (targetRoom = 1) {  
            var closestHostileCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            var closestHostileStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
            if(closestHostileCreep) {
                creep.moveTo(closestHostileCreep);
                creep.attack(closestHostileCreep);
            } 
            else if(closestHostileStructure) {
                creep.moveTo(closestHostileStructure);
                creep.attack(closestHostileStructure);
            }
            else {
                creep.moveTo(goThere);
            }
        }    
        else {
            creep.moveTo(goThere);
        }
    }
};

module.exports = roleGuard;