const people = [
  { sex: "man", age: 20 },
  { sex: "man", age: 30 },
  { sex: "woman", age: 35 },
  { sex: "man", age: 18 },
  { sex: "woman", age: 38 }
];

// Inicializar contadores e acumuladores
const stats = people.reduce(
  (acc, person) => {
    if (person.sex === "man") {
      acc.menCount++;
      acc.menAges.push(person.age);
    } else if (person.sex === "woman") {
      acc.womenCount++;
      acc.womenAges.push(person.age);
    }
    acc.totalAge += person.age;
    return acc;
  },
  { menCount: 0, womenCount: 0, menAges: [], womenAges: [], totalAge: 0 }
);

// Cálculos adicionais
const avgAge = stats.totalAge / people.length;
const totalMenAge = stats.menAges.reduce((sum, age) => sum + age, 0);
const avgMenAge = totalMenAge / stats.menAges.length;
const womenAbove20Count = stats.womenAges.filter(age => age > 20).length;

// Saída
console.log(`
This result:
- ${stats.menCount} men registered
- ${stats.womenCount} women registered
- The average age of all people is ${avgAge.toFixed(2)}
- The average age of men is ${avgMenAge.toFixed(2)}
- There are ${womenAbove20Count} women over 20 years old.
`)
