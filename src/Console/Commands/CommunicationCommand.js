"use strict";

const { once, } = require ("events");
const Line = require ("readline");
const Command = require ("./Command");

/**
 * @class
 * @extends Command
 */
module.exports = class CommunicationCommand extends Command
{
    /**
     * @returns {Command}
     */
    configure ()
    {
        return this.application.command ("pipe")
        .description ("Pipe continuous communication");
        // .argument () //
        // .option (); //
    }

    /**
     * @returns {Function}
     */
    execute ()
    {
        return async (command, options) => {

            try {

                const std = Line.createInterface ({

                    input: process.stdin,
                    output: process.stdout,
                    terminal: false,
                    crlfDelay: Infinity,
                });

                let response = null;

                for await (const request of std) {

                    if (request == "true") {

                        response = 0;

                        console.log (response.toString ());

                    } if (request == "false") {

                        response = 1;

                        console.error (response.toString ());
                    }
                }

                await once (std, "close");

            } catch (error) {

                console.error (error);
            }
        };
    }
};
