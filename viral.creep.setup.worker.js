module.exports = {
	RCL: {
	    1: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 200,
	        minEnergyAvailable: 0,
	        maxMulti: 8,
	        maxCount: room => ( room.situation.invasion ) ? 1 : 6,
	        maxWeight: 4000
	    },
	    2: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 200,
	        minEnergyAvailable: 0,
	        maxMulti: 8,
	        maxCount: room => ( room.situation.invasion ) ? 1 : 8,
	        maxWeight: 14400
	    },
	    3: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 400,
	        minEnergyAvailable: room => Creep.setup.worker.hasMinerOrHauler(room) ? 0.3 : 0,
	        maxMulti: 8,
	        maxCount: room => ( room.situation.invasion ) ? 1 : 8,
	        maxWeight: 9600
	    },
	    4: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 600,
	        minEnergyAvailable: room => Creep.setup.worker.hasMinerOrHauler(room) ? 0.3 : 0,
	        maxMulti: 8,
	        maxCount: (room) => ( room.situation.invasion || room.storage ) ? Creep.setup.worker.maxWorker(room) : 2,
	        maxWeight: 4800
	    },
	    5: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 800,
	        minEnergyAvailable: room => Creep.setup.worker.hasMinerOrHauler(room) ? 0.3 : 0,
	        maxMulti: 8,
	        maxCount: room => Creep.setup.worker.maxWorker(room),
	        maxWeight: 2000
	    },
	    6: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 600,
	        minEnergyAvailable: room => Creep.setup.worker.hasMinerOrHauler(room) ? 0.3 : 0,
	        maxMulti: 8,
	        maxCount: room => Creep.setup.worker.maxWorker(room),
	        maxWeight: 2000
	    },
	    7: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 800,
	        minEnergyAvailable: room => Creep.setup.worker.hasMinerOrHauler(room) ? 0.2 : 0,
	        maxMulti: 10,
	        maxCount: room => Creep.setup.worker.maxWorker(room),
	        maxWeight: 2000
	    },
	    8: {
	        fixedBody: [],
	        multiBody: [CARRY, WORK, MOVE],
	        minAbsEnergyAvailable: 800,
	        minEnergyAvailable: room => Creep.setup.worker.hasMinerOrHauler(room) ? 0.1 : 0,
	        maxMulti: room => (( !room.storage || room.storage.energy > MAX_STORAGE_ENERGY[8] ) ? 16 : 10),
	        maxCount: room => Creep.setup.worker.maxWorker(room),
	        maxWeight: 3200
	    }
	},
};
