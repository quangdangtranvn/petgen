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