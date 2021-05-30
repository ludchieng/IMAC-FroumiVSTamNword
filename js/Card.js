const CARDS = [ 

    {   
        type:"BONUS",   
        content:"Certaines froumis peuvent devenir des mitraillettes.",
        event: 1,
        effect: () => {
            for (let col of tilemap.tiles) {
                for (let tile of col) {
                    if (tile.hasPlant()
                      && Shooter.prototype.isPrototypeOf(tile.plant)
                      && Proba.bernoulli(.5))
                    {
                        let p = tile.plant;
                        p.timeInterShoot = p.TIME_INTER_SHOOT_NOMINAL / 10;
                        p.sprite.changeAnimation('saiyan');
                        setTimeout(() => {
                            p.timeInterShoot = p.TIME_INTER_SHOOT_NOMINAL;
                            p.sprite.changeAnimation('normal');
                        }, 1000 * Proba.exponentialDriven(.9, 5, 12, 5) * config.buffsDuration);
                    }
                }
            }
        }
    }, 
    
    {   
        type:"BONUS",   
        content:"Temporaire : les froumis roses deviennent des froumis rouges.",
        event: 2,
        effect: () => {
            for (let col of tilemap.tiles) {
                for(let tile of col) {
                    if (tile.hasPlant() && ShooterNormal.prototype.isPrototypeOf(tile.plant)) {
                        let shooter = tile.plant;
                        tile.plant = new ShooterRebou(tile.i, tile.j);
                        setTimeout(() => {
                            if (tile.hasPlant())
                                tile.plant = shooter;
                        }, 1000 * Proba.exponentialDriven(.8, 8, 15, 8) * config.buffsDuration);
                    }
                }
            }
        }
    },
    
    {   
        type:"MALUS",   
        content:"Vague de tamanoirs en approche !",
        event: 3,
        effect: () => {
            zombiesArmy.zombiesGroupSizeExpectedFactor = zombiesArmy.ZOMBIES_GROUP_SIZE_EXPECTED_FACTOR_NOMINAL *2;
            setTimeout(() => {
                zombiesArmy.zombiesGroupSizeExpectedFactor = zombiesArmy.ZOMBIES_GROUP_SIZE_EXPECTED_FACTOR_NOMINAL;
            }, 1000 * Proba.exponentialDriven(.7, 18, 30, 18));
        }
    },

    {   
        type:"MALUS",   
        content:"Destruction totale sur une ligne !",
        event: 4,
        effect: () => {
            const lines = tilemap.tiles[0].map((_, colIndex) => tilemap.tiles.map(row => row[colIndex]));
            for (let tile of lines[Proba.uniformInt(lines.length)])
                if (tile.hasPlant())
                    tile.removePlant();
        }
    }
];
