// Constants
const workers = {
  woman: {
    time1: 1.05,
    time2: 1.12,
    time3: 1.23,
  },
  man: {
    time1: 1.03,
    time2: 1.13,
    time3: 1.25,
  }
};

const calculateNewSalary = (sex, time) => {
  let multiplier;

  if (sex === "woman") {
    if (time < 15) {
      multiplier = workers.woman.time1;
    } else if (time <= 20) {
      multiplier = workers.woman.time2;
    } else {
      multiplier = workers.woman.time3;
  }} else {
    if (time < 20) {
      multiplier = workers.man.time1;
    } else if (time <= 30) {
      multiplier = workers.man.time2;
    } else {
      multiplier = workers.man.time3;
  }}

  const newSalary = salary * multiplier
  return newSalary.toFixed(2);
};

const time = 31
const sex = "woman"
const salary = 1000;
const newSalary = calculateNewSalary(sex, time);

console.log(`The new salary will be USD ${newSalary}.`);