// Constants
const reward = {
  points:{
    short: 2,
    medium: 5,
    long: 10
  },
  cash:0.05
}

let time = 50
let payment = 0

if (time <= 10) {
  console.log(reward.cash)
  payment = time * reward.points.short * reward.cash
} else if (time <= 20) {
  payment = time * reward.points.medium * reward.cash
} else {
  payment = time * reward.points.long * reward.cash
}

console.log(`Your reward this mounth is USD ${payment}.`)
