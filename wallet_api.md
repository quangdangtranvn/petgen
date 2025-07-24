# Wallet Asset REST API

A REST API service for querying wallet asset data with parameter-based filtering and search capabilities.

## Features

- Get all wallet assets with sorting and limiting
- Search specific assets by symbol
- Parameter-based search with filters
- Token stack information
- Request logging with metadata
- CORS enabled for web applications
## Installation Wallet

\`\`\`bash (.sh)

public_url = get_public_url("5000")
print(f"Public URL: {public_url}")

\`\`\`

## Installation

\`\`\`bash
pip install -r requirements.txt
\`\`\`

## Running the Server

\`\`\`bash
python wallet_api.py
\`\`\`

The server will start on \`http://0.0.0.0:5000\`

## API Endpoints

### 1. Home - API Information
\`\`\`
GET /
\`\`\`
Returns API information and available endpoints.

### 2. Get All Assets
\`\`\`
GET /assets
\`\`\`
**Query Parameters:**
- \`limit\` (int): Limit number of results
- \`sort_by\` (string): Sort by field (symbol, name, price_usd)
- \`order\` (string): Sort order (asc, desc)

**Example:**
\`\`\`
GET /assets?limit=10&sort_by=price_usd&order=desc
\`\`\`

### 3. Get Asset by Symbol
\`\`\`
GET /assets/<symbol>
\`\`\`
**Example:**
\`\`\`
GET /assets/BTC
\`\`\`

### 4. Search Assets
\`\`\`
GET /assets/search
\`\`\`
**Query Parameters:**
- \`name\` (string): Filter by name (partial match)
- \`symbol\` (string): Filter by symbol (partial match)
- \`min_price\` (float): Minimum price filter
- \`max_price\` (float): Maximum price filter

**Example:**
\`\`\`
GET /assets/search?name=token&min_price=0.01&max_price=1.0
\`\`\`

### 5. Token Stack Information
\`\`\`
GET /stack
\`\`\`
Returns information about stack-related tokens.

### 6. Health Check
\`\`\`
GET /health
\`\`\`
Returns service health status.

## Sample Data Structure

\`\`\`json
{
  "symbol": "BTC",
  "name": "Bitcoin",
  "price_usd": 100000,
  "mining_difficulty": "62.46EH",
  "main_wallet": "bc1plnxe758gsqssw4yty0aqfzw52qc92erld8wgn9vlgdjcglp708ksept7ca"
}
\`\`\`

## Response Format

All responses include:
- \`status\`: "success" or "error"
- \`timestamp\`: ISO format timestamp
- \`data\`: Response data (for successful requests)
- \`message\`: Error message (for failed requests)

## Logging

All requests are logged with metadata including:
- Request method
- Request path
- Query parameters
- Response status