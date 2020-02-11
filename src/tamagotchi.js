
// Create base values for user
export class Tamagotchi {
  constructor(name, celebrity) {
    this.name = name;
    this.celebrity = celebrity;
    this.food = 100;
    this.play = 100;
    this.sleep = 100;
    this.sleeping = false;
    this.alive = true;
    this.sleepWarning = "";
    this.foodWarning = "";
    this.playWarning = "";
    this.sleepTimer = 30000;
    this.foodTimer = 10000;
    this.playTimer = 20000;
  }

  calculateSleep() {
    if (this.sleeping === false) {
      setInterval(() => {
        this.sleep--;
        if (this.sleep === 30) {
          this.sleepWarning = "Warning: Your pet needs to sleep soon.";
        } else if (this.sleep === 10) {
          this.sleepWarning = "Warning: Your pet will pass out from exhaustion.";
        } else if (this.sleep === 0) {
          this.sleeping = true;
          this.sleepWarning = "Your tamagotchi passed out.";
        }
      }, this.sleepTimer);
    }
  }

  calculateFood() {
    setInterval(() => {
      this.food--;
      if (this.food === 30) {
        this.foodWarning = "Warning: Your pet needs to eat soon.";
      } else if (this.food === 10) {
        this.foodWarning = "Warning: Your pet will die from hunger soon.";
      } else if (this.food === 0) {
        this.foodWarning = "Your tamagotchi has died.";
        this.alive = false;
      }
    }, this.foodTimer);
  }

  calculatePlay() {
    setInterval(() => {
      this.play--;
      if (this.play === 30) {
        this.playWarning = "Warning: Your pet needs to play soon.";
      } else if (this.play === 10) {
        this.playWarning = "Warning: Your pet will die from living such a lame life";
      } else if (this.play === 0) {
        this.playWarning = "Your tamagotchi has critically bored. It will now lose food and sleep points at twice the normal rate";
        this.sleepTimer = this.sleepTimer / 2;
        this.foodTimer = this.foodTimer / 2;
      }
    }, this.playTimer);
  }

  sleepTamagotchi() {
    this.sleeping = true;
    setTimeout(() => {
      this.sleeping = false;
    }, 600000);
    this.sleep = 100;
    return "all rested!";
  }

  feedTamagotchi() {
    this.feed = 100;
    return "All full!";
  }

  playTamagotchi() {
    this.play = 100;
    this.sleepTimer = this.sleepTimer * 2;
    this.foodTimer = this.foodTimer * 2;
    return "All tuckered out!";
  }
}