Feature: Login validation
@login
Scenario Outline: Valid Login check

Given User log in to URL
When User enters the "<UserName>" and "<Password>"
And User select Student from the dropdown
And User select the accept policy
Then User logs in successfully

Examples:
|    UserName      |  Password  |
|rahulshettyacademy|  learning  |
|rahulshettyaaaaaay|  leddning  |