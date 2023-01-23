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
function one(call_two){
    console.log(" Step 1 complete. Please call step 2");
    call_two();
}

function two(){
    console.log(" Step 2 ");
}

one(two);
// two();
