import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import ReactDOM from 'react-dom';
import CreateContract from './createContract';
import FindContract from './findContract';
import CheckBalance from './checkBalance';
import CheckAllowance from './checkAllowance';
import TransferTokens from './transferTokens';
import GiveTokens from './giveTokens';
import GetTokens from './getTokens';
import './index.css';

class App extends React.Component {

    renderCreateContract() {
        return (
            <CreateContract/>
        );
    }

    renderFindContract() {
        return (
            <FindContract/>
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

    render() {
        return (
            <div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-create-tab" data-toggle="tab" href="#nav-create" role="tab" aria-controls="nav-create" aria-selected="true">Create Free Tokens</a>
                        <a className="nav-item nav-link" id="nav-get-tab" data-toggle="tab" href="#nav-get" role="tab" aria-controls="nav-get" aria-selected="false">Get Free Tokens</a>
                        <a className="nav-item nav-link" id="nav-balance-tab" data-toggle="tab" href="#nav-balance" role="tab" aria-controls="nav-balance" aria-selected="false">Get Balance</a>
                        <a className="nav-item nav-link" id="nav-allowance-tab" data-toggle="tab" href="#nav-allowance" role="tab" aria-controls="nav-allowance" aria-selected="false">Get Allowance</a>
                        <a className="nav-item nav-link" id="nav-transfer-tab" data-toggle="tab" href="#nav-transfer" role="tab" aria-controls="nav-transfer" aria-selected="false">Transfer Tokens</a>
                        <a className="nav-item nav-link" id="nav-approve-tab" data-toggle="tab" href="#nav-approve" role="tab" aria-controls="nav-approve" aria-selected="false">Approve Tokens</a>
                        <a className="nav-item nav-link" id="nav-gettoken-tab" data-toggle="tab" href="#nav-gettoken" role="tab" aria-controls="nav-gettoken" aria-selected="false">Get Tokens</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-create" role="tabpanel" aria-labelledby="nav-create-tab">{this.renderCreateContract()}</div>
                    <div className="tab-pane fade" id="nav-get" role="tabpanel" aria-labelledby="nav-get-tab">{this.renderFindContract()}</div>
                    <div className="tab-pane fade" id="nav-balance" role="tabpanel" aria-labelledby="nav-balance-tab">{this.renderCheckBalance()}</div>
                    <div className="tab-pane fade" id="nav-allowance" role="tabpanel" aria-labelledby="nav-allowance-tab">{this.renderCheckAllowance()}</div>
                    <div className="tab-pane fade" id="nav-transfer" role="tabpanel" aria-labelledby="nav-transfer-tab">{this.renderTransferTokens()}</div>
                    <div className="tab-pane fade" id="nav-approve" role="tabpanel" aria-labelledby="nav-approve-tab">{this.renderGiveTokens()}</div>
                    <div className="tab-pane fade" id="nav-gettoken" role="tabpanel" aria-labelledby="nav-gettoken-tab">{this.renderGetTokens()}</div>
                </div>
            </div>
        );
    }
}

// class Connexion {
//     _address = "0x69bb3b28c2f67ba7b3bd5069ec2a3f5b573deb3c";
//     _connexion = undefined;
//     _contract = undefined;

//     static ConnexionInstance = undefined;

//     static CreateInstance(provider) {
//         Connexion.ConnexionInstance = new Connexion();
//         Connexion.ConnexionInstance.init(provider);
//     }

//     static GetInstance() {
//         return Connexion.ConnexionInstance;
//     }

//     updateContract(contract) {
//         this._contract = contract;
//         console.log(contract);
//     }

//     init(provider) {
//         // eslint-disable-next-line
//         console.log(provider);
//         Connexion.GetInstance()._connexion = new Web3(provider);
//         var contractFile = truffle(file);
//         var contractAccount = Connexion.GetInstance()._connexion.eth.accounts.create();
//         var options = {
//             from: Connexion.GetInstance()._address
//         }
//         Connexion.GetInstance()._contract = new (Connexion.GetInstance()._connexion.eth).Contract(contractFile.abi, contractAccount.address, options);

//         var optionsDeploy = {
//             data: contractFile.bytecode,
//         };

//         Connexion.GetInstance()._contract.deploy(optionsDeploy).send(options).then(
//             (res) => Connexion.GetInstance().updateContract(res));
//     }
// }

// class Sum extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             a: 0,
//             b: 0,
//             sum: 0,
//         };
//         this.getSum = this.getSum.bind(this);
//         this.updateSum = this.updateSum.bind(this);
//     }

//     updateSum(sum) {
//         this.setState({sum: sum});
//     }

//     getSum(a, b) {
//         EthereumConnexion.GetInstance().Contract.methods.getSum(a, b).call()
//         .then((res) => this.updateSum(res))
//         .catch((error) => {
//             console.log(error);
//         });
//     }

//     renderSumInput() {
//         return (
//             <SumInput onClick={(a,b) => this.getSum(a, b)}></SumInput>
//         );
//     }

//     render() {
//         return(
//             <div>
//                 {this.renderSumInput()}
//                 <label>Sum = {this.state.sum}</label>
//             </div>
//         );
//     }
// }

// class SumInput extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             a: 0,
//             b: 0,
//             sum: props.sum,
//         };
//         this.handleAChange = this.handleAChange.bind(this);
//         this.handleBChange = this.handleBChange.bind(this);
//     }

//     handleAChange(event) {
//         this.setState({a: event.target.value});
//     }

//     handleBChange(event) {
//         this.setState({b: event.target.value});
//     }

//     render() {
//         return (
//             <div>
//                 <label>A : 
//                     <input type="number" value={this.state.a} onChange={this.handleAChange}></input>
//                 </label>
//                 <label>B : 
//                     <input type="number" value={this.state.b} onChange={this.handleBChange}></input>
//                 </label>
//                 <button onClick={()=> this.props.onClick(this.state.a, this.state.b)}>Compute</button>
//             </div>
//         );
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );