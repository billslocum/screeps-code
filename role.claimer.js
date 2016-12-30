var roleClaimer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var goThere = Game.flags.Claimers;
        var goThere2 = Game.flags.Halfway;
        var goThere3 = Game.flags.NewClaim;

        creep.moveTo(goThere);
        creep.claimController(goThere); 

    }
};

module.exports = roleClaimer;