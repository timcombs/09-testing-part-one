/* Welcome to an intro to testing! This practice module
    will allow you to become familiar with testing concepts.
    We test to check the I/O of our apps. That is - we are not
    checking for HOW something works, but the end RESULT and
    state of a particular place in our application.
*/


/* Below is a basic example of a test "framework" where
    our test is a function that we can reuse to check against
    different components of our application.
    The `!expression` may look odd - we test for failing
    functionality first to then refactor the test to pass.
    This is common practice in testing ('red-green' refactoring).
*/
function expect(expression, failureMessage, successMessage) {
  if (!expression) {
    console.log('test failed:', failureMessage);
    return;
  }
  console.log('test passed:', successMessage);
}

/* Below is an example of our test in action.
TODO: Run this file in node to see what happens when the test fails, then change `ricksFaveAnimal` to get the test to pass!
*/
var ricksFaveAnimal = 'penguin';

expect(
  ricksFaveAnimal === 'penguin',
  'ricksFavoriteAnimal should equal penguin, but currently equals ' + ricksFaveAnimal,
  'ricksFavoriteAnimal equals penguin!');

  // BEGIN WORK BELOW - test code by running `node bonus-testing-part-one.js`
  //  in your terminal!

  /* ========================================================================
  ------------------------- Favorite Animals --------------------------------
  ===========================================================================
   The zoo is closing in 20 minutes. You still haven't seen your four favorite
   animals. You only have time for one. How do you choose just one?!
  */

var favoriteAnimals = ['elephants', 'penguins', 'eagles', 'camels'];
var nextAnimal;

  /* TODO:
      Assign one of your favorite animals dynamically by chance to the
      nextAnimal variable   :-)
      Your code begins on the next line: */
var animalIndex = Math.floor(Math.random() * 4);
var nextAnimal = favoriteAnimals[animalIndex];

  /* TODO:
      Write a test! Use the `expect()` function we defined earlier to ensure
      that an element in the favoriteAnimals array was assigned to nextAnimal.
      No hard-coded results allowed! (ex: seeing if nextAnimal is equal to
      just 'penguin').
      Remember to: pass in your expression, and write a failure and a success
      message. Your test begins on the next line: */
expect(
  (favoriteAnimals.indexOf(nextAnimal) !== -1),
  'nextAnimal should have a value, but currently equals ' + nextAnimal,
  'nextAnimal has a value and that value is ' + nextAnimal + '!');
