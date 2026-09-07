//synchronous & asynchronous approach
//callbacks -> impt*

// js -> single threaded
// ek kam ek baar me kar payegi
// ess approach ko kehte hai 'synchronous approach', jaise ki pehla kaam hai print krna hai phr facebook se deta lana hai nd phr print krna phr print krna toh jab tak facebook se data layega tab tak dusra kaam ruka rahega 
// asynchronous approach -> jo code tym lega to usko side me dal do nd baki kaam kro jab wo deta aayega to usko print kr dena 

// callbacks -> ek fun jo turant nahi chlega ye chlega jab aapka koe kaam complete hoga, jaise ki user ka data lao insta se toh jab data aayega tab chlega callback

setTimeout(function (){
    console.log('hey');
}, 2000);  //2000 milisec / 2sec ke baad fun chla dega nd hey print hoga 2sec ke bad


//callback function example
function abcd (fn){ //abcd receives a function as an argument, fn is a parameter that will contain a function.
    fn();            //fn() executes that function
}
abcd(function(){
    console.log('hey');
})

// //explanation -> You pass an anonymous function to abcd
abcd(function() {
    console.log('hey');
});

// //So internally:
fn = function() {
    console.log('hey');
};


// callback new example
function abcd (fn){
    fn(function(fn2){
        fn2(function(fn4){
            fn4();
        });
    });
}

abcd(function(fn1){
    fn1(function(fn3){
        fn3(function(){
            console.log("heyy i'm good");
        });
    });
})

//callback another example
function abcde(fn){
    fn(function(fn2){
        fn2(function(fn4){
            fn4(function(fn6){
                fn6();
            });
        });
    });
}

abcde(function(fn1){
    fn1(function(fn3){
        fn3(function(fn5){
            fn5(function(){
                console.log("hyy it's a callback function")
            })
        });
    });
})


// real example

//amitSeDetailsLaoo(address, cb)  -> ek ke bad ek process hoga 
//dukaanKoDhundhoo(details, cb)
//sammanLelo(sammanList, cb)
//gharAaajao(address, cb)
function amitSeDetailLaoo(address, cb){
    console.log("fetching details...")
    //yaha pe kuchh kuchh logic hoga address lane ke liye jab address aa jyegi tab hame uss address ka kya krna hai ye cb decide kregi
    setTimeout(() => {
        cb({lat:234.34, lng:34.56});  //cb ko call kiya ja raha hai aur details argument ke roop mein di ja rahi hain.
    }, 3000);
}

amitSeDetailLaoo("rohini sec-234 e-block", function(details){   // jaise hi address aa jyegi ya address wali logic chal jyegi callback(cb) hoga nd function chal jyega
    console.log(details);  // details ka mtlb hai cb details hold kr raha hai
});