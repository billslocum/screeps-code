var roleRepairer2 = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var hitsRoad = 3000;
        var hitsWall = 10000;
        var hitsRampart = 50000;
        var hitsTower = 3000;

        if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
            creep.say('harvesting');
        }
        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('repairing');
        }

        if(creep.memory.repairing) {

            var torepair = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_RAMPART && structure.hits < hitsRampart)
                        }
            });

            if(torepair.length > 0) {
                if(creep.repair(torepair[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(torepair[0]);
                }
            }
            
            var torepair = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_ROAD && structure.hits < hitsRoad)
                        }
            });

            if(torepair.length > 0) {
                if(creep.repair(torepair[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(torepair[0]);
                }
            }
            
            var torepair = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_WALL && structure.hits < hitsWall)
                        }
            });

            if(torepair.length > 0) {
                if(creep.repair(torepair[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(torepair[0]);
                }
            }

            var torepair = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType === STRUCTURE_TOWER && structure.hits < hitsTower)
                        }
            });

            if(torepair.length > 0) {
                if(creep.repair(torepair[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(torepair[0]);
                }
            }            
            
        }
        else {
            var target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(target) {
                if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(36,4); }
            }
        }

    }       

};

module.exports = roleRepairer2;