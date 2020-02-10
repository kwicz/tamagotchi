import { Tamagotchi } from '../src/tamagotchi.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('Should create new tamagotchi', () => {
  jest.useFakeTimers();
  let tamagotchi;

  beforeEach(function() {
    tamagotchi = new Tamagotchi("testmagotchi", 100, 100, 100);
    tamagotchi.calculateSleep();
    tamagotchi.calculateFood();
    tamagotchi.calculatePlay();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('name should have a value', () => {
    expect(tamagotchi.name).toEqual("testmagotchi");
  });

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

  test('should return sleep level', () => {
    jest.advanceTimersByTime(2700001);
    expect(tamagotchi.sleep).toEqual(10);
  });

  test('should return strong warning at sleep level 10', () => {
    jest.advanceTimersByTime(2700001);
    expect(tamagotchi.warning).toEqual("Warning: Your pet will pass out from exhaustion.");
  });
  
  test('should return sleep level', () => {
    jest.advanceTimersByTime(2100001);
    expect(tamagotchi.sleep).toEqual(30);
  });
  
  test('should return gentle warning at sleep level 30', () => {
    jest.advanceTimersByTime(2100001);
    expect(tamagotchi.warning).toEqual("Warning: Your pet needs to sleep soon.");
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
    expect(tamagotchi.warning).toEqual("Your tamagotchi passed out.");
  });


});
