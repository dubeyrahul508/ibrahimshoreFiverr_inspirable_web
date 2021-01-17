
const axios = require('axios');

export const validateEmail = async email => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( ! re.test(email) ) {
        return false;
    }


    const api = process.env.INSPIRABLE_APP_DEBOUNCE_APIKEY;
    console.log(api);
    const validReasons = process.env.INSPIRABLE_APP_DEBOUNCE_VALID_REASONS.split(',');
    const isValid = await axios.get('https://api.debounce.io/v1/', {
        params: { api, email },
        crossDomain: true
      }).then(res => {
          console.log(res);
          const { debounce } = res.data;

          if ( debounce && debounce.reason ) {
                return validReasons.findIndex(item => item === debounce.reason) !== -1
          }

          // just in case, if the request fails because there are no more credits, accept all
          if ( debounce && debounce.error && debounce.error === 'Credits Low' ) {
              return true
          }

          return false;
      }).catch(err => console.log(err.code));

    return isValid;
}