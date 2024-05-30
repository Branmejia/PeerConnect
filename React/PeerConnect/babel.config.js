module.exports = function(api){
    api.cache(true);
return{
    presets: ['babel-presets-expo'],
    plugins: [
        '@babel/plugin-proposal-export-namespace-from',
        'react-native-reanimates/plugin'
    ]
    };
};