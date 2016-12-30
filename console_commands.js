Game.spawns['montewa'].createCreep( [WORK, CARRY, MOVE], 'Harvester1' );
Game.spawns['montewa'].createCreep( [WORK, CARRY, MOVE], 'Harvester2' );
Game.spawns['montewa'].createCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], 'HarvesterBig', { role: 'harvester' } );

Game.spawns['montewa'].createCreep( [WORK, CARRY, MOVE], 'Upgrader1' );
Game.spawns['montewa'].createCreep( [WORK, CARRY, MOVE], 'Upgrader2' );

Game.spawns['montewa'].createCreep( [WORK, CARRY, MOVE], 'Builder1', { role: 'builder' } )
Game.spawns['montewa'].createCreep( [WORK, CARRY, MOVE], 'Builder2', { role: 'builder' } )

Game.spawns['montewa'].createCreep( [CLAIM, CLAIM, CLAIM, MOVE, MOVE, MOVE], 'Claimer1' );

Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Harvester2'].memory.role = 'harvester';
Game.creeps['HarvesterBig'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';
Game.creeps['Upgrader2'].memory.role = 'upgrader';
Game.creeps['Builder1'].memory.role = 'builder';

Game.creeps['Harvester1'].suicide()

Game.spawns['montewa'].room.controller.activateSafeMode();

Game.spawns['montewa'].room.createConstructionSite( 37, 10, STRUCTURE_TOWER );
Game.spawns['montewa'].room.createConstructionSite( 37, 10, STRUCTURE_EXTENSION );
Game.spawns['montewa'].room.createConstructionSite( 37, 10, STRUCTURE_SPAWN );
Game.spawns['montewa'].room.createConstructionSite( 42, 17, STRUCTURE_ROAD );
Game.spawns['montewa'].room.createConstructionSite( 47, 28, STRUCTURE_WALL );

Game.creeps['Harvester1'].moveTo(Flag1);

