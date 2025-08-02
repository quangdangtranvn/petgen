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