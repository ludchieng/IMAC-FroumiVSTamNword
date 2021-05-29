const CARDS = [ 

    {   
        type:"BONUS",   
        content:"Une de vos froumis devient une mitraillette.",
        event: 1,
        effect: () => {
            let shootersTile = [];
            for(let col of tilemap.tiles) {
                for(let tile of col) {
                    if (tile.hasPlant() && Shooter.prototype.isPrototypeOf(tile.plant)) {
                        shootersTile.push(tile);
                    }
                }
            }
            let tile = shootersTile[Proba.uniformInt(shootersTile.length)];
            tile.plant.timeInterShoot = tile.plant.TIME_INTER_SHOOT_NOMINAL / 10;
            // AJOUTER AURA
            setTimeout(() => {
                tile.plant.timeInterShoot = tile.plant.TIME_INTER_SHOOT_NOMINAL;
            }, 15000);
        }
    }, 
    
    {   
        type:"BONUS",   
        content:"Toutes vos froumis roses deviennent des froumis rouges (6s).",
        event: 2,
        effect: () => {
            let shootersTile = [];
            let shootersNormal = [];
            for(let col of tilemap.tiles) {
                for(let tile of col) {
                    if (tile.hasPlant() && ShooterNormal.prototype.isPrototypeOf(tile.plant)) {
                        shootersTile.push(tile);
                        shootersNormal.push(tile.plant);
                        tile.plant = new ShooterRebou(tile.i, tile.j);
                    }
                }
            }
            setTimeout(() => {
                for(let shooter of shootersNormal) {
                    tilemap.get(shooter.i, shooter.j).plant = shooter;
                } 
            }, 10000);
        }
    },
    
    {   
        type:"MALUS",   
        content:"Plus de tamanoirs (20s).",
        event: 3,
        effect: () => {
            zombiesArmy.zombiesGroupSizeExpectedFactor = zombiesArmy.ZOMBIES_GROUP_SIZE_EXPECTED_FACTOR_NOMINAL *2;
            setTimeout(() => {
                zombiesArmy.zombiesGroupSizeExpectedFactor = zombiesArmy.ZOMBIES_GROUP_SIZE_EXPECTED_FACTOR_NOMINAL;
            }, 20000);
        }
    },

    {   
        type:"MALUS",   
        content:"Toutes vos entités d'une ligne sont détruites.",
        event: 4,
        effect: () => {
            const lines = tilemap.tiles[0].map((_, colIndex) => tilemap.tiles.map(row => row[colIndex]));
            for(let tile of lines[Proba.uniformInt(lines.length)]) {
                if (tile.hasPlant()) tile.removePlant();
            }
        }
    } 
];
