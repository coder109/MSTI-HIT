from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import unquote

class CORSHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

# 然后，你可以像平常一样启动服务器
def run(server_class=HTTPServer, handler_class=CORSHTTPRequestHandler):
    server_address = ('', 8000)  # 服务器地址和端口
    httpd = server_class(server_address, handler_class)
    print("Starting httpd server on port 8000...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
