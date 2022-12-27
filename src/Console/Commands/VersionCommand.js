"use strict";

const Version = require ("../../Version");
const Command = require ("./Command");

/**
 * @class
 * @extends Command
 */
module.exports = class VersionCommand extends Command
{
    /**
     * @returns {Command}
     */
    configure ()
    {
        return this.application.command ("version")
        .description ("The version of application");
    }

    /**
     * @returns {Function}
     */
    execute ()
    {
        return (command, options) => {

            let version = new Version ().version ();

            if (version) {
    
                console.log (version);
    
            } else {
    
                console.error (1);
            }
        };
    }
};
