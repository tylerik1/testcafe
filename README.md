Tests included:
  1. Register new account:  Creates a new account with a username and password.  Only required fields have values that can be modifed. Non required fields have default values that I specifed.
  
  2. Book a flight: Allows a logged in user to book a flight.  Only required fields have values that can be modifed. Non required fields have default values that I specifed.


Maintaining and Adding:

I created my tests using TestCafe Studio (https://www.devexpress.com/products/testcafestudio/) as was recommended on the TestCafe github page with the 30 day trial.  The record feature works well for grabbing the element from the dom file but has much to be desired in terms of creating efficient tests.  Tests can easily be run by selecting the play button beside either the individual test to test a single function, or beside the fixture to run all tests that are apart of that fixture.

To add new functions to test, first identify which fixture to create them under.  Since I was writing smoke tests I created a smoketest fixture to house my tests.  If a fixture does not exist then you can make one in a new file with:


fixture `smoke_test` // name of fixture
    .page `http://newtours.demoaut.com/index.php`;  //web page to be opened with each test


When adding new functions, take a look at the common_functions file for a list of functions that will assist in taking out some of the repetative code in your tests.  If you feel a function would be benefitial for creating cleaner code feel free to add it to the common_functions file.  When you are ready to add a new test to a fixture, simply copy the template below and fill in the functionality that the test requires:

test('book_flight', async t => {  

    await register_account(user, password)  
    await sign_in(user, password) 
    await book_flight(user, 'doe', '123456789')
    await t.expect(Selector('b').withText('Your itinerary has been booked!').find('font').nth(1).innerText).eql("Your itinerary has been booked!");

});

each test should include a verification step as the last step to ensure the end state of the test is correct.
