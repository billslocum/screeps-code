var creepGenerator = {

    /** @param {Creep} creep **/
    run: function(creep) {

        console.log('creepGenerator800 being used');

        var numHarvesters0 = 1;
        var numUpgraders0 = 1;
        var numBuilders0 = 0;
        var numRepairers0 = 0;
        var numHarvesters1 = 3;
        var numUpgraders1 = 4;
        var numBuilders1 = 3;
        var numRepairers1 = 3;
        var numClaimers1 = 1;
        var numGuards1 = 2;
        var numArchers1 = 2;
     /**   var numHarvesters2 = 3;
        var numUpgraders2 = 5;
        var numBuilders2 = 2;
        var numRepairers2 = 2;
        var numGuards2 = 2;
        var numArchers2 = 2; **/

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < numHarvesters0) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,CARRY,CARRY,CARRY,MOVE], undefined, { role: 'harvester' });
            console.log('Spawning new harvester: ' + newName);
        }

        if(harvesters.length < numHarvesters1) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, { role: 'harvester' });
            console.log('Spawning new harvester: ' + newName);
        }

        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('Upgraders: ' + upgraders.length);

        if(upgraders.length < numUpgraders0) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,CARRY,CARRY,CARRY,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName); 
        } 

        if(upgraders.length < numUpgraders1) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName); 
        } 

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('Builders: ' + builders.length);

        if(builders.length < numBuilders0) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,CARRY,CARRY,CARRY,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName); 
        }
        
        if(builders.length < numBuilders1) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName); 
        }

        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
        console.log('Repairers: ' + repairers.length);

        if(repairers.length < numRepairers0) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairer'});
            console.log('Spawning new repairer: ' + newName);
        }
        if(repairers.length < numRepairers1) {
            var newName = Game.spawns['nuisance'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'repairer'});
            console.log('Spawning new repairer: ' + newName);
        }

        var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
        console.log('Claimers: ' + claimers.length);

        if(claimers.length < numClaimers1) {
            var newName = Game.spawns['nuisance'].createCreep([CLAIM,MOVE,MOVE], undefined, {role: 'claimer'});
            console.log('Spawning new claimer: ' + newName);
        }

        var guards = _.filter(Game.creeps, (creep) => creep.memory.role == 'guard');
        console.log('Guards: ' + guards.length);

        if(guards.length < numGuards1) {
            var newName = Game.spawns['nuisance'].createCreep([HEAL,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE], undefined, {role: 'guard'});
            console.log('Spawning new guard: ' + newName);
        }

        var archers = _.filter(Game.creeps, (creep) => creep.memory.role == 'archer');
        console.log('Archers: ' + archers.length);

        if(archers.length < numArchers1) {
            var newName = Game.spawns['nuisance'].createCreep([HEAL,RANGED_ATTACK,ATTACK,MOVE,MOVE,MOVE], undefined, {role: 'archer'});
            console.log('Spawning new archer: ' + newName);
        }
        
/**        var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
        console.log('Harvesters2: ' + harvesters2.length);

        if(harvesters2.length < 2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([WORK,CARRY,CARRY,CARRY,MOVE], undefined, { role: 'harvester2' });
            console.log('Spawning new harvester2: ' + newName);
        }

        if(harvesters2.length < numHarvesters2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, { role: 'harvester2' });
            console.log('Spawning new harvester2: ' + newName);
        }

        var upgraders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader2');
        console.log('Upgraders2: ' + upgraders2.length);

         if(upgraders2.length < 2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader2'});
            console.log('Spawning new upgrader2: ' + newName); 
        } 
 
        if(upgraders2.length < numUpgraders2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader2'});
            console.log('Spawning new upgrader2: ' + newName); 
        } 

        var builders2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder2');
        console.log('Builders2: ' + builders2.length);

        if(builders2.length < numBuilders2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder2'});
            console.log('Spawning new builder2: ' + newName); 
        }

        var repairers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer2');
        console.log('Repairers2: ' + repairers2.length);

        if(repairers2.length < numRepairers2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'repairer2'});
            console.log('Spawning new repairer2: ' + newName);
        }

        var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
        console.log('Claimers: ' + claimers.length);

        if(claimers.length < numClaimers) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([CLAIM,MOVE,MOVE], undefined, {role: 'claimer'});
            console.log('Spawning new claimer: ' + newName);
        }

        var guards2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'guard2');
        console.log('Guards2: ' + guards2.length);

        if(guards2.length < numGuards2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE], undefined, {role: 'guard2'});
            console.log('Spawning new guard2: ' + newName);
        }

        var archers2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'archer');
        console.log('Archers2: ' + archers2.length);

        if(archers2.length < numArchers2) {
            var newName = Game.spawns['CHaChaBoom'].createCreep([RANGED_ATTACK,RANGED_ATTACK,ATTACK,MOVE,MOVE,MOVE], undefined, {role: 'archer2'});
            console.log('Spawning new archer2: ' + newName);
        } **/
    }
};

module.exports = creepGenerator;