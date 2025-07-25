 # Tic Tac Toe React App

A beautiful and interactive Tic Tac Toe game built with React and Tailwind CSS using modern component architecture.

## 🎮 Features

- **Classic Gameplay**: Traditional 3x3 Tic Tac Toe rules
- **Component-Based Architecture**: Clean, reusable React components
- **Beautiful UI**: Modern design with Tailwind CSS
- **Score Tracking**: Keep track of wins and draws across multiple games
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions for better UX
- **Game Reset**: Reset individual games or entire score history

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Game.js          # Main game logic and state management
│   ├── Board.js         # 3x3 game board component
│   ├── Square.js        # Individual square/cell component
│   ├── GameStatus.js    # Current player and game status display
│   └── ScoreBoard.js    # Score tracking component
├── App.js               # Main app component
├── index.js             # React entry point
└── index.css            # Tailwind CSS imports and global styles
public/
├── index.html           # HTML template
tailwind.config.js       # Tailwind CSS configuration
package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download** this project to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🎯 How to Play

1. **Player X starts first** (highlighted in blue)
2. **Click any empty square** to place your mark
3. **Players alternate turns** between X and O
4. **Win condition**: Get 3 marks in a row (horizontal, vertical, or diagonal)
5. **Draw condition**: All squares filled with no winner
6. **New Game**: Click "New Game" to start over
7. **Reset Scores**: Clear all score history

## 🧩 Component Details

### `Game.js`
- **Main component** containing all game logic
- **State management** for board, current player, winner, and scores
- **Game logic** including win detection and draw detection
- **Event handlers** for square clicks and game resets

### `Board.js`
- **Renders the 3x3 grid** of squares
- **Passes click events** to parent Game component
- **Manages disabled state** when game is over

### `Square.js`
- **Individual clickable squares**
- **Dynamic styling** based on player (X=blue, O=red)
- **Hover effects** and transition animations
- **Disabled state** when square is occupied or game is over

### `GameStatus.js`
- **Displays current player** or game result
- **Dynamic colors** matching player colors
- **New Game button** with hover effects

### `ScoreBoard.js`
- **Tracks wins** for both players and draws
- **Visual score display** with color-coded sections
- **Clean, card-based design**

## 🎨 Styling

The app uses **Tailwind CSS** for styling with:

- **Gradient background** (blue to indigo)
- **Card-based layout** with shadows and rounded corners
- **Color-coded players**: X (blue), O (red)
- **Hover effects** with scale transformations
- **Responsive design** that works on all screen sizes
- **Focus states** for accessibility

## 🔧 Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm test`**: Launches the test runner
- **`npm run build`**: Builds the app for production
- **`npm run eject`**: Ejects from Create React App (one-way operation)

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Create React App**: React development setup
- **Modern JavaScript**: ES6+ features

## 📱 Responsive Design

The game is fully responsive and works great on:
- **Desktop computers**
- **Tablets**
- **Mobile phones**

## 🎯 Game Logic

The app implements:
- **Win detection** for all 8 possible winning combinations
- **Draw detection** when all squares are filled
- **Turn management** alternating between X and O
- **Score persistence** during the session
- **Game state management** preventing invalid moves

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy playing!** 🎉 