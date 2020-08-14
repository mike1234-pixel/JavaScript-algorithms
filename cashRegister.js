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

  // iterate backwards through the cash drawer
  for (var i = cidNumberDenoms.length - 1; i >= 0; i--) {
    // ok
    ///////////////////////////////////////////////////////////////////////////
    var denomination = cidNumberDenoms[i][0]; // vars are ok
    var cashInSlot = cidNumberDenoms[i][1];
    ///////////////////////////////////////////////////////////////////////////
    while (denomination <= changeOwed && cashInSlot > 0) {
      changeOwed -= denomination;
      changeOwed = changeOwed.toFixed(2);
      cashInSlot -= denomination;
      change.push(denomination);
    }
  }
  console.log(
    `RESULT:: TOTAL ${change
      .reduce((a, b) => a + b)
      .toFixed(2)}, CHANGE ARRAY:${change}`
  );
  var formattedResult = formatResult(change);
  console.log({ status: "OPEN", change: formattedResult });
  return { status: "OPEN", change: formattedResult };
}

function formatResult(change) {
  // change = [20,20,20,10,10,5,5,5,1,0.25,0.25,0.1,0.1,0.01,0.01,0.01,0.01]

  var twenty = 0;
  var ten = 0;
  var five = 0;
  var one = 0;
  var quarter = 0;
  var dime = 0;
  var nickel = 0;
  var penny = 0;

  for (var i = 0; i < change.length; i++) {
    if (change[i] === 20) {
      twenty += change[i];
    } else if (change[i] === 10) {
      ten += change[i];
    } else if (change[i] === 5) {
      five += change[i];
    } else if (change[i] === 1) {
      one += change[i];
    } else if (change[i] === 0.25) {
      quarter += change[i];
    } else if (change[i] === 0.1) {
      dime += change[i];
    } else if (change[i] === 0.05) {
      nickel += change[i];
    } else if (change[i] === 0.01) {
      penny += change[i];
    }
  }
  var result1 = [
    ["TWENTY", twenty],
    ["TEN", ten],
    ["FIVE", five],
    ["ONE", one],
    ["QUARTER", quarter],
    ["DIME", dime],
    ["NICKEL", nickel],
    ["PENNY", penny],
  ];

  var result2 = [];
  // filter - only include results that are not 0 into final result
  for (var i = 0; i < result1.length; i++) {
    if (result1[i][1] !== 0) {
      result2.push(result1[i]);
    }
  }

  return result2;
}

// invoke

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


