import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Test app', {
  clientId: '2ogMjGdGFH34nByWBi9AmdBze7AU1pETADo',
  network: 'rinkeby',
  signer: SimpleSigner('2000049c7b733cd95f8622f65614c06d52402b7962534b76da001c4e1c42af5c')
})

export const web3 = uport.getWeb3()