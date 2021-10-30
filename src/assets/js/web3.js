
import BigNumber from "bignumber.js";
import base from "./base.js"



const initContract = () => {
    return new Promise((resolve, reject) => {
            base.contract = new base.web3.eth.Contract(JSON.parse(base.abi), base.contractAddress);
            resolve(base.contract);
        })
}



// //获取token单价 wei
// function getPrice() {
//   return new Promise((resolve, reject) => {
//     contract.methods.apePrice().call(null, function (error, result) {
//       if (error) {
//         return reject(error)
//       }
//       resolve(result)
//     });
//   });
// }


const myAllNFT = async () => {
    if (base.contract ==null){
         throw new Error("please connect the wallet");
    }
    
    var count = await base.contract.methods.balanceOf(base.accounts[0]).call()
    console.log("count",count)
    var map = {};
            for (let index = 0; index < count; index++) {
          var tokenID =  await  base.contract.methods.tokenOfOwnerByIndex(base.accounts[0], index).call({})
          var info = await  base.contract.methods.getNft(tokenID).call({})
          if (map[tokenID]){
            map[tokenID]["count"]++
          }else{
              //author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569" level: "1" name: "10" power: "1000" res: "1"
            map[tokenID]= {"count":0,"author":info.author,"level":info.level,"name":info.level,"power":info.power,"res":info.res}
          }
        }      
        
        return map; 
}




//铸造 wei  to 铸造给谁 nftName 可以传空 level 等级 1-5 power[1000,2500,6500,14500,35000,90000] res 随便 author 随便
const mint = (nftName, level, power, res) => {
    console.log("mint")
    return new Promise((resolve, reject) => {

        if (web3 == undefined || web3 == null) {
            if (phoneOs) {
                return reject("Please use MetaMask app's  browser to open it");
            }
            return reject("Please install MetaMask Browser plug-in and Connect it");
        }
        if (base.contract == null) {
            getcontract()
            return reject("wallet cannot connect,Please try again later")
        }

        console.log("base.accounts[0]", base.accounts[0])
        // getPrice().then((price) => {
        let amount = BigNumber("0").multipliedBy(0.08)
        console.log(base.accounts[0], nftName, level, power, res)
        base.contract.methods.mint(base.accounts[0], nftName, level, power, res, base.accounts[0]).send({ from: base.accounts[0], value: amount }, function (error, transactionHash) {
            console.log("error>>>>>>>>>", error)
            if (error) {
                return reject(error.message)
            }
            return resolve("txHash:" + transactionHash)
        });
        // })
    });
}

// vConsole.destroy();
export {
    // getPrice,
    myAllNFT,
    initContract,
    mint,
};