function checkCashRegister(price, cash, cid) {
  var changeOwed = cash - price;
  console.log(`CHANGE OWED: ${changeOwed}`);
  var change = [];

  // create function that converts result to correct format.

  // create new array translating denomination to number
  var cidNumberDenoms = cid;
  cidNumberDenoms[0][0] = 0.01;
  cidNumberDenoms[1][0] = 0.05;
  cidNumberDenoms[2][0] = 0.1;
  cidNumberDenoms[3][0] = 0.25;
  cidNumberDenoms[4][0] = 1.0;
  cidNumberDenoms[5][0] = 5.0;
  cidNumberDenoms[6][0] = 10.0;
  cidNumberDenoms[7][0] = 20.0;
  cidNumberDenoms[8][0] = 100.0;
  // cidNumberDenoms
  //   [ [ 0.01, 1.01 ],
  //   [ 0.05, 2.05 ],
  //   [ 0.1, 3.1 ],
  //   [ 0.25, 4.25 ],
  //   [ 1, 90 ],
  //   [ 5, 55 ],
  //   [ 10, 20 ],
  //   [ 20, 60 ],
  //   [ 100, 100 ] ]

  // iterate forwards through the cash drawer
  for (var i = cidNumberDenoms.length - 1; i >= 0; i--) {
    // ok
    ///////////////////////////////////////////////////////////////////////////
    var denomination = cidNumberDenoms[i][0]; // vars are ok
    var cashInSlot = cidNumberDenoms[i][1];
    ///////////////////////////////////////////////////////////////////////////
    while (denomination <= changeOwed && cashInSlot > 0) {
      changeOwed -= denomination;
      changeOwed = changeOwed.toFixed(2);
      console.log(`CHANGEOWED IS NOW ${changeOwed}`);
      cashInSlot -= denomination;
      console.log(`CASHINSLOT IS NOW ${cashInSlot}`);
      change.push(denomination);
    }
  }
  console.log(
    `RESULT:: TOTAL ${change.reduce((a, b) => a + b)}, CHANGE ARRAY:${change}`
  );
}

// cidNumberDenoms[i][0] == = all denominations equal to or less than change owed

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// the cash drawer is put into the function - the func is a cash register
// the cash register calculates what change should be given, and what coins it should be given in, given what's in the drawer
// it returns the cash drawer with the change taken out of it

// we're going to need to loop through the cid, keeping a running total of the change owed, until this total reaches zero

// picture the function as a real cash register.
// 1) the function is the cash register
// 2) the cash drawer is a parameter along with price and change
// ✔ calculate change owed - this will be cash minus price
// 4) look through cash drawer from highest to lowest, until we find a denomination which is smaller than change, remove it from cash draw, take this away from change owed and push it into a change to give in cash array.

// ✔ translate denomination from string to number so it can be compared to changeOwed
// CONDITION
// ✔ if changeOwed is equal to or greater than denomination...
// ACTION
// ✔ decrement changeOwed by cidNumberDenoms[i][0]
// ✔ cidNumberDenoms[i][1] by cidNumberDenoms[i][0](to remove change from drawer)
// ✔ push that value into change array(to give back to customer)

// ✔ repeat this process until change owed is zero.
// 7) take into account the other two possibilities(easy) with simple conditionals.

// tip) console.log / check and record your values every step of the way to avoid silly errors

