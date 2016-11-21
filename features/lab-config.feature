Feature: As a developer I want to configure my application

  Scenario: A config value is provided
    Given the config a.b.c is set to "someValue"
    Then the config value a.b.c is "someValue"
