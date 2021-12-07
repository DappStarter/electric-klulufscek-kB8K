require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember horn install glove flower trade'; 
let testAccounts = [
"0x547d93caec545a64cfc183c892e99d577b4267d415b97cd793810a1c2e9b18d6",
"0x04a75e80eedc2ff55eff36fdd6541ed6464074e780c601422c376d911b1e27ec",
"0x2f62cdeae980dcef20b51cd09bc520b8cdf9c992936a9e2b267997ed4f3ac60b",
"0x5838ba3337dda8f4a4b7997e874113d66bd91f19b96e960e5787951230f053aa",
"0xfa1025ce4532ec181a6134d14d5940bcb5e7b4073727368d3119bcee34676471",
"0xd78f4a5c220c8a2f4b0d724dc6c8cbcbdb66072bc52a8fe46ff414524153fe10",
"0x7591020a326dd40d4dcf01bb484aa4be3ff54948c548967fb1f2f4a1393e7d54",
"0x9ace58ebbaa6b660ca02a9cb0df89bf8a62d14bbfeff73a9e34df4d835c7587e",
"0xb510e926d34c3ec6a3ba8a39d7cd6fe4cb2e8c472cd9e5d9939026b6c3008cab",
"0x1bb236ab96354d5c80ea7b930c4510babba195263bf9ac791cf63d1187453d83"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


