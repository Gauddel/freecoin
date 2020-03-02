import React from 'react';
import EthereumConnexion from './ethereumConnexion';

class CreateContract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountAddress: "",
        };

        this.handleAccountAddressChange = this.handleAccountAddressChange.bind(this);
    }

    handleAccountAddressChange(event) {
        this.setState({accountAddress: event.target.value});
    }

    createContract(address) {
        EthereumConnexion.CreateInstanceByDeploying(address, window.web3.currentProvider);
    }

    render() {
        return(
            <div>
            <div className="col-2"></div>
            <div className="col-8">
                <div>
                    <div className="form-group">
                        <label htmlFor="accountAddress">Your Account Address</label>
                        <input className="form-control"
                         placeholder="Enter Your Account Address" id="accountAddress" type="text" value={this.state.accountAddress}
                                  onChange={this.handleAccountAddressChange}></input>
                    </div>
                    <button className="btn btn-primary" type="submit"
                     onClick={() => this.createContract(this.state.accountAddress)}>Create Tokens</button>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        );
    }
}

export default CreateContract;