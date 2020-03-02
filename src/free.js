import EthereumConnexion from './ethereumConnexion';

class Free {
    static checkEthereumConnexion() {
        if (EthereumConnexion.ConnexionInstance === undefined) {
            alert('Create or Find Free Tokens.');
            return false;
        }
        return true;
    }

    static checkAddress(address) {
        if (EthereumConnexion.ConnexionInstance.Connexion.utils.isAddress(address)) {
            return true;
        }
        alert(address + 'is not a address');
    }

    static balanceOf(tokensOwner) {
        if (!Free.checkEthereumConnexion() || !this.checkAddress(tokensOwner)) {
            return;
        }

        return EthereumConnexion.GetInstance().Contract.methods.balanceOf(tokensOwner).call();
    }

    static allowance(tokensOwner, spender) {
        if (!Free.checkEthereumConnexion()
         || !this.checkAddress(tokensOwner)
         || !this.checkAddress(spender)) {
            return;
        }
        return EthereumConnexion.GetInstance().Contract.methods.allowance(tokensOwner, spender).call();
    }

    static transfer(tokensOwner, to, tokens) {
        if (!Free.checkEthereumConnexion()
         || !this.checkAddress(tokensOwner)
         || !this.checkAddress(to)) {
            return;
        }

        var optionsGasEstimate = {
            from: tokensOwner,
        };

        return EthereumConnexion.GetInstance().Contract.methods.transfer(to, tokens)
        .estimateGas(optionsGasEstimate)
        .then((gasToPay) => {
            var optionSend = {
                from: tokensOwner,
                gasLimit: gasToPay,
                gasPrice: EthereumConnexion.GetInstance().Connexion.utils.toWei('1', 'gwei'),
            };

            return EthereumConnexion.GetInstance().Contract.methods.transfer(to, tokens).send(optionSend)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static approve(tokensOwner, spender, tokens) {
        if (!Free.checkEthereumConnexion()
         || !this.checkAddress(tokensOwner)
         || !this.checkAddress(spender)) {
            return;
        }

        var optionsGasEstimate = {
            from: tokensOwner,
        };

        return EthereumConnexion.GetInstance().Contract.methods.approve(spender, tokens)
        .estimateGas(optionsGasEstimate)
        .then((gasToPay) => {
            var optionSend = {
                from: tokensOwner,
                gasLimit: gasToPay,
                gasPrice: EthereumConnexion.GetInstance().Connexion.utils.toWei('1', 'gwei'),
            };

            return EthereumConnexion.GetInstance().Contract.methods.approve(spender, tokens).send(optionSend)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static transferFrom(tokensOwner, spender, tokens) {
        if (!Free.checkEthereumConnexion()
         || !this.checkAddress(tokensOwner)
         || !this.checkAddress(spender)) {
            return;
        }

        var optionsGasEstimate = {
            from: spender,
        };

        return EthereumConnexion.GetInstance().Contract.methods.transferFrom(tokensOwner, tokens)
        .estimateGas(optionsGasEstimate)
        .then((gasToPay) => {
            var optionSend = {
                from: spender,
                gasLimit: gasToPay,
                gasPrice: EthereumConnexion.GetInstance().Connexion.utils.toWei('1', 'gwei'),
            };

            return EthereumConnexion.GetInstance().Contract.methods.transferFrom(tokensOwner, tokens).send(optionSend)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

export default Free;
