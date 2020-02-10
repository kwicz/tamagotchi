
// Create base values for user
export class Tamagotchi {
  constructor(name, food, play, sleep) {
    this.name = name;
    this.food = food;
    this.play = play;
    this.sleep = sleep;
    this.sleeping = false;
    this.alive = true;
    this.warning = "";
  }

  calculateSleep() {
    setInterval(() => {
      this.sleep--;
      if (this.sleep === 30) {
        this.warning = "Warning: Your pet needs to sleep soon."
      } else if (this.sleep === 10) {
        this.warning = "Warning: Your pet will pass out from exhaustion."
      } else if (this.sleep === 0) {
        this.sleeping = true;   
        this.warning = "Your tamagotchi passed out."
      }
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