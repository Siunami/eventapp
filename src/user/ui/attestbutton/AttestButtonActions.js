import { browserHistory } from 'react-router'
import { uport } from './../../../util/connectors.js'

// export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
// function userLoggedOut(user) {
//   return {
//     type: USER_LOGGED_OUT,
//     payload: user
//   }
// }

export function attestUser() {
  return function(dispatch) {
    uport.requestCredentials().then((credentials) => {
      console.log(credentials);
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
    // // Logout user.
    // dispatch(userLoggedOut())

    // Redirect home.
    return browserHistory.push('/')
  }
}
