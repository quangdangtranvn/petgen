from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import logging
from datetime import datetime
import requests
import pandas as pd

# URL đến raw content của file trên GitHub
files = {
    "wallet_api.md": "https://raw.githubusercontent.com/quangdangtranvn/petgen/main/wallet_api.md",
    "wallet_api.py": "https://raw.githubusercontent.com/quangdangtranvn/petgen/main/wallet_api.py"
}

results = []

for fname, url in files.items():
    r = requests.get(url)
    if r.status_code == 200:
        text = r.text.splitlines()
        for line in text:
            if "/assets" in line or "@" in line or "GET" in line or "POST" in line:
                results.append({
                    "file": fname,
                    "line": line.strip()
                })

# Chuyển dữ liệu sang bảng
df = pd.DataFrame(results)

# In bảng dạng Markdown
print(df.to_markdown(index=False))
url = "https://wallet.kesug.com/asset/stack"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    df = pd.DataFrame(data)
    print(df)
else:
    print("Lỗi khi gọi API:", response.status_code)
# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Sample wallet asset data (simulating the data that should be on the website)
SAMPLE_ASSETS = [
    {
        "symbol": "BTC",
        "name": "Bitcoin",
        "price_usd": 50000,
        "mining_difficulty": "45EH",
        "main_wallet": "bc1plnxe758gsqssw4yty0aqfzw52qc92erld8wgn9vlgdjcglp708ksept7ca"
    },
    {
        "symbol": "ETH", 
        "name": "Ethereum",
        "price_usd": 2650.75,
        "mining_difficulty": "N/A",
        "main_wallet": "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638"
    },
    {
        "symbol": "BAE",
        "name": "Bae Coin",
        "price_usd": 22.0,
        "mining_difficulty": "20EH",
        "main_wallet": "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984"
    },
    {
        "symbol": "SOI",
        "name": "SOI Stack Token", 
        "price_usd": 2,
        "mining_difficulty": "2EH",
        "main_wallet": "0x93E8B6997D0b1b7D63aF50E0D5db3c921b77d58a"
    }
]

@app.route('/', methods=['GET'])
def home():
    \"\"\"Home endpoint with API information\"\"\"
    logger.info(f"Request received: {request.method} {request.path}")
    return jsonify({
        "message": "Wallet Asset REST API",
        "version": "1.0.0",
        "endpoints": {
            "/assets": "Get all assets",
            "/assets/<symbol>": "Get specific asset by symbol",
            "/assets/search": "Search assets with parameters",
            "/stack": "Get token stack information"
        }
    })

@app.route('/assets', methods=['GET'])
def get_all_assets():
    \"\"\"Get all wallet assets\"\"\"
    logger.info(f"Request received: {request.method} {request.path}")
    
    # Get query parameters
    limit = request.args.get('limit', type=int)
    sort_by = request.args.get('sort_by', 'symbol')
    order = request.args.get('order', 'asc')
    
    assets = SAMPLE_ASSETS.copy()
    
    # Sort assets
    reverse = order.lower() == 'desc'
    if sort_by in ['symbol', 'name']:
        assets.sort(key=lambda x: x[sort_by].lower(), reverse=reverse)
    elif sort_by == 'price_usd':
        assets.sort(key=lambda x: x[sort_by], reverse=reverse)
    
    # Apply limit
    if limit:
        assets = assets[:limit]
    
    logger.info(f"Returning {len(assets)} assets")
    return jsonify({
        "status": "success",
        "count": len(assets),
        "data": assets,
        "timestamp": datetime.now().isoformat()
    })

@app.route('/assets/<symbol>', methods=['GET'])
def get_asset_by_symbol(symbol):
    \"\"\"Get specific asset by symbol\"\"\"
    logger.info(f"Request received: {request.method} {request.path} - Symbol: {symbol}")
    
    symbol = symbol.upper()
    asset = next((asset for asset in SAMPLE_ASSETS if asset['symbol'] == symbol), None)
    
    if asset:
        logger.info(f"Found asset: {symbol}")
        return jsonify({
            "status": "success",
            "data": asset,
            "timestamp": datetime.now().isoformat()
        })
    else:
        logger.warning(f"Asset not found: {symbol}")
        return jsonify({
            "status": "error",
            "message": f"Asset with symbol '{symbol}' not found",
            "timestamp": datetime.now().isoformat()
        }), 404

@app.route('/assets/search', methods=['GET'])
def search_assets():
    \"\"\"Search assets with parameters\"\"\"
    logger.info(f"Request received: {request.method} {request.path}")
    
    # Get search parameters
    name = request.args.get('name', '').lower()
    symbol = request.args.get('symbol', '').upper()
    min_price = request.args.get('min_price', type=float)
    max_price = request.args.get('max_price', type=float)
    
    filtered_assets = SAMPLE_ASSETS.copy()
    
    # Apply filters
    if name:
        filtered_assets = [asset for asset in filtered_assets if name in asset['name'].lower()]
    
    if symbol:
        filtered_assets = [asset for asset in filtered_assets if symbol in asset['symbol']]
    
    if min_price is not None:
        filtered_assets = [asset for asset in filtered_assets if asset['price_usd'] >= min_price]
    
    if max_price is not None:
        filtered_assets = [asset for asset in filtered_assets if asset['price_usd'] <= max_price]
    
    logger.info(f"Search filters applied - Found {len(filtered_assets)} assets")
    return jsonify({
        "status": "success",
        "count": len(filtered_assets),
        "filters": {
            "name": name or None,
            "symbol": symbol or None,
            "min_price": min_price,
            "max_price": max_price
        },
        "data": filtered_assets,
        "timestamp": datetime.now().isoformat()
    })

@app.route('/stack', methods=['GET'])
def get_token_stack():
    \"\"\"Get token stack information\"\"\"
    logger.info(f"Request received: {request.method} {request.path}")
    
    # Filter for stack-related tokens
    stack_tokens = [asset for asset in SAMPLE_ASSETS if 'stack' in asset['name'].lower() or asset['symbol'] == 'STACK']
    
    total_value = sum(asset['price_usd'] for asset in stack_tokens)
    
    return jsonify({
        "status": "success",
        "stack_info": {
            "total_tokens": len(stack_tokens),
            "total_value_usd": round(total_value, 2),
            "tokens": stack_tokens
        },
        "timestamp": datetime.now().isoformat()
    })

@app.route('/health', methods=['GET'])
def health_check():
    \"\"\"Health check endpoint\"\"\"
    logger.info(f"Request received: {request.method} {request.path}")
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "service": "Wallet Asset API"
    })

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "status": "error",
        "message": "Endpoint not found",
        "timestamp": datetime.now().isoformat()
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "status": "error", 
        "message": "Internal server error",
        "timestamp": datetime.now().isoformat()
    }), 500

if __name__ == '__main__':
    logger.info("Starting Wallet Asset REST API...")
    app.run(host='0.0.0.0', port=5000, debug=True)
