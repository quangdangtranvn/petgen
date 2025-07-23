local ini = require("gta.ini")
local config = ini.parse("gta.ini")
local bae_main = love.graphics.newImage(config.Textures.BaeMain)
local texture = love.graphics.newImage(config.Textures.addition)
love.graphics.draw(bae_main, x, y)
love.graphics.draw(texture, x, y)
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
        print("[PetGen] 🔄 Loaded local JPG Minted Provided texture: " .. name)
    else
        print("[PetGen] ⚠️ Texture not found locally please contact owner: " .. name)
    end
end