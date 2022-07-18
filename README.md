# software-development

- [software-development](#software-development)
  - [Agile Software Development](#agile-software-development)
  - [Jim McCarthy 23 Rules of Thumb](#jim-mccarthy-23-rules-of-thumb)
  - [Git Workflow Comparison](#git-workflow-comparison)
  - [Sprint Zero](#sprint-zero)
  - [Tip for successful sprint](#tip-for-successful-sprint)
  - [Scrum Team Daily (can be manual first but automated later)](#scrum-team-daily-can-be-manual-first-but-automated-later)
  - [Engineering Practice](#engineering-practice)
  - [Quality Assurance Use Pair Programming](#quality-assurance-use-pair-programming)
  - [QA Best Practices](#qa-best-practices)

## Agile Software Development

-   **Individuals and interactions** over processes and tools
-   **Working software** over comprehensive documentation
-   **Customer collaboration** over contract negotiation
-   **Responding to change** over following a plan

That is, while there is value in the items on
the right, we value the items on the left more.
<http://agilemanifesto.org/>

## Jim McCarthy 23 Rules of Thumb

-   Don't know what you don't know
-   Get to a known state and stay there
-   Remember the triangle, if you change any one, need change at least one another to work
    -   resource
    -   features
    -   scheule
-   Don't go dark: daily or weekly scrum
    -   Dependent team will play a role in checking status
    -   QA team can play a role to check
    -   Don't go dark for a long time
-   Use Feature Teams
    -   Everyone is accountable for
        -   Design
        -   Requirement
        -   Shipping
    -   Ratio: 6D:3Q:1P:2W (Developer, QA, Manager, Writters)
-   Use Zero-Defect Milestones
    -   Achieve the quality
-   Don't flip the bozo bit
    -   Bozo the clown, dumb - you can't trust
    -   Pay Bozo to hope they won't break anything
    -   Don't turn yourself to bozo
-   Beware of a guy in a room
    -   The best guy fails from time to time
    -   Developer (no matter how smart they are) needs give little things every week
-   When slipping, don't fail
    -   Slipping is like fever, it's helpful to make unknown known
    -   Communication is broken
    -   Use slip as a chance to learn
    -   Your first slip should be your biggest slip
-   Never trade a bad date for an equally bad date
    -   Being late !== knowing new date
-   Low tech is good
    -   Smaller > larger
    -   Understood > unknown
    -   Customers love progress and dislike promises
-   Design time at Design TIme
    -   Build time into the design
    -   Design the product to ship on time
-   If you build it, it will ship
    -   Daily build is essential
    -   Daily build is heartbeat
-   Enrapture the customer
    -   Most software sucks
-   Remember one thing: Unity
    -   Unity is analogous to purpose
    -   Everything supports the purpose
-   State your theme
    -   Dominant idea
    -   Eliminate competing values
    -   Surpassing clarity
    -   Software is slow means team is slow
-   Go for scenarios
    -   Make some activity really shine
-   Establish a shared vision
-   Catagorize the content

<https://scrumage.com/blog/2012/01/jim-mccarthy-23-rules-of-thumb/>

## Git Workflow Comparison

[Git Workflow Comparison](writing/git-workflow-comparison.md)

## Sprint Zero

-   Product Vision
-   Initial Product Backlog
-   Initial Release Plan
-   Architecture Approach & Coding Practices
-   Continuous Integration Environment
-   Small Product Increment

## Tip for successful sprint

-   sustainable pace
-   2-3 weeks
-   identifying the sprint goal (so you can answer what tema is working on without going into backlog)

## Scrum Team Daily (can be manual first but automated later)

-   Developer Tool
-   Unit Test
-   Source Control
-   Continuous Integration
-   Feature Testing

-   Task board (progress)
-   Sprint burn down chart (hours vs date)
-   Open Backlog Item vs date

## Engineering Practice

-   Features Not Frameworks
    -   Feature Driven instead of Framework driven
    -   So you can have deliverable at the end of the sprint
-   YAGNI Principle
    -   you aren't going to need it
-   Code Reviews
    -   Consistent style and name convension
    -   SOLID principle
    -   Eslint
    -   Pattern
-   Technical Debt
-   Continuous Integration (automate)
    -   Continuous Build
    -   Unit Test
    -   Integration Test
    -   Continuous Development
-   Automated Testing
    -   Unit Testins (Code coverage)
    -   Integration Tests (Backend drive)
    -   Feature Tests (UI focus - record and play back)
-   Definition of Done
    -   Code changed
    -   Tested
    -   Deployed
    -   Documented

## Quality Assurance Use Pair Programming

-   QA starts write testing script
-   Developer write feature code

## QA Best Practices

-   Hire good quality QA Engineers
-   QA and dev sit together
-   QA is involved in analysis and design
-   Test as you go
-   Test as part of definition of done
-   Limit your work in progress
-   Everyone can help test
-   Frequent, incremental releases for feedback
-   Set bug queue limits (if it's reached, stop and fix all them)

## Dealing with Bugs

