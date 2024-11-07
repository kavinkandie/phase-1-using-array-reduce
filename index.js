const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// Using reduce to sum up all battery 
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);
