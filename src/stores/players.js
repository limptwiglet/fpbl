import Chance from 'chance';
import { writable } from "svelte/store";

let chance = new Chance('test');

const store = () => {
  const state = {
    players: Array(20).fill({}).map(() => ({
      id: chance.guid(),
      name: chance.name(),
      position: chance.pick(['Front', 'Mid', 'Back', 'Snake', 'Dorritos']),
      speed: chance.integer({ min: 20, max: 90 }),
      stamina: chance.integer({ min: 20, max: 90 }),
      health: chance.integer({ min: 20, max: 90 }),
      agility: chance.integer({ min: 20, max: 90 }),
      age: chance.age({ type: 'adult' }),
      status: 'idle'
    }))
  }

  const { subscribe, update } = writable(state);

  const methods = {
    byId(id) {
      return state.players.find(player => player.id === id);
    },

    train(id) {
      const player = { ...methods.byId(id), status: 'training' };

      update(state => {
        let players = state.players.map(player => {
          if (player.id === id) {
            return {
              ...player,
              status: 'training'
            }
          }

          return player;
        });

        return {
          ...state,
          players
        };
      });
    }
  };

  return {
    subscribe,
    ...methods
  };
};

export default store();
