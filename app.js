// const Buttons = document.querySelectorAll('.countryButton');
// const wIinfo = document.querySelectorAll('.w-info');
// Buttons.forEach(button =>{
//     button.addEventListener('click', ()=>{
//         wIinfo.addEventListener('click',()=>{
//             WInfo
//         })
//     })
// })


// synchronous
// function one(call_two){
//     console.log(" Step 1 complete. Please call step 2");
//     call_two();
// }

// function two(){
//     console.log(" Step 2 ");
// }

// one(two);
// two();


// #1 Place Order 2
// #2 Cut the fruit 2
// #3 Add water and ice 1
// #4 Start the machine 1
// #5 Select container 2
// #6 select toppings 3
// #7 Serve ice cream 2



let stocks = {
    Fruits: ['stawberry','grapes','banana','apple'],
    liquid: ['water','ice'],
    holder: ['cone','cup','stick'],
    toppings:['chocolate','peanuts']
};
let order = (Fruit_name,call_production)=>{
    // console.log("Order Placed, Please call production");
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    },2000);
};

let production = ()=>{
    // console.log("Order recieved, startting production");
    setTimeout(()=>{
        console.log("Production has started");
        setTimeout(()=>{
            console.log("Fruit has been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log('Machine has been started');
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} was selected`);
                    },2000);
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was added as toppings`);
                        setTimeout(() => {
                            console.log("Serve icecream");
                        }, 2000);
                    },3000);
                }, 1000);
            },1000)
        },2000)
    },0000);
};

order(0,production);

