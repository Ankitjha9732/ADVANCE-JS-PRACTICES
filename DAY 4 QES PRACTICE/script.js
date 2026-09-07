//EX1
//Ek function banao `afterDelay`

//Requirements:
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

//Use case:
// > “2 second baad ek kaam karna hai”

//Goal:
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

function afterDelay(time, cb) {
    //logic
    setTimeout(() => {
        cb();
    }, time);
}

afterDelay(2000, function () {
    console.log("cb executed");
});



// EX2
// Ek function banao `getUser`

//Requirements:
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

//Then:
// - Callback ke andar ek aur function call karo `getUserPosts`

//`getUserPosts` requirements:
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// Final output:
// - User ka `username` print ho
// - Fir uske `posts` print ho

// Goal:
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

function getUser(username, cb){   // pehle user ki detials find kro, user ka data aayega to callback run hoga
    console.log("finding user detail...");
    setTimeout(() => {
        cb({id:124, username:"jhasab"});
    }, 1000);
}
function getUserPost(id, cb){  //phr us detail se uski post ko dhundho id ka use kke
    console.log("getting user post...")
    setTimeout(() => {
        cb(["hello", "hyy", "jane do", "mat kroo"]);
    }, 2000);
}

getUser("jhasab", function(data){  //pehle user ki detail call hoga
    getUserPost(data.id, function(allpost){ // detail aane ke baad usko use krke post find krenge
        console.log(data.username, allpost);  //phr post display hoga
    });
});



//EX3
// Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// Flow:
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// Goal:
// - Callback nesting ko feel karna
// - Yehi structure baad mein 'callback hell' banta hai

function loginUser(user, cb){
    console.log("logining user...");
    setTimeout(() => {
        cb({id:23, username:"jha"})
    }, 1000);
}
function fetchPermissions(id, cb){
    console.log("fetching permission...")
    setTimeout(() => {
        cb(["read","write","update"]);
    },2000);
}
function loadDashboard(permissions, cb){
    console.log("Loading dashboard...")
    setTimeout(() => {
        cb();
    }, 2000);
}

loginUser("jha", function(data){
    fetchPermissions(data.id, function(permissions){
        loadDashboard(permissions, function(){
            console.log("✅ Dashboard loaded");
        });
    });
});


//EX4

// Scenario: Product Search

// Ek function banao getProduct.

// Requirements:
// getProduct productId lega
// 1 second ke baad callback ko ek product object de:
// id
// name
// price

// Phir:
// Ek function banao checkStock.

// productId lega
// 1 second ke baad callback ko stock number de

// Phir:
// Ek function banao placeOrder.

// product lega
// stock lega
// 1 second ke baad callback ko "Order placed successfully" de

// Final output:
// Console mein kuch is type ka output aana chahiye:

// Product: Laptop
// Stock: 5
// Order placed successfully

function getProduct(productId, cb){
    console.log("product searching...");
    setTimeout(() => {
        cb({id:2324, name:"HP omnibook 5", price:70000});
    },2000);
}
function checkStock(id, cb){
    console.log("checking stock...");
    setTimeout(() => {
        cb({stock:5});
    }, 2000);
}
function placeOrder(product, stock, cb){
    console.log("placing order...");
    setTimeout(() => {
        cb();
    }, 2000);
}
getProduct(2324, function(product){
    checkStock(product.id, function(stock){
        placeOrder(product,stock, function(){
            console.log("product:", product.name);
            console.log("stock:", stock.stock);
            console.log("order placed successfully✅");
        });
    });
});