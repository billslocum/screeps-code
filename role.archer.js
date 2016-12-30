var roleArcher = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var targetRoom = 1;
        var goThere = Game.flags.Archers;
        var goThere2 = Game.flags.VisitorCenter;       
       
        if (targetRoom = 1) {  
            var closestHostileCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            var closestHostileStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
            if(closestHostileCreep) {
                creep.moveTo(closestHostileCreep);
                creep.rangedAttack(closestHostileCreep);
            } 
            else if(closestHostileStructure) {
                creep.moveTo(closestHostileStructure);
                creep.rangedAttack(closestHostileStructure);
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

module.exports = roleArcher;