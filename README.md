oneheight
=========

jQuery plugin that maxes out the height of the elements within a container so they have equal heights.

### Usage ###
Apply `oneheight()` on the (container) element which contains the children with unequal heights.

````js
$(container).oneheight();
````


To specify the (direct) child elements which must be calculated and altered you can use the `children` option.<br />
This option accepts a CSS-selector. By default the plugin will select all direct children elements.

##### example ######
Select all (direct) children `div` elements with a class of `child`, within the element with a class of `container`, the same height. Where the height is based on the heighest `div` element with a class of `child`.
````js
$('.container').oneheight({
  children: 'div.child'
});
````
