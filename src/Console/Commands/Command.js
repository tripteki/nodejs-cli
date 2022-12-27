"use strict";

/**
 * @class
 */
module.exports = class Command
{
    /**
     * @type {Command}
     */
    application = null;

    /**
     * @param {Command} application
     * @returns {void}
     */
    constructor (application)
    {
        this.application = application;

        this.configure ().action (this.execute ());
    }
};
