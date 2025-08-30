1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    getElementById --> selects an element with the specified ID
    getElementsByClassName --> selects all elements that has same class name
    querySelector --> select the first element that matches the CSS selector
    querySelectorAll --> select all element that matches the CSS selector
   
2. How do you create and insert a new element into the DOM?
   To create an element i can use document.createElement()
   To incert i can use parent.appendChild() or parent.insertBefore() 

3. What is Event Bubbling and how does it work?
    Event Bubbling is when an event (like a click) starts on the element you clicked and then spreads up to its parent elements.
    For example, clicking a button inside a div can trigger both the button’s click and the div’s click.

4. What is Event Delegation in JavaScript? Why is it useful?
    Event Delegation is a technique where we attach a single event listener to a parent element instead of adding listeners to each child element.
    When an event happens on a child, it bubbles up to the parent, and the parent can handle it.
    It is useful because it needs fewer event  listner which increase the performance.
    
5. What is the difference between preventDefault() and stopPropagation() methods?
   preventDefault() use to prevent the default behavior of a browser for an event like for form each time we submit it refreshes the page.
   stopPropagation() is a built-in JavaScript method that we call on an event, to stop it from affecting parent elements.
