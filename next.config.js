const withSass = require("@zeit/next-sass");
module.exports = withSass({
    sassLoaderOptions: {
        sourceMap: true
    },
    postcssLoaderOptions: {
         sourceMap: true
    },
    env:{
        INSPIRABLE_APP_ACTIVECAMPAIGN_KEY : 'c71515ccfe669d47d995c474964d0b8deac37d5de5f08f4ad45650629aea5d6a42995a31',
        INSPIRABLE_APP_AC_ENDOPINT : 'https://inspirable.api-us1.com',
        INSPIRABLE_APP_DEBOUNCE_APIKEY :"6002ed047aa9f",
        INSPIRABLE_APP_DEBOUNCE_VALID_REASONS :"Deliverable,Accept All,Unknown"
    }
})