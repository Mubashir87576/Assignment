let num = prompt("Enter a number less than 20:");

if (num < 20) {
 for (let i = num; i <= 20; i++) {
    document.write(`Table of ${i}` + "<br>" + "<br>");
    for (let j = 1; j <= 10; j++) {
      document.write(`${i} x ${j} = ${i * j}` + "<br>");
    }
    document.write("<br>" + "<br>");
 }
} else {
 document.write("Enter a correct number less than 20.");
}
