React.createContext() --> is an objeta that have a provider atribute. 

what do addProduct function shoud do?
- not accept duplicates
- acumulate products (new quantities): sobreescribir la cantidad o que se sumen? 
- add new product (if the product is not in the cart)



react_devtools_backend.js:4012 Warning: Cannot update a component (`CartProvider`) while rendering a different component (`CartItem`). To locate the bad setState() call inside `CartItem`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
    at CartItem (http://localhost:3001/static/js/bundle.js:385:75)
    at Cart (http://localhost:3001/static/js/bundle.js:604:75)
    at RenderedRoute (http://localhost:3001/static/js/bundle.js:40303:5)
    at Routes (http://localhost:3001/static/js/bundle.js:40726:5)
    at CartProvider (http://localhost:3001/static/js/bundle.js:1879:5)
    at Router (http://localhost:3001/static/js/bundle.js:40664:15)
    at BrowserRouter (http://localhost:3001/static/js/bundle.js:39011:5)
    at App

    uncaught 
    removeProduct	@	CartContext.js:70
CartItem	@	CartItem.js:16