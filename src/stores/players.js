import Chance from 'chance';
import {readable} from "svelte/store";

let chance = new Chance('test');

const rows = Array(30).fill({}).map(() => ({
  id: chance.guid(),
  name: chance.name(),
  position: chance.pick(['Front', 'Mid', 'Back', 'Snake', 'Dorritos']),
  speed: chance.integer({ min: 20, max: 90 }),
  stamina: chance.integer({ min: 20, max: 90 }),
  health: chance.integer({ min: 20, max: 90 }),
  agility: chance.integer({ min: 20, max: 90 }),
  age: chance.age({ type: 'adult' })
}));

export default readable(rows, set => {
  set(rows);
});
