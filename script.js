//your JS code here. If required.
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

function transformArray() {
  
  delay(3000, [1, 2, 3, 4])
    
    .then(array => {
      const evens = array.filter(num => num % 2 === 0);
      return delay(1000, evens); // 1-second delay
    })
    .then(filtered => {

      document.getElementById('output').textContent = filtered.toString();
      
      const doubled = filtered.map(num => num * 2);
      return delay(2000, doubled); // 2-second delay
    })
    .then(doubled => {
      
      document.getElementById('output').textContent = doubled.toString();
    });
}
transformArray();
