from flask import Flask, request, render_template
from forex_python.converter import CurrencyCodes, CurrencyRates

app = Flask(__name__)

currency_codes = ['EUR', 'IDR', 'BGN', 'ILS', 'GBP', 'DKK', 'CAD', 'JPY', 'HUF', 'RON', 'MYR', 'SEK', 'SGD', 'HKD', 'AUD', 'CHF', 'KRW', 'CNY', 'TRY', 'HRK', 'NZD', 'THB', 'USD', 'NOK', 'RUB', 'INR', 'MXN', 'CZK', 'BRL', 'PLN', 'PHP', 'ZAR']

c_c = CurrencyCodes()
c = CurrencyRates()

@app.route('/')
def show_currency():
    return f"<h1> currency converter </h1> \
        <a href='/form'> Go to currency converter</a>"

@app.route('/form')
def show_form():
    codes = currency_codes 
    return render_template('form.html', codes=codes)

@app.route('/convert')
def convert_currency():
    money_from = request.args['convert_from'].upper()#take amount from here
    money_to = request.args['convert_to'].upper()#convert from amount on here
    amount = request.args['amount']
    codes = currency_codes

    #gives message if empty or not a valid code
    if money_from in codes:
        print('yeh') 
    else:
        return f"<p>Enter valid currency code</p> <a href='/form'> Go back</a>"

    if money_to in codes:
        print('yeh') 
    else:
        return f"<p>Enter valid currency code</p> <a href='/form'> Go back</a>"
        
    if amount is '':
        return f"<p>Enter amount to convert</p> <a href='/form'> Go back</a>"
    #forex converter methods
    converted = round(c.convert(money_from, money_to, float(amount)),2)
    end_symbol = c_c.get_symbol(money_to)
    start_symbol = c_c.get_symbol(money_from)

    return render_template('converted.html', money_from=money_from, money_to=money_to, codes=codes, amount=amount,converted=converted, end_symbol=end_symbol, start_symbol=start_symbol)

@app.errorhandler(404)
def not_found(e):
    return f"<h1> Page Doesn't exist</h1> \
        <a href='/form'> Go home</a>"