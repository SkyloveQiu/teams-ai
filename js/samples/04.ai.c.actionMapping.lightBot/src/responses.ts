// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/*
All of these responses where generated by GPT using a prompt similar to:

```
Here's a JavaScript string literal template:

`I couldn't find a ${item} on your ${list} list.`

Create a JavaScript array with 7 variations of the template.
The variations should be helpful, creative, clever, and very friendly.
The variations should always use the back tick `` syntax.
The variations should always include ${item} and ${list} variables.
```

7 variations were asked for so that we can remove the 2 we like the least.
*/

/**
 * Returns a string with the current status of the lights and a suggestion to switch them on or off.
 * @param {boolean} status - A boolean indicating whether the lights are currently on or off.
 * @returns {string} A string with the current status of the lights and a suggestion to switch them on or off.
 */
export function lightStatus(status: boolean): string {
    const currently = status ? 'on' : 'off';
    const opposite = status ? 'off' : 'on';
    return (
        getRandomResponse([
            `The lights are currently ${currently}.`,
            `It looks like the lights are ${currently}.`,
            `Right now the lights are ${currently}.`,
            `The lights are ${currently} at the moment.`,
            `They are ${currently}.`
        ]) +
        getRandomResponse([
            ` Would you like to switch them ${opposite}?`,
            ` Should I turn them ${opposite}?`,
            ` Can I flip them ${opposite} for you?`,
            ` Would you like them ${opposite}?`,
            ``
        ])
    );
}

/**
 * Responds when an unknown action is called
 * @param {string} action The action being performed
 * @returns {string} the response
 */
export function unknownAction(action: string): string {
    return getRandomResponse([
        `I'm sorry, I'm not sure how to ${action}.`,
        `I don't know the first thing about ${action}.`,
        `I'm not sure I'm the best person to help with ${action}.`,
        `I'm still learning about ${action}, but I'll try my best.`,
        `I'm afraid I'm not experienced enough with ${action}.`
    ]);
}

/**
 * Returns a string indicating that the bot cannot help with the current topic.
 * @returns {string} A string indicating that the bot cannot help with the current topic.
 */
export function offTopic(): string {
    return getRandomResponse([
        `I'm sorry, I'm not sure I can help you with that.`,
        `I'm sorry, I'm afraid I'm not allowed to talk about such things.`,
        `I'm sorry, I'm not sure I'm the right person to help you with that.`,
        `I wish I could help you with that, but it's not something I can talk about.`,
        `I'm sorry, I'm not allowed to discuss that topic.`
    ]);
}

/**
 * Returns a random response from an array of responses.
 * @param {string[]} responses - An array of string responses.
 * @returns {string} A random response from the array.
 */
function getRandomResponse(responses: string[]): string {
    const i = Math.floor(Math.random() * (responses.length - 1));
    return responses[i];
}
