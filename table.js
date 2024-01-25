
for(let num1 = 2; num1<=20; num1++){
    document.write(`Table of  ${num1}` + "<br>" + "<br>" );
        for(let i = 1; i <= 10; i++){
            document.write(`${num1} x ${i} = ${num1 * i}`+ "<br>" );
        }
    document.write("<br>");
}


let math = 87;
let physics = 56;
let english = 78;
let urdu = 90;
let chemistry = 45;
let islamiyat = 85;

let sum = math + physics + english + urdu + chemistry + islamiyat;
let avg = (sum/600)*100;

document.write("Total marks of student: " + sum + "<br>");
document.write("Percentage: " + avg);