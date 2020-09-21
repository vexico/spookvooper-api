import svAPI from "./main.js";

/*
svAPI.eco.getBalance("02c977bb-0a6c-4eb2-bfca-5e9101025aaf", true).then(value => {
    console.log(`[test.js] ${value}`);
});
*/

svAPI.eco.getStockBuyPrice("VNB", true).then(value => {
    console.log(`[VNB] Current Stock Buy Price: ${value}`);
});

svAPI.group.getSvidFromName("Bowling Ball Industries").then(value => {
    console.log(`Bowling Ball Industries SVID: ${value}`);
});

svAPI.user.getUser("02c977bb-0a6c-4eb2-bfca-5e9101025aaf", true).then(value => {
    console.log(`[lonr] getUser.userName value: ${value}`);
});

svAPI.premade.getTotalXP("02c977bb-0a6c-4eb2-bfca-5e9101025aaf").then(value => {
    console.log(`Total XP for lonr: ${value}`);
});

svAPI.eco.getOwnerData("NEWS", true).then(value => {
    console.log(`[NEWS] Owner Data: ${value[0].ownerName}`);
});

svAPI.premade.getStockOwner("NEWS").then(value => {
    console.log(`[NEWS] Owner: ${value.name}`)
})

console.log(`Your Oauth2 URL: ${svAPI.auth.authorize("code", "AAAA-BBBBB-CCCCC-DDDD", "https://example.com/callback", "view", "succeeded")}`);

// Intended result should be whats on this page: https://api.spookvooper.com/eco/getbalance?svid=02c977bb-0a6c-4eb2-bfca-5e9101025aaf
