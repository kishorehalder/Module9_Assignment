async function getBalance(account) {
  const web3 = new Web3(window.ethereum);
  const balanceWei = await web3.eth.getBalance(account);
  const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
  return balanceEth;
}

