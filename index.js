const contractAddress = '0x769c54f0886757f1677eb276b357d4f926c53439';
const contractAbi = [{"inputs":[{"internalType":"string","name":"newBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"a","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"isOperator","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"mintReserved","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mintToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reservedRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_a","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"val","type":"bool"}],"name":"setSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFunds","outputs":[],"stateMutability":"payable","type":"function"}];
const tokenPrice = '1000000000000000000'; // 1 MATIC
const polygonNetwork = {
  chainId: 137,
  chainName: 'Polygon',
  rpcUrl: 'https://polygon-rpc.com',
  currencyName: 'Matic',
  currencySymbol: 'MATIC',
  blockExplorerUrl: 'https://polygonscan.com/',
};
// const tokenPrice = '10000000000000000'; // 0.01 MATIC
// const polygonMumbaiNetwork = {
//   chainId: 80001,
//   chainName: 'Mumbai',
//   rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
//   currencyName: 'Matic',
//   currencySymbol: 'MATIC',
//   blockExplorerUrl: 'https://mumbai.polygonscan.com/',
// };

const mintAmountInput = document.getElementById('mint-amount');
const incrementAmount = () => {
  const max = parseInt(mintAmountInput.getAttribute('max'));
  const newValue = parseInt(mintAmountInput.value) + 1;
  mintAmountInput.value = newValue > max ? max : newValue;
};
const decrementAmount = () => {
  const min = parseInt(mintAmountInput.getAttribute('min'));
  const newValue = parseInt(mintAmountInput.value) - 1;
  mintAmountInput.value = newValue < min ? min : newValue;
};
const amountScroll = (e) => {
    e.preventDefault();
  if (e.deltaY > 0) {
    decrementAmount();
  } else if (e.deltaY < 0) {
    incrementAmount();
  }
};

(async () => {
  // Check for Web3 wallet
  const mintButton = document.getElementById('mint-button');
  mintButton.onclick = async () => {
    let web3;
    try {
      web3 = new Web3(window.ethereum);
      // Ensure we are connected to Polygon
      const chainID = await Moralis.getChainId();
      if (chainID !== polygonNetwork.chainId) {
        try {
          await Moralis.switchNetwork(polygonNetwork.chainId);
        } catch (e) {
          if (e.code === 4902) {
            await Moralis.addNetwork(
              polygonNetwork.chainId, 
              polygonNetwork.chainName, 
              polygonNetwork.currencyName, 
              polygonNetwork.currencySymbol, 
              polygonNetwork.rpcUrl,
              polygonNetwork.blockExplorerUrl
            );
            await Moralis.switchNetwork(polygonNetwork.chainId);
          } else {
            throw e;
          }
        }
      }
      
      // Reload if MetaMask network changes
      Moralis.onChainChanged(async () => {
        const chainID = await Moralis.getChainId();
        if (chainID !== polygonNetwork.chainId) {
          window.location.reload();
        }
      });
      
      const amountInputGroup = document.getElementById('mint-amount-input-group');
      amountInputGroup.classList.remove('hidden');
      mintButton.textContent = 'mint';
      mintButton.onclick = async () => {        
        mintButton.setAttribute('disabled', 'disabled');
        const amount = mintAmountInput.value;
        const tokenContract = new web3.eth.Contract(contractAbi, contractAddress);

        try {
          amountInputGroup.classList.add('hidden');
          mintButton.textContent = '.';
          const intervalID = setInterval(() => {
            mintButton.textContent = mintButton.textContent + '.';
            if (mintButton.textContent.length > 8) {
              mintButton.textContent = '.';
            }
          }, 400);
          try {
            await tokenContract.methods.mintToken(amount).send(
              { value: tokenPrice.replace('1', amount), from: ethereum.selectedAddress, gasLimit: 400000*amount }
            );
          } finally {            
            clearInterval(intervalID);
          }
          mintButton.textContent = 'success!';
          mintButton.onclick = null;
          document.getElementById('os-link').classList.remove('hidden');
        } catch {
          mintButton.textContent = 'mint';
          mintButton.removeAttribute('disabled');
          amountInputGroup.classList.remove('hidden');
        }
      };
    } catch (e) {
      if (e.code !== 4001) {
        mintButton.textContent = 'install metamask';
        mintButton.onclick = () => {
          window.open('https://www.metamask.io/download');
          // Reload when user tabs back in so we can load MetaMask
          window.disableResetPrompt;
          window.onblur = () => window.onfocus= () => location.reload(true);
        };
      }
    }
  };
})()