function checkCashRegister(price, cash, cid) {
  var change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// the cash drawer is put into the function - the func is a cash register
// the cash register calculates what change should be given, and what coins it should be given in, given what's in the drawer
// it returns the cash drawer with the change taken out of it

// we're going to need to loop through the cid, keeping a running total of the change owed, until this total reaches zero

// picture the function as a real cash register.
// 1) the function is the cash register
// 2) the cash drawer is a parameter along with price and change
// 3) calculate change owed - this will be price minus cash
// 4) look through cash drawer from highest to lowest, until we find a denomination which is smaller than change, remove it from cash draw, take this away from change owed and push it into a change to give in cash array. 
// 5) repeat this process until change owed is zero. 
// 6) take into account the other two possibilities (easy) with simple conditionals.
