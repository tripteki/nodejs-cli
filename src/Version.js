"use strict";

/**
 * @class
 */
module.exports = class Version
{
    /**
     * @returns {string}
     */
    version ()
    {
        const { version = "1.0.0", } = require (__dirname+"/../package.json");

        return version;
    }
};
