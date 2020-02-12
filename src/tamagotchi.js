
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
    this.sleepTimer = 300;
    this.foodTimer = 100;
    this.playTimer = 200;
  }

  calculateSleep() {
    if (this.sleeping === false) {
      setInterval(() => {
        if (this.sleep > 0) {
          this.sleep--;
        }
        if (this.sleep === 30) {
          this.sleepWarning = "Warning: Your pet needs to sleep soon.";
        } else if (this.sleep === 10) {
          this.sleepWarning = "Warning: Your pet will pass out from exhaustion.";
        } else if (this.sleep === 0) {
          this.sleepTamagotchi();
          this.sleepWarning = "Your tamagotchi passed out.";
        }
      }, this.sleepTimer);
    }
  }

  calculateFood() {
    setInterval(() => {
      if (this.food > 0) {
        this.food--;
      }
      if (this.food > 30) {
        this.foodWarning = "";
      } else if (this.food === 30) {
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
      if (this.play > 0) {
        this.play--;
      }
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
      this.sleep = 100;
    }, 5000);
    this.sleepWarning = "";
    return "all rested!";
  }

  feedTamagotchi() {
    if (this.sleeping === false) {
      this.food = 100;
      this.foodWarning = "";
      return "All full!";
    }
  }

  playTamagotchi() {
    if (this.sleeping === false) {
      this.play = 100;
      this.playWarning = "";
      this.sleepTimer = this.sleepTimer * 2;
      this.foodTimer = this.foodTimer * 2;
      return "All tuckered out!";
    }
  }
}