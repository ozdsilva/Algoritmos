// Constants
const PRICES = {
  popular: {
    daily: 90,
    kmRate: {
      short: 0.2, // <= 100 Km
      long: 0.1   // > 100 Km
    }
  },
  luxe: {
    daily: 150,
    kmRate: {
      short: 0.3, // <= 200 Km
      long: 0.25  // > 200 Km
    }
  }
};

// Inputs
const type = "luxe"; // "popular" or "luxe"
const distance = 201;
const days = 10;

// Function to calculate total price
function calculateTotalPrice(type, distance, days) {
  const dailyRate = PRICES[type].daily;
  const kmRate = distance <= (type === "popular" ? 100 : 200)
    ? PRICES[type].kmRate.short
    : PRICES[type].kmRate.long;

  return distance * kmRate + days * dailyRate;
}

// Calculate and log the total price
const total = calculateTotalPrice(type, distance, days);
console.log(`The total price is USD ${total.toFixed(2)}.`);
