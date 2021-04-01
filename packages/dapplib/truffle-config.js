require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict lock bone system educate rare remind history inner arctic bone gesture'; 
let testAccounts = [
"0xc8a5ae079fb00cad2d2027bb1327904f33e98cf59df047d1fba989a807250edb",
"0xcb6fe05bd5c6a2c596c82eca8e4ef62397a5b4fb96650a039aaf618617062e26",
"0xb3a94b43e5a10c0df20ecb79e27c5beec20c2e5e4b3e531a21588d658321a9b2",
"0xf875e24779b7a880492772673787ff6b4191d4b3993f9bdce94db442c37ebdbf",
"0xfac09103016a62fb0f26511b4a48699d5431d15a935f9fa282fd00587e16d002",
"0x466a390c7056e4d303f818cc28c04bb8c067d93c747e8797516b17294f955f72",
"0xf730afaff75441468620697ec3cc4b29af6700852096c3134e1b74376828fa74",
"0xab8125b4782fbfde781a2449f824e802d372d424a599cecd0e54d2bf88a49cf6",
"0x9ca696e3372974ddb86425afd708d0317e733cef8818d637ded479931a33486e",
"0x8da4ed70b514103a591accfd8a76c6093d8d73b3705f0220525313c3ddb7fb55"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

