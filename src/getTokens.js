import React from 'react';
import Free from './free';

class GetTokens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tokensOwner: "",
            spender: "",
            tokens: 0,
        }

        this.handleTokensOwnerChange = this.handleTokensOwnerChange.bind(this);
        this.handleSpenderChange = this.handleSpenderChange.bind(this);
        this.handleTokensChange = this.handleTokensChange.bind(this);
    }

    handleTokensOwnerChange(event) {
        this.setState({tokensOwner: event.target.value})
    }

    handleSpenderChange(event) {
        this.setState({spender: event.target.value})
    }

    handleTokensChange(event) {
        this.setState({tokens: event.target.value})
    }

    transferFrom(tokensOwner, spender, tokens) {
        Free.transferFrom(tokensOwner, spender, tokens);
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
                        <label htmlFor="tokenSpender">Token's Receiver Address</label>
                        <input className="form-control"
                         placeholder="Enter Token's Receiver Address" id="tokenSpender" type="text" value={this.state.spender}
                         onChange={this.handleSpenderChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="token">Number of Token</label>
                        <input className="form-control" id="token" type="number" value={this.state.tokens}
                        onChange={this.handleTokensChange}></input>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={() => this.transferFrom(this.state.tokensOwner,
                        this.state.spender,
                        this.state.tokens)}>Get Tokens</button>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        );
    }
}

export default GetTokens;