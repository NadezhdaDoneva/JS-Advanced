function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avrgSalary = 0;
      let totalSalary = 0;
      let currentAvrgSalary= 0;
      let bestName ='';
      let output = {};

      for (const line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');
         
         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');
            salary = Number(salary);
            if(!output.hasOwnProperty(restaurantName)){
               output[restaurantName] = {};
            } else{
               output[restaurantName][name] = Number(salary);
            }
         }
         let entries = Object.entries(output);
         for (const entry of entries) {
            let key = entry[0];
            let values = Object.entries(entry[1]);

            for (const [name, salary] of values) {
               totalSalary+=Number(salary);
            }
            avrgSalary = totalSalary/(values.length);
            if(avrgSalary>currentAvrgSalary){
               currentAvrgSalary=avrgSalary;
               bestName=key;
               totalSalary=0;
            }
         }
         let result = Object.entries(output[bestName]).sort((a,b)=>b[1]-a[1]);
         let print = '';
         result.forEach(w=> print+=`Name: ${w[0]} With Salary: ${w[1]} `);
         document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currentAvrgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
         document.querySelector('#workers p').textContent = print;
      }
   }
}

/*["PizzaHut - Peter

500, George 300, Mark

800",

"TheLake - Bob 1300,

Joe 780, Jane 660"] */