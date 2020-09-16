import svAPI from "./main.js";

/*
svAPI.eco.getBalance("02c977bb-0a6c-4eb2-bfca-5e9101025aaf", true).then(value => {
    console.log(`[test.js] ${value}`);
});
*/

svAPI.eco.getStockBuyPrice("VNB", true).then(value => {
    console.log(value);
});

svAPI.group.getSvidFromName("Bowling Ball Industries").then(value => {
    console.log(value);
});

svAPI.user.getUser("02c977bb-0a6c-4eb2-bfca-5e9101025aaf", true).then(value => {
    console.log(value.userName);
});

svAPI.premade.getTotalXP("02c977bb-0a6c-4eb2-bfca-5e9101025aaf").then(value => {
    console.log(value);
});

// Intended result should be whats on this page: https://api.spookvooper.com/eco/getbalance?svid=02c977bb-0a6c-4eb2-bfca-5e9101025aaf
