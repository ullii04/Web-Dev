console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false


let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
console.log( 'The office is closed.' ); // it is the weekend
}

console.log( null || 2 && 3 || 4 );