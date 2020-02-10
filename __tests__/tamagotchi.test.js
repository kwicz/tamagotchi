import { Tamagotchi } from '../src/tamagotchi.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('Should create new tamagotchi', () => {
  jest.useFakeTimers();
  let tamagotchi;

  beforeEach(function () {
    tamagotchi = new Tamagotchi("testmagotchi", 100, 100, 100);
    tamagotchi.calculateSleep();
    tamagotchi.calculateFood();
    tamagotchi.calculatePlay();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  // make sure constuctor works

  test('name should have a value', () => {
    expect(tamagotchi.name).toEqual("testmagotchi");
  });

  // makes sure timers work

  test('should have a sleep level of 99 after 30001 milliseconds', () => {
    jest.advanceTimersByTime(30001);
    expect(tamagotchi.sleep).toEqual(99);
  });

  test('should have a food level of 99 after 10001 milliseconds', () => {
    jest.advanceTimersByTime(10001);
    expect(tamagotchi.food).toEqual(99);
  });

  test('should have a play level of 99 after 20001 milliseconds', () => {
    jest.advanceTimersByTime(20001);
    expect(tamagotchi.play).toEqual(99);
  });

//  calculates sleep tests

  test('should return sleep level', () => {
    jest.advanceTimersByTime(2700001);
    expect(tamagotchi.sleep).toEqual(10);
  });

  test('should return strong warning at sleep level 10', () => {
    jest.advanceTimersByTime(2700001);
    expect(tamagotchi.sleepWarning).toEqual("Warning: Your pet will pass out from exhaustion.");
  });

  test('should return sleep level', () => {
    jest.advanceTimersByTime(2100001);
    expect(tamagotchi.sleep).toEqual(30);
  });

  test('should return gentle warning at sleep level 30', () => {
    jest.advanceTimersByTime(2100001);
    expect(tamagotchi.sleepWarning).toEqual("Warning: Your pet needs to sleep soon.");
  });

  test('should return sleep level', () => {
    jest.advanceTimersByTime(3000001);
    expect(tamagotchi.sleep).toEqual(0);
  });

  test('should return sleeping as true when tamagotchi passes out', () => {
    jest.advanceTimersByTime(3000001);
    expect(tamagotchi.sleeping).toEqual(true);
  });

  test('should return sleeping as true when tamagotchi passes out', () => {
    jest.advanceTimersByTime(3000001);
    expect(tamagotchi.sleepWarning).toEqual("Your tamagotchi passed out.");
  });

  // calculate food tests

  test('should return eat level', () => {
    jest.advanceTimersByTime(700001);
    expect(tamagotchi.food).toEqual(30);
  });

  test('should return eat level', () => {
    jest.advanceTimersByTime(700001);
    expect(tamagotchi.foodWarning).toEqual("Warning: Your pet needs to eat soon.");
  });

  test('should return eat level', () => {
    jest.advanceTimersByTime(900001);
    expect(tamagotchi.food).toEqual(10);
  });

  test('should return eat level', () => {
    jest.advanceTimersByTime(900001);
    expect(tamagotchi.foodWarning).toEqual("Warning: Your pet will die from hunger soon.");
  });

  test('should return food level 0', () => {
    jest.advanceTimersByTime(1000001);
    expect(tamagotchi.food).toEqual(0);
  });

  test('should return alive as false when tamagotchi dies of hunger', () => {
    jest.advanceTimersByTime(1000001);
    expect(tamagotchi.alive).toEqual(false);
  });

  test('should return warning when tamagotchi died', () => {
    jest.advanceTimersByTime(1000001);
    expect(tamagotchi.foodWarning).toEqual("Your tamagotchi has died.");
  });

  // calculate play tests

  test('should return play level', () => {
    jest.advanceTimersByTime(1400001);
    expect(tamagotchi.play).toEqual(30);
  });

  test('should return eat level', () => {
    jest.advanceTimersByTime(1400001);
    expect(tamagotchi.playWarning).toEqual("Warning: Your pet needs to play soon.");
  });

  test('should return play level', () => {
    jest.advanceTimersByTime(1800001);
    expect(tamagotchi.play).toEqual(10);
  });

  test('should return eat level', () => {
    jest.advanceTimersByTime(1800001);
    expect(tamagotchi.playWarning).toEqual("Warning: Your pet will die from living such a lame life");
  });

  test('should return play level', () => {
    jest.advanceTimersByTime(2000001);
    expect(tamagotchi.play).toEqual(0);
  });

  test('should return eat level', () => {
    jest.advanceTimersByTime(2000001);
    expect(tamagotchi.playWarning).toEqual("Your tamagotchi has critically bored. It will now lose food and sleep points at twice the normal rate");
  });

  test("Should reset sleep stat to 100", () => {
    jest.advanceTimersByTime(600001);
    expect(tamagotchi.sleepTamagotchi()).toEqual("all rested!")
  });

  test("this should reset food stat to 100", () => {
    expect(tamagotchi.feedTamagotchi()).toEqual("All full!")

  });


});
