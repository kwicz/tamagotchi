# _Tamagotchi_

#### _Care for a Tamagotchi creature by feeding it, playing with it, and making sure it gets enough sleep. | Feb. 2020_

#### By _**Alex Skreen and K. Wicz**_
[Play Now!]( https://kwicz.github.io/tamagotchi/)

## Description

_This boilerplate site has one index.html file that is already linked to the included bootstrap.css(4.4), styles.css, jQuery.js(3.4.1), and scripts.js._


There is a pre-built two input form with a submit button. There is also a simple jQuery function that will console.log when the submit button is clicked.

The .gitignore file is a template for mac osx but a link is provided to get a template for any operating system. 

[create a .gitignore template for your os here](https://www.gitignore.io/)

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. find the green 'Clone or Download' button and copy the link
2. open terminal and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. in terminal type '_git clone {link to repository}_ '

```sh
git clone Link-Here
```

4. navigate to the new folder that was created on your desk
5. select index.html
6. right click on the file and select _'open with'_
7. select your browser
8. enjoy this project


## Specs
### Behavior Driven Development Spec List

Behavoir | Input | Output
:---------:|:------:|:------:
| A user creates a new Tamagotchi | Name | New Tamagotchi |
| A user can name their Tamagotchi | Name | Tamagotchi named 'Name' |
| The program will set all Tamagotchi stats to 100 | Name | Sleep: 100, Food: 100, Play: 100 |
The program will reduce food by 1 point every 10 seconds | 1 minute | Food: 94 |
The user can increase their Tamagotchi's Food stat by 20 points by feeding it | Feeding after 5 minutes | Food: 90 |
The program will reduce play by 1 point every 20 seconds | 1 minute | Food: 97 |
The user can increase their Tamagotchi's Play stat by 20 points by playing with it | Playing after 10 minutes | Play: 90 |
The program will reduce sleep by 1 point every 30 seconds | 1 minute | Food: 98 |
The user can increase their Tamagotchi's Sleep stat by 100 points by feeding it | sleeps for 10 minutes | Sleep: 100 |
| The program will warn you once any of your stats go below 30 | Sleep: 29 | Warning: Your Tomagatichi needs to sleep |
| The program will give you a strong warning once any of your stats go below 10 | Food 9 | Warning: If you don't feed your Tomagatchi, it could perish |
| The program will put your Tomagatchi to sleep if it's Sleep stat hits 0 | Sleeps for 10 minutes | Sleep: 100 |
| The program will kill your Tomagatchi if it's Food stat hits 0 | Food: 0 | Your tomagatchi has died |
| The program will start to increase the rate at which your food and sleep go down by 2x if your Play stat hits 0 | Play: 0 | Food decreases 1 points ever 5 seconds, Sleep decreases 1 points every 15 seconds |


## Support 

_The software is provided as is. It might work as expected - or not. Just don't blame me._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)


### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Alex Skreen and K. Wicz_**

