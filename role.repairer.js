var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var hitsRampart = 50000;
        var hitsTower = 3000;
        var hitsRoad = 3000;
        var hitsWall = 10000;

        if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
            creep.say('harvesting');
        }
        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('repairing');
        }

        if(creep.memory.repairing) {

            var repairRampart = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_RAMPART && structure.hits < hitsRampart)
                        }
            });
            var repairTower = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_TOWER && structure.hits < hitsTower)
                        }
            });
            var repairWall = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_WALL && structure.hits < hitsWall)
                        }
            });
            var repairRoad = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_ROAD && structure.hits < hitsRoad)
                        }
            });

            if(repairRampart.length > 0) {
                if(creep.repair(repairRampart[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(repairRampart[0]);
                }
            }
            else if(repairTower.length > 0) {
                if(creep.repair(repairTower[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(repairTower[0]);
                }
            }
            else if(repairWall.length > 0) {
                if(creep.repair(repairWall[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(repairWall[0]);
                }
            }              
            else {
                if(repairRoad.length > 0) {
                    if(creep.repair(repairRoad[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(repairRoad[0]);
                    }
                }    
            }
        }
        else {
            var target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(target) {
                if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target); }
            }
        }

    }       

};

module.exports = roleRepairer;