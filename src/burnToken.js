import React from 'react';
import Free from './free';

class BurnToken extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            amountToBurn : '',
        }

        this.handleAmountOfTokenTOBurnChange = this.handleAmountOfTokenTOBurnChange.bind(this);
    }

    handleAmountOfTokenTOBurnChange(events) {
        if (events.target.value == '' || events.target.value == undefined) {
            this.setState({
                amountToBurn : '',
            })
        }
        this.setState({
            amountToBurn : events.target.value,
        })
    }

    burnToken(amountToBurn) {
        Free.checkAndBurnToken(amountToBurn);
    }

    render() {
        return (<div>
            <div className="col-2"></div>
            <div className="col-8">
                <div>
                    <div className="form-group">
                        <label htmlFor="amountToBurn">How much do you want to burn ?</label>
                        <input id="amountToBurn" className="form-control" placeholder="Enter the amount of token you want to burn" type="number"
                        value={this.state.amountToBurn} onChange={this.handleAmountOfTokenTOBurnChange}/>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={() => this.burnToken(this.state.amountToBurn)}>Burn</button>
                </div>
            </div>
            <div className="col-2"></div>
        </div>);
    }

}

export default BurnToken;