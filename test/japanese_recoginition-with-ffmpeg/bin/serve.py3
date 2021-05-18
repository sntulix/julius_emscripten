#!/usr/bin/python3

# -*- coding: utf-8 -*-
#test on python 3.4 ,python of lower version  has different module organization.
import http.server
from http.server import HTTPServer, BaseHTTPRequestHandler
import socketserver

PORT = 6931

Handler = http.server.SimpleHTTPRequestHandler

Handler.extensions_map={
	'.html': 'text/html',
	'.wav': 'wav/audio',
	'.css':	'text/css',
	'.js':	'application/x-javascript',
	'': 'application/octet-stream', # Default
    }

httpd = socketserver.TCPServer(("jetson.local", PORT), Handler)

print("serving at port", PORT)
httpd.serve_forever()
