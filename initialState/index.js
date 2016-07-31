var IS = require('initial-state');
var bucket = IS.bucket('thermostat', 'ih3p0TC7hzDDmQ9ULMkFkliN2xREG9DP');

// Push event to initial state
bucket.push('Demo State', 'active');

setTimeout(function () {

    // Push another event
    bucket.push('Demo State', 'inactive');

}, 1000);
