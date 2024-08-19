const prisma = require('./client.cjs');
const { createPlayer } = require('./player.cjs')
const { createChessClub, playerExists } = require('./chess-club.cjs');

let paulExists = false;

const syncAndSeed = async() => {
  try {
    await createPlayer("Malakai");

    await createChessClub("Astoria Chess Club", "Wednesday at 6 PM", "Paul", "Astoria Beer and Cheese");
    await createChessClub("North Brooklyn Chess Club", "Tuesday at 6 PM", "Momoh", "Buttery Bar");
    await createChessClub("Ridgewick Chess Club", "Thursday at 6 PM", "Mookie", "Buttery Bar");
    
    paulExists = await playerExists("Paul");
    
    await prisma.$disconnect()

  } catch (error) {
    console.log(error);
  }
}

syncAndSeed();
console.log(paulExists);