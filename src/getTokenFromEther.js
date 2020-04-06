import React from 'react';
import Free from './free';

class GetTokenFromEther extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            amountOfEther : '',
        }

        this.handleAmountOfEtherToTrade = this.handleAmountOfEtherToTrade.bind(this);
    }

    handleAmountOfEtherToTrade(events) {
        if (events.target.value == '' || events.target.value == undefined) {
            this.setState({
                amountOfEther : '',
            })
        }
        this.setState({
            amountOfEther : events.target.value,
        })
    }

    getFreeCoin(amountOfEther) {
        Free.checkAndGetTokenFromEther(amountOfEther);
    }

    render() {
        return (<div>
            <div className="col-2"></div>
            <div className="col-8">
                <div>
                    <div className="form-group">
                        <label htmlFor="amountOfEther">How much ether do you want to exchange ?</label>
                        <input id="amountOfEther" className="form-control" placeholder="Enter the amount of token you want to burn" type="number"
                        value={this.state.amountOfEther} onChange={this.handleAmountOfEtherToTrade}/>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={() => this.getFreeCoin(this.state.amountOfEther)}>Get Free Coin</button>
                </div>
            </div>
            <div className="col-2"></div>
        </div>);
    }

}

export default GetTokenFromEther;
