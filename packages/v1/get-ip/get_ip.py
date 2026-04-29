import requests

def main(args, ctx=None):
  response = requests.get('https://ifconfig.me')
  return {'ip': response.text.strip()}
