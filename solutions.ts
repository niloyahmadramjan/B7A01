// problem 1 : solution
const filterEvenNumbers = (numbersArray: number[]) => {
  let result: number[] = [];
  for (const number of numbersArray) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }
  return result;
};

// problem 2 : solution
const reverseString = (str: string) => {
  let result: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
};

// problem 3 : solution
type StringOrNumber = number | string;
const checkType = (value: StringOrNumber) => {
  return typeof value === "string" ? "String" : "Number";
};

// problem 4 : solution
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

// Problem 5: solution
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

// Problem 6: solution
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7: solution
const getIntersection = (array1: number[], array2: number[]) => {
  const result = array1.filter((e) => array2.includes(e));
  return result;
};
