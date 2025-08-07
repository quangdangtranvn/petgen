// Game Configuration
const GAME_CONFIG = {
    maxPlayers: 4,
    fishSpawnRate: 1500,
    bulletSpeed: 8,
    fishSpeed: 1.5,
    ammoPerPlayer: 50,
    gameTime: 180,
    fishTypes: [
        { name: 'Small Puffin', points: 10, size: 35, speed: 2, color: '#FF6B6B', rarity: 0.4 },
        { name: 'Medium Puffin', points: 25, size: 50, speed: 1.5, color: '#4ECDC4', rarity: 0.3 },
        { name: 'Large Puffin', points: 50, size: 70, speed: 1, color: '#45B7D1', rarity: 0.2 },
        { name: 'Golden Puffin', points: 100, size: 90, speed: 0.8, color: '#FFD700', rarity: 0.1 }
    ]
};

// Game State
let gameState = {
    players: [],
    fish: [],
    bullets: [],
    explosions: [],
    gameStarted: false,
    gameEnded: false,
    currentPlayer: null,
    roomId: 'FISH001',
    gameTime: GAME_CONFIG.gameTime,
    totalFish: 0,
    totalShots: 0,
    soundEnabled: true,
    gameTimer: null,
    fishSpawnTimer: null
};

// API Configuration
const API_URL = 'https://petgen.tf.gd/api'; // Replace with actual PetGen API URL

// Fetch player data from PetGen API
async function fetchPlayers() {
    try {
        const response = await fetch(`${API_URL}/players`);
        const data = await response.json();
        gameState.players = data.players;
        updatePlayerCount();
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}

// Update player count display
function updatePlayerCount() {
    document.getElementById('playerCount').textContent = `${gameState.players.length}/${GAME_CONFIG.maxPlayers}`;
}

// Start the game
async function startGame() {
    if (gameState.players.length < 1) {
        alert('Not enough players to start the game!');
        return;
    }
    
    gameState.gameStarted = true;
    document.getElementById('gameUI').style.display = 'none';
    spawnFish();
    gameLoop();
    
    // Notify PetGen API that the game has started
    await fetch(`${API_URL}/startGame`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomId: gameState.roomId })
    });
}

// Game Loop
function gameLoop() {
    if (!gameState.gameStarted) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw fish
    gameState.fish.forEach(fish => {
        fish.update();
        fish.draw();
    });

    // Update and draw bullets
    gameState.bullets.forEach(bullet => {
        bullet.update();
        bullet.draw();
    });

    // Check for collisions
    checkCollisions();

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Check for collisions between bullets and fish
function checkCollisions() {
    gameState.bullets.forEach(bullet => {
        gameState.fish.forEach(fish => {
            if (fish.checkCollision(bullet)) {
                fish.alive = false;
                bullet.alive = false;
                gameState.currentPlayer.addScore(fish.points);
                createExplosion(fish.x, fish.y);
            }
        });
    });
}

// Create explosion effect
function createExplosion(x, y) {
    const explosion = new Explosion(x, y);
    gameState.explosions.push(explosion);
}

// Initialize the game
async function initGame() {
    await fetchPlayers();
    document.getElementById('joinButton').addEventListener('click', joinGame);
    document.getElementById('startButton').addEventListener('click', startGame);
}

// Call initGame on page load
window.onload = initGame;
