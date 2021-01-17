const withSass = require("@zeit/next-sass");
module.exports = withSass({
    sassLoaderOptions: {
        sourceMap: true
    },
    postcssLoaderOptions: {
         sourceMap: true
    },
    env:{
        INSPIRABLE_APP_ACTIVECAMPAIGN_KEY : 'd99045b437388b4965018ad16ed88df9690ff8a33c56a6468877500c0c5749f3a1ef8e9b',
        INSPIRABLE_APP_AC_ENDOPINT : 'https://inspirable.api-us1.com',
        INSPIRABLE_APP_DEBOUNCE_APIKEY :"5eaa74ac10d24",
        INSPIRABLE_APP_DEBOUNCE_VALID_REASONS :"Deliverable,Accept All,Unknown"
    }
})