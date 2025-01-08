// Constants
const reward = {
  points: {
    short: 2,
    medium: 5,
    long: 10,
  },
  cash: 0.05,
};

const calculateReward = (time) => {
  let multiplier;

  if (time <= 10) {
    multiplier = reward.points.short;
  } else if (time <= 20) {
    multiplier = reward.points.medium;
  } else {
    multiplier = reward.points.long;
  }

  const payment = time * multiplier * reward.cash;
  return payment.toFixed(2);
};

const time = 19;
const payment = calculateReward(time);

console.log(`Your reward this month is USD ${payment}.`);