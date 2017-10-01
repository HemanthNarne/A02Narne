// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (W03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing the calculating taxes', function (assert) {
    assert.strictEqual(calc(100,10), 10, 'Tax is less');
    assert.strictEqual(calc(3000,15), 450, 'Tax is medium');
    assert.strictEqual(calc(4500,45), 2025, 'Tax is high');
    assert.strictEqual(calc(9000,65), 5850, 'Tax is very high');
});

