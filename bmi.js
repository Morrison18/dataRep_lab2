// a class describes the contents of the objects that belong to it 
class BMI {
    //  constructor initialises data in the class it is the first method called when creating an instance of the class
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    // this method calculates the bmi and it returns the result 
    calcBMI(){
        let bmi = this.weight/(this.height*2);
        return bmi;
    }
}
// creating an new object and passing values into it logging/printing it to the console the calcBMI is also called
let myBMI = new BMI(1.72, 80);
let calcedBMI = myBMI.calcBMI();
console.log(calcedBMI);


