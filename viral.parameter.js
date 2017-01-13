module.exports = {
    SAY_PUBLIC: false,
    CREEP_NEW_PATHFINDER: false,
    SPAWN_DEFENSE_ON_ATTACK: false,
    CONTROLLER_SIGN: true,
    MAX_STORAGE_ENERGY: {
    	1: 2000,
    	2: 2000,
    	3: 2000,
        4: 10000,
        5: 20000,
        6: 50000,
        7: 100000,
        8: 300000
    },
    MAX_STORAGE_MINERAL:100000,
    MIN_MINERAL_SELL_AMOUNT:1000,
    ENERGY_VALUE_CREDITS: 0.05, // energy worth
    MIN_SELL_RATIO: {
        'H': 0.3,
        'O': 0.3,
        'U': 0.3,
        'L': 0.3,
        'K': 0.3,
        'Z': 0.3,
        'X': 0.4
    },
    TIME_ZONE: -8,
    TIME_REPORT: 14000, // ticks between room reports
    NOTIFICATE_INVADER: true, // Also log common 'Invader' hostiles
};
