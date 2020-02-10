
// Create base values for user
export class Tamagotchi {
  constructor(name, food, play, sleep) {
    this.name = name;
    this.food = food;
    this.play = play;
    this.sleep = sleep;
  }

  calculateSleep() {
    setInterval(() => {
      this.sleep--;
    }, 30000);
  }

  calculateFood() {
    setInterval(() => {
      this.food--;
    }, 10000);
  }

  calculatePlay() {
    setInterval(() => {
      this.play--;
    }, 20000);
  }
}