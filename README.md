# Saucedemo-and-Gorest-task
Classic UI automation task and API chain requests + response assertions task

Task 1
Your task is to create end2end tests for the following web store https://www.saucedemo.com/ . The
required login credentials are displayed under the sign-in form. The test suite should contain at least 3
tests which are defined below. Any additional test cases you add will be treated as a plus.
Please, follow these test steps:
*1.Test: An order can be completed*
Go to https://www.saucedemo.com/.
Log in to the site.
Add an item from the list to the cart.
Verify that the cart badge is updated correctly.
Open another item’s details page.
Add the item to the cart.
Open the cart.
Verify that the correct items are present (2 different items).
Remove the first item from the cart.
Verify that the correct item is present (1 item).
Continue to the Checkout page.
Complete the checkout form.
Complete the order.
Verify that the order is completed successfully with the displayed message.

*2. Test: Items can be sorted.*
Go to https://www.saucedemo.com/.
Log in to the site.
Verify that the items are sorted by Name ( A TO Z ).
Change the sorting to Name ( Z TO A).
Verify that the items are sorted correctly.
Change the sorting to Price (low to high).
Verify that the items are sorted correctly.
Change the sorting to Price (high to low).
Verify that the items are sorted correctly.

*3. Test: Cannot login with incorrect credentials.*
Go to https://www.saucedemo.com/.
Enter an incorrect username.
Enter an incorrect password.
Click on the Login button.
Verify that the user cannot log in with incorrect credentials.

Task 2
Using the testing site https://gorest.co.in/, write automation tests for the following endpoints:
1. Create a new user
2. Update user details
3. Delete user
The test scenarios are entirely up to you, and you may use additional endpoints if you feel they will
provide better coverage and improve your coding solution. You will be evaluated on which test cases you
create as well as on the overall quality and efficiency of your automation code
