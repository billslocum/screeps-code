var roleDismantler = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var targetRoom = 0;
        var goThere = Game.flags.Dismantlers;
        var goThere2 = Game.flags.o;       

        creep.moveTo(goThere);
    }
};

module.exports = roleDismantler;