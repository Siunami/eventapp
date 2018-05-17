import React, { Component } from 'react'
import { uport } from './../../../util/connectors.js'

class Attest extends Component {
    attest(){
        uport.requestCredentials().then((credentials) => {
            // FUTURE TODO: Check credentials with event database before offering attestation.
      
            // Attest specific credentials
            uport.attestCredentials({
              sub: credentials.address,
              claim: {
                "test_event": "Test Event",
                "additional_data":"Hi"
              },
              exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            })
          })
    }

    render(){
        return(
            <a href="#" className="pure-menu-link" onClick={this.attest()}>Attest</a>
          )
    }
}

export default Attest;