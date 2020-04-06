import EthereumConnexion from './ethereumConnexion';

class Free {

    static EthereumConnexion = undefined;
    static Provider = undefined;

    static getEthereumConnexion() {
        if (Free.EthereumConnexion === undefined && Free.Provider !== undefined) {
            Free.EthereumConnexion = new EthereumConnexion(Free.Provider);
        }
        return Free.EthereumConnexion;
    }

    static checkEthereumConnexion() {
        if (Free.getEthereumConnexion() === undefined) {
            alert('Create or Find Free Tokens.');
            return false;
        }
        return true;
    }

    static checkAddress(address) {
        if (Free.getEthereumConnexion().Connexion.utils.isAddress(address)) {
            return true;
        }
        alert(address + 'is not a address');
    }

    static balanceOf(tokensOwner) {
        if (!Free.checkEthereumConnexion() || !this.checkAddress(tokensOwner)) {
            return;
        }

        return Free.getEthereumConnexion().Contract.methods.balanceOf(tokensOwner).call();
    }

    static allowance(tokensOwner, spender) {
        if (!Free.checkEthereumConnexion()
         || !this.checkAddress(tokensOwner)
         || !this.checkAddress(spender)) {
            return;
        }
        return Free.getEthereumConnexion().Contract.methods.allowance(tokensOwner, spender).call();
    }

    static checkAndGetTokenFromEther(amountOfEther) {
        Free.getEthereumConnexion().Connexion.eth.getAccounts().then((accounts) => {
            var mainAccount = accounts[0];
            Free.getEthereumConnexion().Connexion.eth.getBalance(mainAccount).then((balance) => {
                if(balance > Free.getEthereumConnexion().Connexion.utils.toWei(amountOfEther, 'ether')) {
                    return Free.getEthereumConnexion().Contract.methods.getToken(Free.getEthereumConnexion().Connexion.utils.toWei((amountOfEther *2).toString() , 'ether')).
                    send({ from : mainAccount, value : Free.getEthereumConnexion().Connexion.utils.toWei(amountOfEther, 'ether')}).then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            })
        })
    }

    static getTokenFromEther(amountOfEther) {
        if (!Free.checkEthereumConnexion()) {
            return;
        }
        Free.checkAndGetTokenFromEther(amountOfEther);
    }

    static checkAndBurnToken(amountOfTokenToBurn) {        
        Free.getEthereumConnexion().Connexion.eth.getAccounts().then((accounts) => {
            var mainAccount = accounts[0];
            Free.getEthereumConnexion().Contract.methods.balanceOf(mainAccount).call().then((balance) => {
                console.log(balance);
                console.log(Free.getEthereumConnexion().Connexion.utils.toWei(amountOfTokenToBurn));
                console.log(balance >= Free.getEthereumConnexion().Connexion.utils.toWei(amountOfTokenToBurn));
                if(balance >= Free.getEthereumConnexion().Connexion.utils.toWei(amountOfTokenToBurn)) {
                    Free.getEthereumConnexion().Contract.methods.getBurnToken(Free.getEthereumConnexion().Connexion.utils.toWei(amountOfTokenToBurn)).
                    send({
                        from : mainAccount
                    }).then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log(err);
                    });
                }
            })

        })
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

        return Free.getEthereumConnexion().Contract.methods.transfer(to, tokens)
        .estimateGas(optionsGasEstimate)
        .then((gasToPay) => {
            var optionSend = {
                from: tokensOwner,
                gasLimit: gasToPay,
                gasPrice: Free.getEthereumConnexion().Connexion.utils.toWei('1', 'gwei'),
            };

            return Free.getEthereumConnexion().Contract.methods.transfer(to, tokens).send(optionSend)
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

        return Free.getEthereumConnexion().Contract.methods.approve(spender, tokens)
        .estimateGas(optionsGasEstimate)
        .then((gasToPay) => {
            var optionSend = {
                from: tokensOwner,
                gasLimit: gasToPay,
                gasPrice: Free.getEthereumConnexion().Connexion.utils.toWei('1', 'gwei'),
            };

            return Free.getEthereumConnexion().Contract.methods.approve(spender, tokens).send(optionSend)
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

        return Free.getEthereumConnexion().Contract.methods.transferFrom(tokensOwner, tokens)
        .estimateGas(optionsGasEstimate)
        .then((gasToPay) => {
            var optionSend = {
                from: spender,
                gasLimit: gasToPay,
                gasPrice: Free.getEthereumConnexion().Connexion.utils.toWei('1', 'gwei'),
            };

            return Free.getEthereumConnexion().Contract.methods.transferFrom(tokensOwner, tokens).send(optionSend)
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
