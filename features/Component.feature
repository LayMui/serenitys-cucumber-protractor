Feature: Show Component
  In order to validate the Component
  As a QA tester Jan
  Jan wants to see how the component look like
  
    Background: 
      Given Jan is at the app
@test
  Scenario Outline: Component
    When he want to select for "<component>"
    Then he is able to see the component displayed

    Examples:
    | component |
    | Button    | 
    | Calendar  | 
