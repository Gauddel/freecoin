import React from 'react';
import Free from './free';

class CheckBalance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0,
            address: ""
        };

        this.handleAddressChange = this.handleAddressChange.bind(this);
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    balanceOf(address) {
        Free.balanceOf(address)
        .then((balance) => {
            this.setState({balance: balance});
        })
    }

    render() {
        return (
            <div>
            <div className="col-2"></div>
            <div className="col-8">
                <div>
                    <div className="form-group">
                        <label htmlFor="address">Account to check</label>
                        <input className="form-control"
                         placeholder="Enter Address to check" id="address" type="text" value={this.state.address}
                                  onChange={this.handleAddressChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Balance : {this.state.balance}</label>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={() => this.balanceOf(this.state.address)}>Check Balance</button>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        )
    }
}

export default CheckBalance;