import os
import requests
import json

refresh_token: str = os.environ['REFRESH_TOKEN']
credentials: str = os.environ['CREDENTIALS']

def lambda_handler(event: any, context: any):
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': f"Basic {credentials}"
    }

    payload = {
        'grant_type': 'refresh_token',
        'refresh_token': refresh_token
    }

    response = requests.post('https://accounts.spotify.com/api/token', headers = headers, data = payload)

    if response.status_code == 200:
        # listening to something

        access_token = response.json()['access_token']

        headers = {
            'Authorization': f"Bearer {access_token}"
        }

        response = requests.get('https://api.spotify.com/v1/me/player/currently-playing?market=US', headers=headers)

        if response.status_code == 200:
            item_data = response.json()['item']

            return_data =  {
                'name': item_data['album']['name'],
                'image': item_data['album']['images'][0]['url'],
                'href': item_data['external_urls']['spotify'],
                'artists': ', '.join([ artist['name'] for artist in item_data['artists'] ]),
                'message': 'whatcha looking at 👀'
            }

            return_response = {
                'statusCode': response.status_code,
                'body': return_data,
            }

        else:
            return_response = {
                'statusCode': response.status_code,
                'body': response.text,
            }

    else:
        return_response = {
            'statusCode': response.status_code,
            'body': response.text,
        }

    return_response['headers'] = {'access-control-allow-origin': '*'}
    
    return return_response
    # returns 204 if no current song
