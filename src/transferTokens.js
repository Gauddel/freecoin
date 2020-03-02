import React from 'react';
import Free from './free';

class TransferTokens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tokensOwner: "",
            to: "",
            tokens: 0,
        }

        this.handleTokensOwnerChange = this.handleTokensOwnerChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleTokensChange = this.handleTokensChange.bind(this);
    }

    handleTokensOwnerChange(event) {
        this.setState({tokensOwner: event.target.value})
    }

    handleToChange(event) {
        this.setState({to: event.target.value})
    }

    handleTokensChange(event) {
        this.setState({tokens: event.target.value})
    }

    transfer(tokensOwner, to, tokens) {
        Free.transfer(tokensOwner, to, tokens);
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
                        <label htmlFor="tokenTo">Token's Receiver Address</label>
                        <input className="form-control"
                         placeholder="Enter Token's Receiver Address" id="tokenTo" type="text" value={this.state.to}
                         onChange={this.handleToChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="token">Number of Token to Give</label>
                        <input className="form-control" id="token" type="number" value={this.state.tokens}
                        onChange={this.handleTokensChange}></input>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={() => this.transfer(this.state.tokensOwner,
                        this.state.to,
                        this.state.tokens)}>Transfer</button>
                </div>
            </div>
            <div className="col-2"></div>
            </div>
        );
    }
}

export default TransferTokens;