import callAPI from './../Api/apiCaller';
callAPI('TbServices','GET').then(res=>{
    sessionStorage.setItem("AllSERVICES",JSON.stringify(res.data));
});
/**Connect API*/
var initialState = 
[
    // {
    //     id:1,
    //     name:'Dry Cleaning & Ironed Laundry',
    //     image:'https://laundrapp.com/app/themes/laundrapp/resources/assets/images/dry-cleaning.svg',
    //     description:'We dry clean or wash your items according to the care label. Clothes are ironed and returned on a hanger.',
    //     type:'piece',
    //     price:15,
    //     rating:4
    // },
    // {
    //     id:2,
    //     name:'Iron Only',
    //     image:'https://laundrapp.com/app/themes/laundrapp/resources/assets/images/ironing.svg',
    //     description:'In select locations we offer an iron only service for shirts and blouses. You wash and dry, we iron!',
    //     type:'8 kg',
    //     price:20,
    //     rating:4
    // },
    // {
    //     id:3,
    //     name:'Wash, Tumble Dry & Fold',
    //     image:'https://laundrapp.com/app/themes/laundrapp/resources/assets/images/wash.svg',
    //     description:'We wash at 30C, tumble dry and then neatly fold your clothes. Perfect for everyday items.',
    //     type:'piece',
    //     price:10,
    //     rating:5
    // },
    // {
    //     id:4,
    //     name:'Expert cleaning',
    //     image:'https://laundrapp.com/app/themes/laundrapp/resources/assets/images/expert-cleaning-teal.svg',
    //     description:'We will clean your items at our nearest cleaning partner facility, then return them to you in as little as 48 hours.',
    //     type:'8 kg',
    //     price:25,
    //     rating:5
    // }
];

var LoadAllAPI = sessionStorage.getItem("AllSERVICES");//=>string
var json = JSON.parse(LoadAllAPI); //string => object

    if (sessionStorage.getItem("AllSERVICES")) {
        initialState=json;   
    }
    
/**Redux */     
const products = (state = initialState, action)=>{
    /**Condition for store api in session*/
    if (sessionStorage.getItem("AllSERVICES")===null) {
        setTimeout(() => {
        //window.location.reload();   
        }, 200);
    }
    /**Redux type*/
    switch (action.type) {
        default: return [...state];
    }
}

export default products;