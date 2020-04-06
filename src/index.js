import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import ReactDOM from 'react-dom';
import CheckBalance from './checkBalance';
import CheckAllowance from './checkAllowance';
import TransferTokens from './transferTokens';
import GiveTokens from './giveTokens';
import GetTokens from './getTokens';
import './index.css';
import Free from './free';
import GetTokenFromEther from './getTokenFromEther';
import BurnToken from './burnToken';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            connexionAuthorize : false,
            hasProvider : window.ethereum !== undefined,
        }

        this.connect = this.connect.bind(this);
    }

    renderCheckBalance() {
        return (
            <CheckBalance/>
        );
    }

    renderBurnToken() {
        return (
            <BurnToken/>
        );
    }

    renderGetTokenFromEther() {
        return (
            <GetTokenFromEther/>
        );
    }

    renderCheckBalance() {
        return (
            <CheckBalance/>
        );
    }

    renderCheckAllowance() {
        return (
            <CheckAllowance/>
        );
    }

    renderTransferTokens() {
        return (
            <TransferTokens/>
        );
    }

    renderGiveTokens() {
        return (
            <GiveTokens/>
        );
    }

    renderGetTokens() {
        return (
            <GetTokens/>
        );
    }

    connect() {

        window.ethereum.enable().then(() => {

        this.setState({
            connexionAuthorize : true,
        });

        Free.Provider = window.ethereum;
        });
    }

    render() {
        if(this.state.connexionAuthorize) {
            return (
                <div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link" id="nav-balance-tab" data-toggle="tab" href="#nav-balance" role="tab" aria-controls="nav-balance" aria-selected="false">Get Balance</a>
                            <a className="nav-item nav-link" id="nav-allowance-tab" data-toggle="tab" href="#nav-allowance" role="tab" aria-controls="nav-allowance" aria-selected="false">Get Allowance</a>
                            <a className="nav-item nav-link" id="nav-getToken-tab" data-toggle="tab" href="#nav-getToken" role="tab" aria-controls="nav-getToken" aria-selected="false">Get Token</a>
                            <a className="nav-item nav-link" id="nav-burn-tab" data-toggle="tab" href="#nav-burn" role="tab" aria-controls="nav-burn" aria-selected="false">Burn Token</a>
                            <a className="nav-item nav-link" id="nav-transfer-tab" data-toggle="tab" href="#nav-transfer" role="tab" aria-controls="nav-transfer" aria-selected="false">Transfer Tokens</a>
                            <a className="nav-item nav-link" id="nav-approve-tab" data-toggle="tab" href="#nav-approve" role="tab" aria-controls="nav-approve" aria-selected="false">Approve Tokens</a>
                            <a className="nav-item nav-link" id="nav-gettoken-tab" data-toggle="tab" href="#nav-gettoken" role="tab" aria-controls="nav-gettoken" aria-selected="false">Get Tokens</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade" id="nav-balance" role="tabpanel" aria-labelledby="nav-balance-tab">{this.renderCheckBalance()}</div>
                        <div className="tab-pane fade" id="nav-allowance" role="tabpanel" aria-labelledby="nav-allowance-tab">{this.renderCheckAllowance()}</div>
                        <div className="tab-pane fade" id="nav-getToken" role="tabpanel" aria-labelledby="nav-getToken-tab">{this.renderGetTokenFromEther()}</div>
                        <div className="tab-pane fade" id="nav-burn" role="tabpanel" aria-labelledby="nav-burn-tab">{this.renderBurnToken()}</div>
                        <div className="tab-pane fade" id="nav-transfer" role="tabpanel" aria-labelledby="nav-transfer-tab">{this.renderTransferTokens()}</div>
                        <div className="tab-pane fade" id="nav-approve" role="tabpanel" aria-labelledby="nav-approve-tab">{this.renderGiveTokens()}</div>
                        <div className="tab-pane fade" id="nav-gettoken" role="tabpanel" aria-labelledby="nav-gettoken-tab">{this.renderGetTokens()}</div>
                    </div>
                </div>
            );
        }

        if(this.state.hasProvider){
            return (<div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-4">
            <button className="btn btn-primary" onClick={() => this.connect()}>Connect to Ethereum</button>
            </div>
            <div className="col-4"></div>
            </div>            
        </div>);
        }

        return (<div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1 className="title">Install a Provider</h1>
                </div>
                <div className="col-4"></div>
            </div>            
        </div>)
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );