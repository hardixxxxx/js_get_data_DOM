'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const tPopulation = calcPopulation(populations);
const aPopulation = calcPopulation(populations, populations.length);

totalPopulation.innerHTML = tPopulation.toLocaleString('en-US');
averagePopulation.innerHTML = aPopulation.toLocaleString('en-US');

function calcPopulation(population, average) {
  const total = [...population].reduce((sum, p) => {
    const n = +p.innerHTML.replaceAll(',', '');

    return n + sum;
  }, 0);

  if (average) {
    return Math.round(total / average);
  }

  return total;
}
