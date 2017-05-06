var test = require('tape');
var flow = require('../js/flow-store.js');

// Ensure that the initial state of the "flow" reducer gets set correctly
test('flow',  t => {

    const expected = false;
    const actual = flow.state.completed;
    const message = "Completed should be false";
    t.deepEqual(actual, expected, message);
    t.end();
});