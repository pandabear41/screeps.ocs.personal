module.exports = {
	isValidTarget: function(target){
	    return (target != null && target.energy != null && target.energy > 0 &&
	        (target.targetOf === undefined || !_.some(target.targetOf, {'creepType': 'miner'}) ));
	        (target.targetOf === undefined || target.targetOf.length < target.accessibleFields + 1 /*|| !_.some(target.targetOf, {'creepType': 'miner'})*/ ));
	},
};