changes what I've done:

1. removed wrapper and update jsx structure.

- btn should be on first place and then modal it self

2. changed classes on modal - only modal, open state, disabled if no open
3. add reference for modal for setting focus trap - yep focus trap..

- add new library for focus trap setting
- set creating and removing focus trap (after modal is open then only modal content is focusable by keyboard)

4. change role of modal to dialog just because role modal is not existing :)
5. add aria-labelledby - for title reading and aria-describedby move to second text in modal

- it will be read by screen reader in order after modal open

6. add events for modal

- on "escape" keyboard press can be modal closed

7. remove marquee - moving content is not a good idea..
8. add aria-label on anchor for redirection to dialog documentation
9. move content of `to learn more` into button text

## styling

1. pointer-events - turn of on modal and then after its opened then turn on

- it will desable all pointer events (we don't want to has it on when modal is not visible)

2. button styling

- there was a problem with color contrast so I added some styling for better visibility
- also added bigger padding to increase button clicable part

3. add disable none if modal is not opened (just to be sure that it's not visible for screen readers)
4. when opened then changed the pointevents to all parts of the modal-content
5. Also I added higher font-weight on anchors just to be more recognized from the text
6. For close button I've changed the icon and added some styling for increase button size and clicable part. Still width and height should be least 24px
7. background for modal - mean around modal should be darked because we're trying to make more visible the modal it self

- for this case I changed background to rgba(0,0,0,.7) or something like that.. just to have least 20-30% opacity with background

8. and finally I added focus styling for visibility when u control page with keyboard. So to be sure where and what we focusing
