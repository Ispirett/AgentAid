import React from 'react'
import Sidebar from './SideBar'

class Home  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInput:0,
            totalCommission: 0,
            totalPremium:0,
        };

        this.handleUserInput =  this.handleUserInput.bind(this)
    }

    handleUserInput (text) {

    this.setState({userInput:text.target.value});

 }

    productChoice = (products1) => {

        const products = {

            lifeEvo:0.70,
            pension:0.30,
            health:0.15,
            ipi:0.5,

        };


        switch(products1){
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


    commission = (product, userInput) => {
            // Commission
            let commission;
            commission = product * userInput * 12;
            return commission

    };

    premium = (product, userInput) => {
            // Commission
        let premium;
        premium = product * userInput * 12;
        return premium;
    };



     handleSummit = () => {
         const{ totalCommission, totalPremium,}=  this.state;

            let calculationsOptions = document.getElementById('calculation-option').selectedIndex;
            let options = document.getElementById('calculation-option').options;
            let selectedCalculation = options[calculationsOptions].value;
            let product = document.getElementById('calculations').selectedIndex;
            let productOptions = document.getElementById('calculations').options;
            let selectedProduct = productOptions[product].value;

            let userInput = document.getElementById('user-input').value;

            // get commission or premium
            let commission = this.commission(this.productChoice(selectedProduct), this.state.userInput);
            let premium =  this.premium(this.productChoice(selectedProduct), this.state.userInput);



            if(selectedCalculation === "commission"){
                // round the final value to two decimal places
                let finalCom = Math.round(commission * 100) / 100 ;
                this.setState({userInput: finalCom, totalCommission: Math.round(totalCommission + finalCom * 100) / 100});
            }

            else if(selectedCalculation === 'premium'){

                // round the final value to two decimal places
                let finalPre = Math.round(premium * 100) / 100;
                this.setState({userInput:finalPre, totalPremium:Math.round(totalPremium + finalPre * 100) /100});

            }
    };











    render() {
        const{ totalCommission, totalPremium, userInput}=  this.state;

        return (
            <div className="row">

                <div className="col-md-2">
                    <Sidebar menu="fas fa-cog"
                             menuName="Menu"
                             itemOne="fas fa-cog"
                             itemOneName='Life Evo'
                    />

                </div>

                <div className="col-md-10 ">
                    <div className="card">
                        <div className="card-header main-color">

                            Latest Calculations

                        </div>

                        <div className="card-body">
                            {/* Products Section*/}
                            <div className="row ">
                                <div className="col-md-3">
                                    <div className="card text-center ">
                                        <h4> Life</h4>
                                        <small>$ 20, 000</small>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card text-center">
                                        <h4> Life</h4>
                                        <small>$ 20, 000</small>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card text-center">
                                        <h4> Life</h4>
                                        <small>$ 20, 000</small>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card text-center">
                                        <h4> Life</h4>
                                        <small>$ 20, 000</small>
                                    </div>
                                </div>

                            </div>
                            <br/>
                            {/* Calculations Section*/}

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header main-color">
                                            Calculate commissions and premiums
                                        </div>

                                        <div className="card-body">

                                            <div className="form-group">
                                                <label htmlFor="calculation-option"> Select a Product</label>
                                                <select className="form-control" id="calculation-option">
                                                    <option value="commission">Commission</option>
                                                    <option value="premium">Premium</option>
                                                </select>
                                            </div>


                                            <div className="form-group">

                                                <label htmlFor="calculations"> Select a Product</label>
                                                <select className="form-control" id="calculations">
                                                    <option>Life Evo</option>
                                                    <option>Health</option>
                                                    <option>Pension</option>
                                                    <option>IpI</option>
                                                </select>

                                            </div>

                                            <br/>

                                            {/*User Input*/}
                                            <div className="form-group">
                                                <label htmlFor="user-input">Enter amount</label>

                                                <input type="number" id="user-input" className="form-control"
                                                        onChange={(text) => this.handleUserInput(text) }
                                                />
                                                <br/>

                                                {/*Display total */}
                                                <h3 className='text-center text-danger'>
                                                    Total
                                                    <i className="far fa-money-bill-alt text-success ">
                                                    </i>

                                                    <i className="money">
                                                        {userInput}
                                                    </i>
                                                </h3>
                                            </div>

                                            <div className="form-group">
                                                <input type="submit" id="submit"
                                                       className=" btn btn-success btn-block"
                                                        onClick={() => this.handleSummit()}
                                                />
                                            </div>

                                        </div>


                                    </div>

                                </div>
                                {/* History*/}
                                <div className="col-md-6">

                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="card text-center">
                                                <div className="card-header main-color">
                                                    Commission History
                                                </div>
                                                <div className="class-body">
                                                <pre className="text text-danger  ">
                                                    <i className="far fa-money-bill-alt text-success ">
                                                    </i>
                                                      <p className="badge">
                                                          {totalCommission}
                                                      </p>
                                                 </pre>


                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card text-center ">
                                                <div className="card-header main-color">
                                                    Premium History

                                                </div>
                                                <div className="class-body  ">
                                                <pre className="text text-danger  ">
                                                    <i className="far fa-money-bill-alt text-success ">
                                                    </i>
                                                      <p className="badge">
                                                          {totalPremium}
                                                      </p>
                                                </pre>




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default Home