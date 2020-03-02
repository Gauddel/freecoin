import Web3 from 'web3';
import truffle from 'truffle-contract';

var file = require('./Free.json');

class EthereumConnexion {
    Connexion = undefined;
    Contract = undefined;
    JsonInterface = undefined;

    static ConnexionInstance = undefined;

    static CreateInstanceByDeploying(clientAddress, provider) {
        EthereumConnexion.CreateInstance(provider);
        EthereumConnexion.ConnexionInstance.deployContract(clientAddress);
    }

    static CreateInstanceByGetting(provider, clientAddress, address) {
        EthereumConnexion.CreateInstance(provider);
        EthereumConnexion.ConnexionInstance.getContract(clientAddress, address);
    }

    static CreateInstance(provider) {
        if (EthereumConnexion.ConnexionInstance !== undefined) {
            return;
        }

        EthereumConnexion.ConnexionInstance = new EthereumConnexion();
        EthereumConnexion.ConnexionInstance.connexion(provider);
    }

    static GetInstance() {
        return EthereumConnexion.ConnexionInstance;
    }

    updateContract(contract) {
        this.Contract = contract;
        console.log(contract);
    }

    connexion(provider) {
        // eslint-disable-next-line
        console.log(provider);
        this.Connexion = new Web3(provider);
        this.JsonInterface = truffle(file);
    }

    checkAddress(address) {
        if (this.Connexion.utils.isAddress(address))
        {
            return true;
        }

        alert(address + 'is not a ethereum address');
        return false;
    }

    getContract(clientAddress, address) {
        if (this.checkAddress(clientAddress) || !this.checkAddress(address))

        var options = {
            from: clientAddress
        }

        EthereumConnexion.GetInstance().Contract = new (EthereumConnexion.GetInstance().Connexion.eth)
         .Contract(EthereumConnexion.GetInstance().JsonInterface.abi, address, options);
    }

    deployContract(clientAddress) {
        var contractAccount = EthereumConnexion.GetInstance().Connexion.eth.accounts.create();
        this.getContract(clientAddress, contractAccount.address);

        var options = {
            from: clientAddress
        }

        var optionsDeploy = {
            data: EthereumConnexion.GetInstance().JsonInterface.bytecode,
        };

        EthereumConnexion.GetInstance().Contract.deploy(optionsDeploy).send(options).then(
            (res) => EthereumConnexion.GetInstance().updateContract(res));
    }
}

export default EthereumConnexion;