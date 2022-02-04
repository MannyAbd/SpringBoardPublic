### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
<br>python is used for developing both desktop and web applications where as JS is a client-side language.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you can try to get a missing key (like "c") *without* your programming crashing.
<br> using the setdefault() method. For example from https://www.geeksforgeeks.org/handling-missing-keys-python-dictionaries/:
  
    ``code country_code = {'India' : '0091','Australia' : '0025','Nepal' : '00977'}``
    ``country_code.setdefault('Japan', 'Not Present')``
    ``print(country_code['India'])``
    ``print(country_code['Japan']) ``
    
- What is a unit test?
  <br>it is when your code is put to tests to determine whether your code will work.
- What is an integration test?
 <br>Test that components work together
- What is the role of web application framework, like Flask?
  <br> To support the development of web applications
- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  <br>  Url param works for the subject of the page and Query param is extra infor about the page coming from a form.
- How do you collect data from a URL placeholder parameter using Flask?
  <br>
- How do you collect data from the query string using Flask?
  <br>Using ``return request.args[example]``
- How do you collect data from the body of the request using Flask?
  <br>Using ``request.args.get('example')``
- What is a cookie and what kinds of things are they commonly used for?
  <br>Cookies are a way to store small bits of info on client (browser)
- What is the session object in Flask?
  <br>To track the session data that contains a key-value pair of the session variables.
- What does Flask's `jsonify()` do?
  <br>Turns data into JSON