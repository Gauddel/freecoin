import React from 'react';
import EthereumConnexion from './ethereumConnexion';

class FindContract extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contractAddress: "",
            accountAddress: "",
        };
        
        this.handleContractAddressChange = this.handleContractAddressChange.bind(this);
        this.handleAccountAddressChange = this.handleAccountAddressChange.bind(this);
    }

    handleContractAddressChange(event) {
        this.setState({contractAddress: event.target.value});
    }

    handleAccountAddressChange(event) {
        this.setState({accountAddress: event.target.value});
    }

    findContract(accountAddress, contractAddress) {
        EthereumConnexion.CreateInstanceByGetting(window.web3.currentProvider, accountAddress, contractAddress);
    }

    render() {
        return (
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
                    <div className="form-group">
                        <label htmlFor="tokenAddress">Token Address</label>
                        <input className="form-control"
                         placeholder="Enter Free Tokens Address" id="tokenAddress" type="text" value={this.state.contractAddress}
                                  onChange={this.handleContractAddressChange}></input>
                    </div>
                    <button className="btn btn-primary" type="submit"
                     onClick={() => this.findContract(this.state.accountAddress, this.state.contractAddress)}>Find Free Tokens</button>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        );
    }
}

export default FindContract;
