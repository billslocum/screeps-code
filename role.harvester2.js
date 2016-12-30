var roleHarvester2 = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.transfering && creep.carry.energy == 0) {
            creep.memory.transfering = false;
            creep.say('harvesting');
        }
        if (!creep.memory.transfering && creep.carry.energy == creep.carryCapacity) {
            creep.memory.transfering = true;
            creep.say('transfering');
        }

        if (creep.memory.transfering) {
            for(var name in Game.rooms) {
            }

            if(Game.rooms[name].energyAvailable < 1800) {
                var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION ||
                                    structure.structureType == STRUCTURE_SPAWN ||
                                    structure.structureType == STRUCTURE_TOWER)
                                    && (structure.energy < structure.energyCapacity);
            }
            });
                if(targets.length > 0) {
                    if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
                
            }
            else {
                
                creep.moveTo(Game.flags.Harvesters2);
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

module.exports = roleHarvester2;