/*
OK                           0
ERR_NOT_OWNER               -1
ERR_NO_PATH                 -2
ERR_NAME_EXISTS             -3
ERR_BUSY                    -4
ERR_NOT_FOUND               -5
ERR_NOT_ENOUGH_ENERGY       -6
ERR_INVALID_TARGET          -7
ERR_FULL                    -8
ERR_NOT_IN_RANGE            -9
ERR_INVALID_ARGS           -10
ERR_TIRED                  -11
ERR_NO_BODYPART            -12
ERR_NOT_ENOUGH_EXTENSIONS  -6
ERR_RCL_NOT_ENOUGH         -14
ERR_GCL_NOT_ENOUGH         -15

FIND_EXIT_TOP                     1
FIND_EXIT_RIGHT                   3
FIND_EXIT_BOTTOM                  5
FIND_EXIT_LEFT                    7
FIND_EXIT                        10
FIND_CREEPS                     101
FIND_MY_CREEPS                  102
FIND_HOSTILE_CREEPS             103
FIND_SOURCES_ACTIVE             104
FIND_SOURCES                    105
FIND_DROPPED_ENERGY             106
FIND_DROPPED_RESOURCES          106
FIND_STRUCTURES                 107
FIND_MY_STRUCTURES              108
FIND_HOSTILE_STRUCTURES         109
FIND_FLAGS                      110
FIND_CONSTRUCTION_SITES         111
FIND_MY_SPAWNS                  112
FIND_HOSTILE_SPAWNS             113
FIND_MY_CONSTRUCTION_SITES      114
FIND_HOSTILE_CONSTRUCTION_SITES 115
FIND_MINERALS                   116

LOOK_ENERGY             "energy"
LOOK_TERRAIN            "terrain"
LOOK_CONSTRUCTION_SITES "constructionSite"
LOOK_FLAGS              "flag"
LOOK_STRUCTURES         "structure"
LOOK_MINERALS           "mineral"
LOOK_SOURCES            "source"
LOOK_RESOURCES          "resource"
LOOK_NUKES              "nuke"
LOOK_CREEPS             "creep"

TOP            1
TOP_RIGHT      2
RIGHT          3
BOTTOM_RIGHT   4
BOTTOM         5
BOTTOM_LEFT    6
LEFT           7
TOP_LEFT       8

MOVE           "move"
WORK           "work"
CARRY          "carry"
ATTACK         "attack"
RANGED_ATTACK  "ranged_attack"
TOUGH          "tough"
HEAL           "heal"
CLAIM          "claim"

BODYPART_COST {
    move:           50,
    work:          100,
    attack:         80,
    carry:          50,
    heal:          250,
    ranged_attack: 150,
    tough:          10,
    claim:         600
}

BODYPARTS_ALL [
    MOVE,
    WORK,
    CARRY,
    ATTACK,
    RANGED_ATTACK,
    TOUGH,
    HEAL,
    CLAIM
]

   CARRY_CAPACITY: 50,
   HARVEST_POWER: 2,
   HARVEST_MINERAL_POWER: 1,
   REPAIR_POWER: 100,
   DISMANTLE_POWER: 50,
   BUILD_POWER: 5,
   ATTACK_POWER: 30,
   UPGRADE_CONTROLLER_POWER: 1,
   RANGED_ATTACK_POWER: 10,
   HEAL_POWER: 12,
   RANGED_HEAL_POWER: 4
   
   STRUCTURE_SPAWN       "spawn"
STRUCTURE_EXTENSION   "extension"
STRUCTURE_ROAD        "road"
STRUCTURE_WALL        "constructedWall"
STRUCTURE_RAMPART     "rampart"
STRUCTURE_KEEPER_LAIR "keeperLair"
STRUCTURE_PORTAL      "portal"
STRUCTURE_CONTROLLER  "controller"
STRUCTURE_LINK        "link"
STRUCTURE_STORAGE     "storage"
STRUCTURE_TOWER       "tower"
STRUCTURE_OBSERVER    'observer'
STRUCTURE_POWER_BANK  'powerBank'
STRUCTURE_POWER_SPAWN 'powerSpawn'
STRUCTURE_EXTRACTOR   'extractor'
STRUCTURE_LAB         'lab'
STRUCTURE_TERMINAL    'terminal'
STRUCTURE_CONTAINER   'container'


 */

module.exports = {

};