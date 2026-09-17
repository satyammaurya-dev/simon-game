# 🎮 Simon Color Flash Game

A simple and interactive **Simon Color Flash Game** built using **HTML, CSS, and JavaScript**.

The game tests the player's **memory and concentration** by generating a sequence of colored flashes. The player has to remember the sequence and click the colors in the correct order.

## 🚀 Live Gameplay

**Game Type:** Memory / Color Sequence Game

The game starts when the player presses a key or starts the game. A color flashes, and with each level, the sequence becomes longer.

The player must reproduce the exact sequence by clicking the colored buttons in the correct order.

---

## ✨ Features

* 🎨 Color-based interactive gameplay
* 🧠 Memory-based sequence challenge
* 📈 Level increases after every correct sequence
* ⚡ Visual color flashing animations
* 🖱️ Mouse click interaction
* ⌨️ Keyboard-based game start
* ❌ Game-over detection
* 🔄 Restart functionality
* 📱 Simple and responsive interface

---

## 🛠️ Technologies Used

### HTML

Used to create the basic structure of the game, including:

* Game heading
* Color buttons
* Game status / level information
* Game layout

### CSS

Used for:

* Game layout and styling
* Color buttons
* Hover and active effects
* Flash animations
* Responsive design

### JavaScript

Used to implement the complete game logic:

* Random color generation
* Creating the game sequence
* Storing the player's sequence
* Comparing player input with the generated sequence
* Level management
* Flashing colors
* Detecting incorrect input
* Game-over logic
* Restarting the game

---

## 🎮 How to Play

1. Start the game by pressing the required key / starting the game.
2. Watch carefully as a color flashes.
3. Click the same color.
4. After a successful round, the game adds another color to the sequence.
5. Remember the complete sequence.
6. Click the colors in the exact same order.
7. If you click the wrong color, the game ends.
8. Restart the game and try to beat your previous level.

### Example

Suppose the game generates:

```text
🟢 → 🔴 → 🟡
```

You need to click:

```text
🟢 → 🔴 → 🟡
```

If you click a different color, the game is over.

---

## 📂 Project Structure

```text
Simon-Game/
│
├── index.html
├── style.css
├── app.js
│
└── README.md
```

---

## 🧠 Game Logic

The JavaScript maintains two important sequences:

```text
Game Sequence
Player Sequence
```

Every new level:

1. A random color is selected.
2. The selected color is added to the game sequence.
3. The complete sequence is flashed to the player.
4. The player starts clicking the colors.
5. Each clicked color is compared with the corresponding game sequence.
6. If all colors are correct, the next level starts.
7. If any color is incorrect, the game ends.

---









