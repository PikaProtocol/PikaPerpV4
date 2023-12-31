require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');
// require("hardhat-gas-reporter");
const { infuraApiKey, mnemonic, etherscanApiKey, opkovankey, opkey } = require('./secrets.json');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            accounts: {
                accountsBalance: "100000000000000000000000"
            }
        },
        optimisticKovan: {
            url: 'https://kovan.optimism.io',
            gas: 1000000000,
            gasPrice: 10000,
        },
        optimistic: {
            url: 'https://mainnet.optimism.io',
        }

    },
    etherscan: {
    },
    solidity: {
        compilers: [{
            version: "0.8.7",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }]
    }
}


