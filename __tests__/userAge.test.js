import { UserAge } from '../src/userAge.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('UserAge', () => {

  test('age should have a value', () => {
    let userAge = new UserAge(20, 30);
    expect(userAge.age).toEqual(20);
  });

  test('cryo years should have a value', () => {
    let userAge = new UserAge(20, 30);
    expect(userAge.cryoYears).toEqual(30);
  });

  test('should return calculated total life expectancy', () => {
    let userAge = new UserAge(20, 30);
    expect(userAge.totalExp).toEqual(90);
  });

  test('should return users bonus years', () => {
    let userAge = new UserAge(90, 0);
    expect(userAge.bonusYears).toEqual(10);
  });

  test('should return calculations for Mercury', () => {
    let userAge = new UserAge(20, 30);
    expect(userAge.mercurianCalculator()).toEqual(["83.33", "375.00"]);
  });

  test('should return calculations for Mercury with bonus years', () => {
    let userAge = new UserAge(90, 0);
    expect(userAge.mercurianCalculator()).toEqual(["375.00", "-41.67", 41.67]);
  });

  test('should return calculations for Venus', () => {
    let userAge = new UserAge(20, 30);
    expect(userAge.venutianCalculator()).toEqual(["32.26", "145.16"]);
  });

  test('should return calculations for Venus with bonus years', () => {
    let userAge = new UserAge(90, 0);
    expect(userAge.venutianCalculator()).toEqual(["145.16", "-16.13", 16.13]);
  });

  test('should return calculations for Mars', () => {
    let userAge = new UserAge(20, 30);
    expect(userAge.martianCalculator()).toEqual(["10.64", "47.87"]);
  });

  test('should return calculations for Mars with bonus years', () => {
    let userAge = new UserAge(90, 0);
    expect(userAge.martianCalculator()).toEqual(["47.87", "-5.32", 5.32]);
  });

  test('should return calculations for Jupiter', () => {
    let userAge = new UserAge(20, 30);
    expect(userAge.jovianCalculator()).toEqual(["1.69", "7.59"]);
  });

  test('should return calculations for Jupiter with bonus years', () => {
    let userAge = new UserAge(90, 0);
    expect(userAge.jovianCalculator()).toEqual(["7.59", "-0.84", .84]);
  });

});
