# Testing Philosophy
> Test your software the way users actually use it.
  - not internal implementation
  - Find elments by accessiblity markers, not test Ids

# Jest
> Test runner that
  - finds tests
  - runs tests
  - determines whether tests pass or fail


# React Testing Library
> Creates Virtual DOM for testing
> has utilities for interacting with DOM
> allows testing w/o a browser

# different types of Tests
  1. Unit Tests -  tests one unit of code in isolation
  2. Integration tests - How multiple unit work together
  3. Functional Tests - test a particular function (behavior) of software
  4. Acceptance Tests(End to End, E2E) - use actual browser and server (Cypress, Selenium);

# Unit Testing
   1. isolated 
   2. mock dependencies
   3. test internal
   4. very easy to pinpoint failures
   5. further from how users interact with software
   6. more likely to break with refactoring

# Functional Testing
   1. close to how users interact with software
   2. robust tests
   3. more difficult to debug failing tests.

# Examples of Screen Readers
- getByRole
- getByLabelText
- getByText
- getByDisplayValue
- getByTitle
- getByTestId


