import { DayOfWeek } from './../src/scripts.js';
import { exportSpecifier, exportDefaultDeclaration } from '@babel/types';

describe('Calculator', () => {

  test('should create class with elements - year, month, day', () => {
    let newDayOfWeek = new DayOfWeek();
    expect(newDayOfWeek instanceof DayOfWeek).toEqual(true);

  });

  test('should create class with elements', () => {
    let newDayOfWeek = new DayOfWeek(2020, 2, 11);
    expect(newDayOfWeek.year).toEqual(2020);
    expect(newDayOfWeek.month).toEqual(2);
    expect(newDayOfWeek.day).toEqual(11);
  });

  test('should return a certain number that represents day', () => {
    let var1 = new DayOfWeek(2020, 2, 5);
    let var2 = new DayOfWeek(2020, 3, 1);
    let var3 = new DayOfWeek(2020, 4, 13);
    expect(var1.calculateDate()).toEqual(3);
    expect(var2.calculateDate()).toEqual(0);
    expect(var3.calculateDate()).toEqual(1);
  });

  test('should return string "This is not valid date to the invalid date' , () => {
    let var1 = new DayOfWeek("02020", 11, 6);
    let var2 = new DayOfWeek(2020, 13, 6);
    let var3 = new DayOfWeek(2020, 11, 33);
    let var4 = new DayOfWeek(2020, 3, "07")
    expect(var1.calculateDate()).toEqual("This is not valid date");
    expect(var2.calculateDate()).toEqual("This is not valid date");
    expect(var3.calculateDate()).toEqual("This is not valid date");
    expect(var4.calculateDate()).toEqual("This is not valid date");
  });
});