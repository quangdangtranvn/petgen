I'll help you create a complete fish shooting multiplayer game beta using the PetGen repository structure. Here's the complete implementation:

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fish Shooting Multiplayer Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            overflow: hidden;
            height: 100vh;
        }

        #gameContainer {
            position: relative;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(to bottom, #87CEEB 0%, #4682B4 50%, #191970 100%);
            overflow: hidden;
        }

        #gameCanvas {
            position: absolute;
            top: 0;
            left: 0;
            background: transparent;
            cursor: crosshair;
        }

        .player-slot {
            position: absolute;
            width: 200px;
            height: 100px;
            background: rgba(0, 0, 0, 0.7);
            border: 2px solid #FFD700;
            border-radius: 10px;
            color: white;
            padding: 10px;
            font-size: 14px;
        }

        #player1 { bottom: 20px; left: 20px; }
        #player2 { bottom: 20px; right: 20px; }
        #player3 { top: 20px; left: 20px; }
        #player4 { top: 20px; right: 20px; }

        .player-info {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .score {
            font-weight: bold;
            color: #FFD700;
        }

        .ammo {
            color: #FF6B6B;
        }

        #gameUI {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 1000;
        }

        #startButton, #joinButton {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px;
            transition: background 0.3s;
        }

        #startButton:hover, #joinButton:hover {
            background: #45a049;
        }

        .fish {
            position: absolute;
            transition: all 0.1s linear;
            cursor: pointer;
        }

        .bullet {
            position: absolute;
            width: 4px;
            height: 10px;
            background: #FFD700;
            border-radius: 2px;
        }

        .explosion {
            position: absolute;
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, #FF6B6B, #FF8E53, #FF6B6B);
            border-radius: 50%;
            animation: explode 0.5s ease-out forwards;
        }

        @keyframes explode {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
        }

        .bubble {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float 3s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        #roomInfo {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 16px;
        }

        .waiting {
            color: #888;
            font-style: italic;
        }

        .active {
            color: #4CAF50;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="gameContainer">
        <div id="roomInfo">Room: <span id="roomId">ROOM001</span> | Players: <span id="playerCount">0/4</span></div>
        
        <canvas id="gameCanvas"></canvas>
        
        <!-- Player Slots -->
        <div id="player1" class="player-slot">
            <div class="player-info">
                <div>Player 1: <span class="waiting">Waiting...</span></div>
                <div class="score">Score: 0</div>
                <div class="ammo">Ammo: 50</div>
            </div>
        </div>
        
        <div id="player2" class="player-slot">
            <div class="player-info">
                <div>Player 2: <span class="waiting">Waiting...</span></div>
                <div class="score">Score: 0</div>
                <div class="ammo">Ammo: 50</div>
            </div>
        </div>
        
        <div id="player3" class="player-slot">
            <div class="player-info">
                <div>Player 3: <span class="waiting">Waiting...</span></div>
                <div class="score">Score: 0</div>
                <div class="ammo">Ammo: 50</div>
            </div>
        </div>
        
        <div id="player4" class="player-slot">
            <div class="player-info">
                <div>Player 4: <span class="waiting">Waiting...</span></div>
                <div class="score">Score: 0</div>
                <div class="ammo">Ammo: 50</div>
            </div>
        </div>
        
        <div id="gameUI">
            <h1>🐡 Fish Shooting Arena 🐡</h1>
            <p>Multiplayer Fish Shooting Game</p>
            <button id="joinButton">Join Game</button>
            <button id="startButton" style="display: none;">Start Game</button>
        </div>
    </div>

    <script>
        // Game Configuration
        const GAME_CONFIG = {
            maxPlayers: 4,
            fishSpawnRate: 2000,
            bulletSpeed: 5,
            fishSpeed: 1,
            ammoPerPlayer: 50,
            fishTypes: [
                { points: 10, size: 30, speed: 1, color: '#FF6B6B' },
                { points: 20, size: 40, speed: 0.8, color: '#4ECDC4' },
                { points: 50, size: 60, speed: 0.5, color: '#45B7D1' },
                { points: 100, size: 80, speed: 0.3, color: '#96CEB4' }
            ]
        };

        // Game State
        let gameState = {
            players: [],
            fish: [],
            bullets: [],
            gameStarted: false,
            currentPlayer: null,
            roomId: 'ROOM001'
        };

        // Canvas Setup
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Player Class
        class Player {
            constructor(id, name, slot) {
                this.id = id;
                this.name = name;
                this.slot = slot;
                this.score = 0;
                this.ammo = GAME_CONFIG.ammoPerPlayer;
                this.active = false;
            }

            shoot(x, y) {
                if (this.ammo > 0 && gameState.gameStarted) {
                    this.ammo--;
                    const bullet = new Bullet(x, y, this.id);
                    gameState.bullets.push(bullet);
                    this.updateUI();
                }
            }

            addScore(points) {
                this.score += points;
                this.updateUI();
            }

            updateUI() {
                const playerElement = document.getElementById(`player${this.slot}`);
                const playerInfo = playerElement.querySelector('.player-info');
                playerInfo.innerHTML = `
                    <div>Player ${this.slot}: <span class="active">${this.name}</span></div>
                    <div class="score">Score: ${this.score}</div>
                    <div class="ammo">Ammo: ${this.ammo}</div>
                `;
            }
        }

        // Fish Class
        class Fish {
            constructor() {
                const fishType = GAME_CONFIG.fishTypes[Math.floor(Math.random() * GAME_CONFIG.fishTypes.length)];
                this.x = canvas.width + fishType.size;
                this.y = Math.random() * (canvas.height - 200) + 100;
                this.size = fishType.size;
                this.speed = fishType.speed;
                this.points = fishType.points;
                this.color = fishType.color;
                this.alive = true;
                this.direction = Math.random() > 0.5 ? 1 : -1;
            }

            update() {
                this.x -= this.speed * this.direction;
                this.y += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.5;
                
                if (this.x < -this.size || this.x > canvas.width + this.size) {
                    this.alive = false;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                if (this.direction > 0) ctx.scale(-1, 1);
                
                // Draw puffin fish
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size/2, this.size/3, 0, 0, 2 * Math.PI);
                ctx.fill();
                
                // Fish tail
                ctx.beginPath();
                ctx.moveTo(-this.size/2, 0);
                ctx.lineTo(-this.size, -this.size/4);
                ctx.lineTo(-this.size, this.size/4);
                ctx.closePath();
                ctx.fill();
                
                // Fish eye
                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.arc(this.size/4, -this.size/6, this.size/8, 0, 2 * Math.PI);
                ctx.fill();
                
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(this.size/4, -this.size/6, this.size/16, 0, 2 * Math.PI);
                ctx.fill();
                
                ctx.restore();
            }

            checkCollision(bullet) {
                const dx = this.x - bullet.x;
                const dy = this.y - bullet.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < this.size / 2;
            }
        }

        // Bullet Class
        class Bullet {
            constructor(x, y, playerId) {
                this.x = x;
                this.y = y;
                this.playerId = playerId;
                this.speed = GAME_CONFIG.bulletSpeed;
                this.alive = true;
            }

            update() {
                this.y -= this.speed;
                if (this.y < 0) {
                    this.alive = false;
                }
            }

            draw() {
                ctx.fillStyle = '#FFD700';
                ctx.fillRect(this.x - 2, this.y - 5, 4, 10);
            }
        }

        // Game Functions
        function joinGame() {
            if (gameState.players.length < GAME_CONFIG.maxPlayers) {
                const playerName = prompt("Enter your name:") || `Player${gameState.players.length + 1}`;
                const player = new Player(
                    Date.now(),
                    playerName,
                    gameState.players.length + 1
                );
                player.active = true;
                gameState.players.push(player);
                
                if (gameState.players.length === 1) {
                    gameState.currentPlayer = player;
                }
                
                player.updateUI();
                updatePlayerCount();
                
                if (gameState.players.length >= 2) {
                    document.getElementById('startButton').style.display = 'inline-block';
                }
                
                if (gameState.players.length === GAME_CONFIG.maxPlayers) {
                    document.getElementById('joinButton').style.display = 'none';
                }
            }
        }

        function startGame() {
            if (gameState.players.length >= 2) {
                gameState.gameStarted = true;
                document.getElementById('gameUI').style.display = 'none';
                spawnFish();
                gameLoop();
            }
        }

        function spawnFish() {
            if (gameState.gameStarted) {
                gameState.fish.push(new Fish());
                setTimeout(spawnFish, GAME_CONFIG.fishSpawnRate + Math.random() * 1000);
            }
        }

        function updatePlayerCount() {
            document.getElementById('playerCount').textContent = `${gameState.players.length}/4`;
        }

        function createExplosion(x, y) {
            const explosion = document.createElement('div');
            explosion.className = 'explosion';
            explosion.style.left = x - 25 + 'px';
            explosion.style.top = y - 25 + 'px';
            document.getElementById('gameContainer').appendChild(explosion);
            
            setTimeout(() => {
                explosion.remove();
            }, 500);
        }

        function createBubbles() {
            for (let i = 0; i < 5; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.left = Math.random() * canvas.width + 'px';
                bubble.style.top = canvas.height + 'px';
                bubble.style.width = bubble.style.height = (Math.random() * 20 + 10) + 'px';
                bubble.style.animationDelay = Math.random() * 2 + 's';
                document.getElementById('gameContainer').appendChild(bubble);
                
                setTimeout(() => {
                    bubble.remove();
                }, 3000);
            }
        }

        function gameLoop() {
            if (!gameState.gameStarted) return;
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw fish
            gameState.fish = gameState.fish.filter(fish => {
                if (fish.alive) {
                    fish.update();
                    fish.draw();
                    return true;
                }
                return false;
            });
            
            // Update and draw bullets
            gameState.bullets = gameState.bullets.filter(bullet => {
                if (bullet.alive) {
                    bullet.update();
                    bullet.draw();
                    return true;
                }
                return false;
            });
            
            // Check collisions
            gameState.bullets.