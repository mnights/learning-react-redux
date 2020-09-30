Background issue #1
body
    Accordion
        div
    div
        Dropdown (*1 not in DOM, just show everything below is a dropdown)
            div.ui.form
                div.ui.selection


*1 Dropdown component can only set up event handlers easily (using JSX props) on elements
    it creates.  I.e. div.ui.form, div.ui.selection
    * We are trying to close the dropdown when elements OUTSIDE of the dropdown elements. This
        is the issue.
    
Concepts #1 - Event bubbling

html
    body
        div#root
            Dropdown (reference)
                div.ui.form
                    div.ui.selection [onClick]
                        div.ui.menu
                            div.item [onClick]
                            div.item [onClick]
                           
- Browser itself creates an Event object. 
    - Event object describes details like what element on screen is clicked and where mouse is.
    - Browser then hands off that object to React.
    - React does a little processing, and then provides an Event object to our [onClick] event handler.
    - When a user clicks on an element, the Event travels up to the next parent element, and 
        passed in the next [onClick] event handlers. The Event 'bubbles' up the DOM structure
        invoking each onClick event handler defined.
   
    - Setup a manual event listener.
        - setup listener on body element. then clicking anywhere on element inside body will bubble
            up in the DOM to the body element.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
