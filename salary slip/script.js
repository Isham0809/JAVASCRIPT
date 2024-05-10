function salarySlip(){
    let hra,da,pf,sa,gs,td,np,pt,hi

    const basicSalary = parseFloat(prompt("Enter deposit amount : "))

    if (basicSalary <= 10000) {
        hra = basicSalary * 0.20;
        da = basicSalary * 0.80;
        pf = basicSalary * 0.08;
      } else if (basicSalary > 10000 && basicSalary <= 20000) {
        hra = basicSalary * 0.25;
        da = basicSalary * 0.90;
        pf = basicSalary * 0.12;
      } else {
        hra = basicSalary * 0.30;
        da = basicSalary * 0.95;
        pf = null;
      }

      pt = 200;
      hi = 500;
      sa = 18732;

      gs = basicSalary + hra + da + sa
      td = hi + pt + pf
      np = basicSalary - td

      document.getElementById("basicSalary").innerText = `${basicSalary}`;
      document.getElementById("hra").innerText = `${hra}`;
      document.getElementById("da").innerText = `${da}`;
      document.getElementById("pf").innerText = `${pf || 'Not Applicable'}`;
      document.getElementById("pt").innerHTML = `${pt}`;
      document.getElementById("hi").innerText = `${hi}`;
      document.getElementById("sa").innerText = `${sa}`;
      document.getElementById("gs").innerText = `${gs}`;
      document.getElementById("td").innerText = `${td}`;
      document.getElementById("np").innerText = `${np}`;
}
salarySlip();