local ini = require("gta.ini")
local config = ini.parse("gta.ini")
local textures = config.Textures
local bae_main = love.graphics.newImage(config.Textures.BaeMain)
local texture = love.graphics.newImage(config.Textures.addition)
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