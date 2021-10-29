import base from "./base.js"
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";


async function Init(callback) {
    if (base.web3 != undefined) {
        base.accounts = await base.web3.eth.getAccounts();
        callback(base.accounts)
    }
}


const _WalletContract = function _WalletContract(accountsChanged,disconnect,success,error) {
    var provider = new WalletConnectProvider({
        rpc: {
            97: base.bscTestnet.rpcUrls,
        },
        "chainId": 97,//需要连接的区块链id
        "networkId": 97,
        qrcode: true,//二维码是否开启
        qrcodeModalOptions: {
            mobileLinks: [
                "rainbow",
                "metamask",
                "argent",
                "trust",
                "imtoken",
                "pillar",
            ],
            desktopLinks: []
        },
    });
    provider.enable().then((res) => {
      
        base.web3 = new Web3(provider);

        //账户更改触发的方法
        provider.on("accountsChanged", (accounts) => {

            accountsChanged(accounts)
        });
        //账户断开的方法
        provider.on("disconnect", (code, reason) => {

            base.web3 = null
            disconnect(code)
        });

     //这里返回的是链接地址
     Init((accounts) => {
        success(accounts)
    })
   
    }).catch((err) => {

        error(err)
    });

}
export {
    _WalletContract
}