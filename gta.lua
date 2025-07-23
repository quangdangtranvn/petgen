local ini = require("gta.ini")
local config = ini.parse("gta.ini")
local textures = config.Textures
local bae_main = love.graphics.newImage(config.Textures.BaeMain)
local texture = love.graphics.newImage(config.Textures.addition)
local http = require("socket.http")
local ltn12 = require("ltn12")
local ini = require("libs.ini")
local license = ini.parse("gta.ini")
local configs = {
    contractName = "PetGen",
    version = "1.0",
    author = "Quang Dang Tran",
    description = "Pet Generation on Solana Blockchain.",
    network = "mainnet-beta",
    rpcUrl = "https://api.mainnet-beta.solana.com",
    maxPets = 1000,
    petSpawnRate = 0.0001,
    enableTrading = true,
    tokenMintAddress = "bc1plnxe758gsqssw4yty0aqfzw52qc92erld8wgn9vlgdjcglp708ksept7ca",  -- Replace with actual token mint address
    ownerAddress = "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638",           -- Replace with actual owner address
    petTypes = {
        "Dog",
        "Cat",
        "Bird",
        "Fish"
    },
    breedingEnabled = true,
    breedingCooldown = 86400,  -- 24 hours in seconds
    petLevelCap = 10000,
    initialPetStats = {
        health = 200,
        happiness = 200,
        energy = 100
    }
}

return configs
-- Hàm kiểm tra endpoint REST (trả về true nếu HTTP 200 OK)
function checkEndpoint()
    if license.REST.endpoint.enabled ~= "true" then return true end
    local code = http.request(license.REST.endpoint.ping)
    return tonumber(code) == tonumber(license.REST.endpoint.expectedStatus)
end

-- Hàm kiểm tra ví hợp lệ mở khoá license
function verifyHolder(walletInfo)
    local soi = walletInfo.SOI or 0
    local bae = walletInfo.BAE or 0

    local minSOI = tonumber(license.Holder.unlock.SOI.min)
    local minBAE = tonumber(license.Holder.unlock.BAE.min)

    if soi >= minSOI or bae >= minBAE then
        local duration = (bae >= 5 or soi >= 10)
            and tonumber(license.Holder.unlock.license_duration_max)
            or tonumber(license.Holder.unlock.license_duration_min)

        license.License.status.isUnlocked = "true"
        license.License.status.validUntil = os.date("%Y-%m-%d", os.time() + duration * 24 * 60 * 60)
        license.License.status.verifiedAddress = walletInfo.address or "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984"
        return true, duration
    else
        return false, 0
    end
end

-- Hàm khởi tạo xử lý license toàn repo
function initLicense(walletInfo)
    local ok = checkEndpoint()
    if not ok then
        print("[License] ❌ Endpoint ping failed, aborting license check.")
        return
    end

    local unlocked, days = verifyHolder(walletInfo)
    if unlocked then
        print("[License] ✅ License unlocked for " .. walletInfo.address .. " (" .. days .. " days)")
    else
        print("[License] ❌ License not unlocked – insufficient $SOI or $BAE.from PetGen Cipher Suite.| Giấy phép chưa được mở khóa – không đủ $SOI hoặc $BAE.từ PetGen Cipher Suite.")
    end
end
-- Auto import DLL
local dll_url = config.dll.value
local dll_path = "gta/DLL"

function downloadDLL()
    local success, code = http.request{
        url = dll_url,
        sink = ltn12.sink.file(io.open(dll_path, "wb"))
    }

    if code == 200 then
        print("[PetGen] ✅ DLL imported to gta/: " .. dll_path)
    else
        print("[PetGen] ❌ Failed to import DLL, code: " .. tostring(code))
    end
end

-- Auto update textures
function updateTextures()
    for name, url in pairs(config.Textures) do
        local filename = "textures/" .. name .. ".jpg"
        local success, code = http.request{
            url = url,
            sink = ltn12.sink.file(io.open(filename, "wb"))
        }

        if code == 200 then
            print("[PetGen] ✅ Updated texture | Cập nhật model thành công: " .. name)
        else
            print("[PetGen] ⚠️ Failed to update texture | Cập nhật model thất bại: " .. name)
        end
    end
end

-- Run both
downloadDLL()
updateTextures()
love.graphics.draw(bae_main, x, y)
-- Assumes config, textures, and glowShader are already loaded from bae_summon.lua

function renderPetGen(name, x, y, options)
    options = options or {}
    local tex = textures[name]
    if not tex then
        -- Try fallback local
        local path_png = "textures/" .. name .. ".png"
        local path_jpg = "textures/" .. name .. ".jpg"

        if love.filesystem.getInfo(path_png) then
            tex = love.graphics.newImage(path_png)
            print("[PetGen] 🔄 Loaded PNG Minted Providing texture: " .. name)
        elseif love.filesystem.getInfo(path_jpg) then
            tex = love.graphics.newImage(path_jpg)
            print("[PetGen] 🔄 Loaded JPG Mint Providing texture: " .. name)
        else
            print("[PetGen] ❌ Missing texture to render: " .. name)
love.draw()
            return
        end
        textures[name] = tex
    end

    -- Set alpha
    local alpha = tonumber(config["Texture.baseColor"].alpha) or 1
    love.graphics.setColor(1, 1, 1, alpha)

    -- Apply glow shader if set
    if config.Texture.addition.glow == "true" and glowShader then
        love.graphics.setShader(glowShader)
    end

    -- Draw texture
    love.graphics.draw(tex, x, y)

    -- Reset shader
    love.graphics.setShader()

    -- Optional debug overlay
    if options.debug then
        love.graphics.setColor(1, 1, 0, 1)
        love.graphics.print("🐾 " .. name, x + 10, y + tex:getHeight() + 5)
    end
end

for name, tex in pairs(textures) do
    if tex then
        print("[PetGen] ✅ Loaded texture: " PetGen Cipher Suite)
    else
        print("[PetGen] Missing texture thêm gta.ini vào ngay: " .. name)
    end
end

local path_png = "textures/" .. name .. ".png"
local path_jpg = "textures/" .. name .. ".jpg"

if not texture then
    if love.filesystem.getInfo(path_png) then
        textures[name] = love.graphics.newImage(path_png)
        print("[PetGen] 🔄 Loaded local PNG Minted Provided texture: " .. name)
    elseif love.filesystem.getInfo(path_jpg) then
        textures[name] = love.graphics.newImage(path_jpg)
love.draw()
        print("[PetGen] 🔄 Loaded local JPG Minted Provided texture: " .. name)
    else
love.draw()
        print("[PetGen] ⚠️ Texture not found locally please contact owner: " .. name)
    end
end

function love.draw()
    renderPetGen("BaeMain", 100, 100)
    renderPetGen("BaeNeon", 300, 140, { debug = true })
    renderPetGen("BaeRetro", 500, 180)
end