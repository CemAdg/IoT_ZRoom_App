#first app
import os
import json
import time
from flask import Flask, request, jsonify, abort
from flask_cors import CORS

def create_app(test_config=None):

    app = Flask(__name__)
    CORS(app)

    """
    CORS Headers
    after_request decorator to set Access-Control-Allow
    """
    @app.after_request
    def after_request(response):
        response.headers.add(
            'Access-Control-Allow-Headers',
            'Content-Type,Authorization,true')
        response.headers.add(
            'Access-Control-Allow-Methods',
            'GET,POST,PATCH,DELETE,OPTIONS')
        return response


    """
    Check if app is running
    """
    @app.route('/', methods=['POST', 'GET'])
    def health():
        return jsonify("Healthy")


    """
    GET /lamp/<int:lamp_id>/activate
    Activate lamp according to the lamp_id that is sent from the corresponding button in the React App Client
    """    
    @app.route('/lamp/<int:lamp_id>/activate', methods=['GET'])
    def activate_lamp(lamp_id):
        
        if lamp_id > 3:
            abort(404)

        try:
        
            if lamp_id == 1:
                # Leuchte 1 für Reaktion "Frage" (BLAU)
                # activate GPIO pins

                time.sleep(5)

                # dectivate GPIO pins 

            if lamp_id == 2:
                # Leuchte 2 für Reaktion "Daumen hoch" (GRÜN)
                # activate GPIO pins 

                time.sleep(5)

                # dectivate GPIO pins

            if lamp_id == 3:
                # Leuchte 3 für Reaktion "Problem" (ROT)
                # activate GPIO pins  

                time.sleep(5)

                # dectivate GPIO pins             


            return jsonify({
                'lamp_id': lamp_id,
                'success': True
            })


        except BaseException:
            abort(422)


    """
    GET /lamp/reset
    Reset all lamps
    """    
    @app.route('/lamp/reset', methods=['GET'])
    def reset_lamps():
        
        try:
        
             # deactivate all GPIO Pins 

            return jsonify({
                'lamp_id': lamp_id,
                'success': True
            })

        except BaseException:
            abort(422)



    '''
    error handlers for aborts
    '''

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            "success": False,
            "error": 400,
            "message": "bad request"
        }), 400

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            "success": False,
            "error": 404,
            "message": "resource not found"
        }), 404

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({
            "success": False,
            "error": 422,
            "message": "unprocessable"
        }), 422

    return app

app = create_app()

if __name__ == '__main__':
    app.run(host = "0.0.0.0")

