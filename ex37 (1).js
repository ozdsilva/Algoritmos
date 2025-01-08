// Constants
const workers = {
  woman: [
    { maxTime: 15, multiplier: 1.05 },
    { maxTime: 20, multiplier: 1.12 },
    { maxTime: Infinity, multiplier: 1.23 },
  ],
  man: [
    { maxTime: 20, multiplier: 1.03 },
    { maxTime: 30, multiplier: 1.13 },
    { maxTime: Infinity, multiplier: 1.25 },
  ],
};

// Function to determine the multiplier
const getMultiplier = (sex, time) => {
  const workerMultipliers = workers[sex];
  if (!workerMultipliers) {
    throw new Error("Invalid sex. Use 'woman' or 'man'.");
  }

  // Find the appropriate multiplier based on time
  const multiplierData = workerMultipliers.find(({ maxTime }) => time <= maxTime);
  return multiplierData ? multiplierData.multiplier : null;
};

// Function to calculate the new salary
const calculateNewSalary = (sex, time, salary) => {
  if (salary <= 0) {
    throw new Error("Salary must be greater than 0.");
  }
  const multiplier = getMultiplier(sex, time);
  if (!multiplier) {
    throw new Error("Unable to calculate multiplier.");
  }

  const newSalary = salary * multiplier;
  return newSalary.toFixed(2);
};

// Inputs
const sex = "woman";
const time = 31;
const salary = 1000;

// Calculation
try {
  const newSalary = calculateNewSalary(sex, time, salary);
  console.log(`The new salary will be USD ${newSalary}.`);
} catch (error) {
  console.error(error.message);
}
