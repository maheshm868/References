var info = "this file will contain normal es6 functionalities that are widely used by me and kept as an archive for reference";

//-----------------fetch method get-------------------//
let response = await fetch(url,{ method: "get", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
let items = await response.json();

//--------------To check if an item is empty or not-----------------//
const IsEmpty = (param) => param === undefined || param === null || param === '';

//-----------------To get unique array items----------//
const getUnique = (value,index,self) => self.indexOf(value) === index;
const unique = (arr) => arr.filter(getUnique);
// usage
const tArr = [2,2,3,4,5,6,6,6,7,9];
const uArr = unique(tArr);

//--------To get unique objects based on single property------------//
