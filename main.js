var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleGuard = require('role.guard');
var roleArcher = require('role.archer');
var roleClaimer = require('role.claimer');
var roleDismantler = require('role.dismantler');
/** var roleHarvester2 = require('role.harvester2');
var roleUpgrader2 = require('role.upgrader2');
var roleBuilder2 = require('role.builder2');
var roleRepairer2 = require('role.repairer2');
var roleGuard2 = require('role.guard2');
var roleArcher2 = require('role.archer2'); **/


module.exports.loop = function () {

    for(var roomname in Game.rooms) {
        console.log('Room "'+roomname+'" has '+Game.rooms[roomname].energyAvailable+' energy available');
        console.log('Room "'+roomname+'" has '+Game.rooms[roomname].energyCapacityAvailable+' energy capcity');
        if (Game.rooms[roomname].energyCapacityAvailable > 299 && Game.rooms[roomname].energyCapacityAvailable < 550) {
            var creepGenerator = require('creepGenerator');
        }
        if (Game.rooms[roomname].energyCapacityAvailable > 549 && Game.rooms[roomname].energyCapacityAvailable < 800) {
            var creepGenerator = require('creepGenerator550');
        }
        if (Game.rooms[roomname].energyCapacityAvailable > 799) {
            var creepGenerator = require('creepGenerator800');
        }         
    }

    for(var name in Memory.creeps) {

        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    creepGenerator.run();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'guard') {
            roleGuard.run(creep);
        }
        if(creep.memory.role == 'archer') {
            roleArcher.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'dismantler') {
            roleDismantler.run(creep);
        }        
/**        if(creep.memory.role == 'harvester2') {
            roleHarvester2.run(creep);
        }
         if(creep.memory.role == 'upgrader2') {
            roleUpgrader2.run(creep);
        }
        if(creep.memory.role == 'builder2') {
            roleBuilder2.run(creep);
        }
        if(creep.memory.role == 'repairer2') {
            roleRepairer2.run(creep);
        }
        if(creep.memory.role == 'guard2') {
            roleGuard2.run(creep);
        }
        if(creep.memory.role == 'archer2') {
            roleArcher2.run(creep);
        } **/
    }
}