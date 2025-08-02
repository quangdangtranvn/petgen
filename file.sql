CREATE TABLE nft (
    token_id INT PRIMARY KEY,
    owner_address VARCHAR(100),
    metadata_url TEXT,
    traits JSON,
    status ENUM('active', 'burned', 'frozen') DEFAULT 'active',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Burn an NFT
UPDATE nft
SET owner_address = '0x0000000000000000000000000000000000000000',
    status = 'burned'
WHERE token_id = 101;

-- Freeze an NFT
UPDATE nft
SET status = 'frozen'
WHERE token_id = 102;

LOAD DATA INFILE '/asset/meta/wallets.csv'
INTO TABLE nft
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(token_id, owner_address, metadata_url, traits, status);