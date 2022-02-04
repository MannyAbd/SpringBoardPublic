from unittest import TestCase
from app import app

class AppTestCase(TestCase):
    def test_converter(self):
        with app.test_client() as client:
            res = client.get('/form')
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code,200)
            self.assertIn('<p>Convert From:</p>',html)

    def test_converter_form(self):
        with app.test_client() as client:
            res = client.get('/form', data={'codes': 'USD'})
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code,200)
            self.assertIn('USD',html)
            
