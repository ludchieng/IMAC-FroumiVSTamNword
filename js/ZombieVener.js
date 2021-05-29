class ZombieVener extends Zombie {

  constructor(i, j, health) {
    super(
      i, j,
      300 + 50 * zombiesArmy.zCounter.roundNumber(),
      30 + 5 * zombiesArmy.zCounter.roundNumber(),
      Proba.normalDriven(50, 2, 45, 55) / FRAMERATE * (.8+.15*zombiesArmy.zCounter.roundNumber()),
      TEX.TAMNWORD_VENER,
    );
  }

}
