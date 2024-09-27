function lastProduct() {
    const array = [];
    let counter = 1;
    let isDone = 1;
    while (isDone === 1) {
        const obj = {ID : counter};
         obj.weight = Number(prompt("enter your weight (Kg)"));
        while(obj.weight <= 0 || isNaN(obj.weight)){
            obj.weight = Number(prompt("enter your weight in Kgs, as a positive number"));
        }
        console.log(obj.weight);
        
////////////////////////////////////////////
        obj.height =Number( prompt("enter your height (Meter)"));
        while(obj.height <= 0 || isNaN(obj.height)){
             obj.height = Number(prompt("enter your height in Meters, as a positive number"));
        }
        console.log(height);
//console.log(`height: ${height}, weight: ${weight}`);


//////////////////////////////////////
        function calculateBMI(weight,height){
            let bmi =  weight / Math.pow(height,2)  ;
            console.log(`your BMI is: ${bmi}`);
            return bmi;
        }
        obj.bmi = calculateBMI(obj.weight,obj.height);

////////////////////////////////////
        function getBMICategory(bmi){
            if (bmi < 18.5) return `your BMI is: ${bmi}, you are underweight`;
            else if (bmi >= 18.5 && bmi <= 24.9) return `your BMI is: ${bmi}, your weight is normal`;
            else if (bmi >= 25 && bmi <= 29.9) return `your BMI is: ${bmi}, your weight is overweight`;
            else if (bmi > 30) return `your BMI is: ${bmi}, your weight is obese`;
        }
        obj.category= getBMICategory(obj.bmi);

// console.log(getBMICategory());

/////////////////////////////////////
        array.push(obj);
        isDone = prompt("2= i done, 1= i want to continue");
        counter++;
    }
    console.log(array);
    return array;
}





