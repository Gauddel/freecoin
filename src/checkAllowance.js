import React from 'react';
import Free from './free';

class CheckAllowance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allowance: 0,
            tokensOwner: "",
            spender: "",
        }

        this.handleTokensOwnerChange = this.handleTokensOwnerChange.bind(this);
        this.handleSpenderChange = this.handleSpenderChange.bind(this);
    }

    handleSpenderChange(event) {
        this.setState({spender: event.target.value});
    }

    handleTokensOwnerChange(event) {
        this.setState({tokensOwner: event.target.value});
    }

    allowance(tokenOwner, spender) {
        Free.allowance(tokenOwner, spender)
        .then((allowance) => {
            this.setState({allowance: allowance});
        })
    }

    render() {
        return (
            <div>
            <div className="col-2"></div>
            <div className="col-8">
                <div>
                    <div className="form-group">
                        <label htmlFor="tokenOwner">Token's Owner Address</label>
                        <input className="form-control"
                         placeholder="Enter Token's Owner Address" id="tokenOwner" type="text"
                         value={this.state.tokensOwner} onChange={this.handleTokensOwnerChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tokenSpender">Token's Spender Address</label>
                        <input className="form-control"
                         placeholder="Enter Token's Receiver Address" id="tokenSpender" type="text" value={this.state.spender}
                         onChange={this.handleSpenderChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Allowance : {this.state.allowance}</label>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={() => this.allowance(this.state.tokensOwner,
                        this.state.spender)}>Check Allowance</button>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        );
    }
}

export default CheckAllowance;