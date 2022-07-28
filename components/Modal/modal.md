changes what I've done:

1. removed wrapper and update jsx structure.

- btn should be on first place and then modal it self

2. changed classes on modal - only modal, open state, disabled if no open
3. add reference for modal for setting focus trap - yep focus trap..

- add new library for focus trap setting
- set creating and removing focus trap (after modal is open then only modal content is focusable by keyboard)

4. change role of modal to dialog just because role modal is not existing :)
5. add aria-labelledby - for title reading and aria-describedby move to second text in modal
6. add events for modal

- on "escape" keyboard press can be modal closed

7. remove marquee - moving content is not a good idea..
8. add aria-label on anchor for redirection to dialog documentation
9. move content of `to learn more` into button text

I guess thats it :-)
