/*$(document).ready(() =>{

handleSummit()

});

const products = {

    lifeEvo:0.70,
    pension:0.30,
    health:0.15,
    ipi:0.5,

};



const productChoice = (products) => {

    switch(products){
        case 'Life Evo':
            return products.lifeEvo;

        case  'Health':
            return products.health;
        case 'Pension':
            return products.pension;
        case  'IpI':
            return products.ipi;
        default:
            return products.lifeEvo;
    }

};



const handleSummit = () => {
    submit.onclick = () => {
        let calculationsOptions = document.getElementById('calculation-option').selectedIndex;
        let options = document.getElementById('calculation-option').options;
        //alert(options[calculationsOptions].value);


        const product = document.getElementById('calculations').selectedIndex;
        let productOptions = document.getElementById('calculations').options;
        let selectedProduct = productOptions[product].value;

        let userInput = document.getElementById('user-input').value;
        alert(selectedProduct);
        alert(productChoice(selectedProduct));
        alert(commission(productChoice(selectedProduct), userInput))

    };




};





const commission = (product, userInput) =>{
    return product * userInput;

};

const premium = () => {


};


const handleClick = () =>{


}; */

