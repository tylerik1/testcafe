import { Selector } from 'testcafe';
import { book_flight, register_account, sign_in } from './common_functions.js';

fixture `smoke_test`
    .page `http://newtours.demoaut.com/index.php`;



var user = "Automated_test_fire_eye_user";
var password = "FireEyeTestUser"




test('register_account', async t => {
    await register_account(user, password)
    await t.expect(Selector('p').withText('Thank you for registering. You may now sign-in usi').find('font').innerText).eql("Thank you for registering. You may now sign-in using the user name and password you've just entered.", { timeout: 5000 }); //verify

});



test('book_flight', async t => {

    await register_account(user, password)
    await sign_in(user, password)
    await book_flight(user, 'doe', '123456789')
    await t.expect(Selector('b').withText('Your itinerary has been booked!').find('font').nth(1).innerText).eql("Your itinerary has been booked!");

});
