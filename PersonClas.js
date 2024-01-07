//Write a person Class to hold all the Details?

class person{
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
     }
    getage(){
        return `My age is ${this.age}`
    }
    set changecourse(Course){
        this.course = Course;
    }
}

 var person1 = new person("sam", "25", "Aeronautical");
person1.changecourse = "IT";
console.log(person1)
console.log(person1.getage())
console.log(person1.course)
