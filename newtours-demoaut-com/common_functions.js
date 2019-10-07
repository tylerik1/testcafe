import { t } from 'testcafe';
import { Selector } from 'testcafe';


export async function book_flight(first_name, last_name, card_number){
    await t
        .click(Selector('[name="passCount"]'))
        .click(Selector('[name="passCount"]').find('option').withText('3')) //number of passengers
        .click(Selector('[name="fromPort"]'))
        .click(Selector('[name="fromPort"]').find('option').withText('London')) // departure airport
        .click(Selector('[name="fromDay"]'))
        .click(Selector('[name="fromDay"]').find('option').withText('5').nth(0)) //departure day
        .click(Selector('[name="toPort"]'))
        .click(Selector('[name="toPort"]').find('option').withText('Sydney')) //destination airport
        .click(Selector('[name="toMonth"]'))
        .click(Selector('[name="toMonth"]').find('option').withText('November')) //returning month
        .click(Selector('[name="toDay"]'))
        .click(Selector('[name="toDay"]').find('option').withText('9').nth(0)) //returning day
        .click(Selector('td').withText('Economy class').nth(4).find('font').find('font')) //economy flight
        .click(Selector('[name="findflight"]').find('[name="servClass"]').nth(2))
        .click(Selector('[name="airline"]'))
        .click(Selector('option').withText('Unified Airlines')) //airline
        .click(Selector('[name="findflight"]').find('[name="findFlights"]')) //submit form
        .click(Selector('[name="results"]').find('[name="reserveFlights"]')) //keep lowest prices and submit
        .typeText(Selector('[name="bookflight"]').find('[name="passFirst0"]'), first_name) //passengers first name
        .typeText(Selector('[name="bookflight"]').find('[name="passLast0"]'), last_name) //passengers last name
        .typeText(Selector('[name="bookflight"]').find('[name="creditnumber"]'), card_number) //credit card number
        .click(Selector('[name="bookflight"]').find('[name="buyFlights"]')) //submit form

}


export async function register_account(username, password) {
    await t
        .click(Selector('a').withText('REGISTER'))
        .typeText(Selector('[name="firstName"]'), username) //first name
        .typeText(Selector('[name="lastName"]'), 'doe') // last name
        .typeText(Selector('[name="phone"]'), '1111111111') //phone number
        .typeText(Selector('#userName'), 'johndoe@hotmail.com') //email
        .typeText(Selector('[name="address1"]'), '123 easy street') // address
        .typeText(Selector('[name="city"]'), 'springfield') //city 
        .typeText(Selector('[name="state"]'), 'MI') //state
        .typeText(Selector('[name="postalCode"]'), '22222') // postal code
        .typeText(Selector('#email'), username) //username
        .typeText(Selector('[name="password"]'), password) //password
        .typeText(Selector('[name="confirmPassword"]'), password) //confirm password
        .click(Selector('[name="register"]')) //register button
};


export async function sign_in(username, password) {
    
    await t
        .click(Selector('a').withText('sign-in'))
        .typeText(Selector('[name="register"]').find('[name="userName"]'), username)
        .typeText(Selector('[name="register"]').find('[name="password"]'), password)
        .click(Selector('[name="register"]').find('[name="login"]'));

        
};

