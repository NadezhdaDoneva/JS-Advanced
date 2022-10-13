function solve(arr, criteria){
    class Tickets {
        constructor(destination, price, status) {
          this.destination = destination;
          this.price = Number(price);
          this.status = status;
        }
      }
      const result = [];
      arr.forEach(d => result.push(new Tickets(...d.split('|'))));
      const sortNumbers = ((a, b) => a - b);
  const sortStrings = ((a, b) => a[criteria].localeCompare(b[criteria]));

  return criteria === 'price' ? result.sort(sortNumbers) : result.sort(sortStrings);
}
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')