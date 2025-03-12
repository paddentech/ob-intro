//import TestSequencer from '@jest/test-sequencer';
const Sequencer = require('@jest/test-sequencer').default;

const isEndToEnd = (test) => {
    const contextConfig = test.context.config;

    //console.log('test:', test);
    //console.log(contextConfig);
    return test.path.includes('e2e');
};

class CustomSequencer extends Sequencer {
    sort(tests) {
        const copyTests = Array.from(tests);
        const normalTests = copyTests.filter((t) => !isEndToEnd(t));
        const endToEndTests = copyTests.filter((t) => isEndToEnd(t));
        return super.sort(normalTests).
            concat(endToEndTests.sort((a, b) => (a.path > b.path ? 1 : -1)));
    }
}

module.exports = CustomSequencer;