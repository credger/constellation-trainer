# Constellation Trainer

## Introduction
Constellation Trainer is a web application that helps users learn to identify the night sky constellations.
The current version contains 30 constellations that are visible from the northern hemisphere.
Toggle switches give users the option to display constellation lines, labels, background stars, and a clickable list of the 30 included constellations. 
Two sort buttons are available that allow users to sort the constellations alphebetically or randomly.
Users can navigate through the list of constellations using the left and right arrow keys.
If labels are toggled off, labels can be quickly viewed by holding down the up arrow key.
Pressing the down arrow key will play an audio label.  

## Technical Information
Stellar data was sourced from the Yale Bright Star catalog: https://github.com/brettonw/YaleBrightStarCatalog.
Stellar positions were converted from celestial coordinates to cartesian coordinates using a stereographic projection: https://mathworld.wolfram.com/StereographicProjection.html.
Stellar magnitudes are reprsented by size, with brighter stars appearing larger.
Only stars with magnitudes <6.5 are included in the application.








