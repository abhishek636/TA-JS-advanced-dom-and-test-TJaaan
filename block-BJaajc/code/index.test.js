const {
    getFullName,
    isPalindrome,
    getCircumference,
    getArea,
  } = require("./index.js");
  
  //Full Name
  test("'Arya' and 'Stark' to equal Arya Stark", () => {
    expect(getFullName("Arya", "Stark")).toBe("Arya Stark");
  });
  
  test("'John' and 'Snow' to equal John Snow", () => {
    expect(getFullName("John", "Snow")).toBe("John Snow");
  });
  
  test("'Abhishek' and 'Bhatt' to equal Abhishek Bhatt", () => {
    expect(getFullName("Abhishek", "Bhatt")).toBe("Abhishek Bhatt");
  });
  
  test("'Arya' and 'Stark' to not equal John Snow", () => {
    expect(getFullName("Arya", "Stark")).not.toBe("John Snow");
  });
  
  test("'Jack' and 'Toe' to not equal John Snow", () => {
    expect(getFullName("Jack", "Toe")).not.toBe("John Snow");
  });
  
  test("'Jill' and 'Peter' to not equal Peter Parker", () => {
    expect(getFullName("Jill", "Peter")).not.toBe("Peter Parker");
  });
  
  //Palindrom
  test("'racecar' to equal true", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });
  
  test("'madam' to equal true", () => {
    expect(isPalindrome("madam")).toBe(true);
  });
  
  test("'refer' to not equal false", () => {
    expect(isPalindrome("refer")).not.toBe(false);
  });
  
  test("'demo' to equal false", () => {
    expect(isPalindrome("demo")).toBe(false);
  });
  
  test("'racecar' to not equal false", () => {
    expect(isPalindrome("racecar")).not.toBe(false);
  });
  
  test("'madam' to not equal false", () => {
    expect(isPalindrome("madam")).not.toBe(false);
  });
  
  //Circumference
  test("3 to equal 'The circumference is 18.857142857142858'", () => {
    expect(getCircumference(3)).toBe("The circumference is 18.857142857142858");
  });
  
  test("10 to equal 'The circumference is 62.857142857142854'", () => {
    expect(getCircumference(10)).toBe("The circumference is 62.857142857142854");
  });
  
  test("20 to equal 'The circumference is 125.71428571428571'", () => {
    expect(getCircumference(20)).toBe("The circumference is 125.71428571428571");
  });
  
  test("8 to not equal 'The circumference is 18.857142857142858'", () => {
    expect(getCircumference(8)).not.toBe(
      "The circumference is 18.857142857142858"
    );
  });
  
  test("16 to not equal 'The circumference is 18.857142857142858'", () => {
    expect(getCircumference(16)).not.toBe("18.857142857142858");
  });
  
  test("25 to not equal 'The circumference is 18.857142857142858'", () => {
    expect(getCircumference(25)).not.toBe(
      "The circumference is 18.857142857142858"
    );
  });
  
  //Area
  test("10 to equal 'The area is 314.2857142857143'", () => {
    expect(getArea(10)).toBe("The area is 314.2857142857143");
  });
  
  test("5 to equal 'The area is 78.57142857142857'", () => {
    expect(getArea(5)).toBe("The area is 78.57142857142857");
  });
  
  test("20 to equal 'The area is 1257.142857142857'", () => {
    expect(getArea(20)).toBe("The area is 1257.142857142857");
  });
  
  test("5 to not equal 'The area is 314.2857142857143'", () => {
    expect(getArea(5)).not.toBe("314.2857142857143");
  });
  
  test("5 to not equal 'The area is 314.2857142857143'", () => {
    expect(getArea(5)).not.toBe("The area is 314.2857142857143");
  });
  
  test("18 to not equal 'The area is 1,018'", () => {
    expect(getArea(18)).not.toBe("The area is 1,018");
  });