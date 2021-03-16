import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('BASKET'));

var initialState = data ? data:[];
// [
//     {
//         product : {
//             id:1,
//             name:'Dry Cleaning & Ironed Laundry',
//             image:'https://laundrapp.com/app/themes/laundrapp/resources/assets/images/dry-cleaning.svg',
//             description:'We dry clean or wash your items according to the care label. Clothes are ironed and returned on a hanger.',
//             type:'piece',
//             price:15,
//             rating:4 
//         },
//         quantity : 5
//     },
//     {
//         product : {
//             id:2,
//             name:'Iron Only',
//             image:'https://laundrapp.com/app/themes/laundrapp/resources/assets/images/ironing.svg',
//             description:'In select locations we offer an iron only service for shirts and blouses. You wash and dry, we iron!',
//             type:'8 kg',
//             price:20,
//             rating:4
//         },
//         quantity : 2
//     },
//     {
//         product : {
//             id:3,
//             name:'Wash, Tumble Dry & Fold',
//             image:'https://laundrapp.com/app/themes/laundrapp/resources/assets/images/wash.svg',
//             description:'We wash at 30C, tumble dry and then neatly fold your clothes. Perfect for everyday items.',
//             type:'piece',
//             price:10,
//             rating:5
//         },
//         quantity : 4
//     }
// ];

const basket = (state = initialState, action)=>{
    var{product,quantity} = action;
    var index=-1; //khong tim thay => index=-1
    switch (action.type) {
        case Types.ADD_TO_CART:
            index=findProductInBasket(state,product);
            //console.log(action);
            if (index !== -1) {
                state[index].quantity +=quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('BASKET',JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInBasket(state,product);
            if (index !== -1) {
                state.splice(index,1);//cut
            }
            localStorage.setItem('BASKET',JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInBasket(state,product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('BASKET',JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findProductInBasket= (basket,product)=>{
    var index =-1;
    if (basket.length>0) {
        for (var i = 0; i < basket.length; i++) {
            if(basket[i].product.id === product.id){
                index = i;
                break;
            }
            
        }
    }
    return index;
}

export default basket;