import {scenario as scenario1} from './src/test1.ts';
export {test as test1} from './src/test1.ts';
import {scenario as scenario2} from './src/test2.ts';
export {test as test2} from './src/test2.ts';

export const options = {
  scenarios: {
    scenario1: {...scenario1, exec: 'test1'},
    scenario2: {...scenario2, exec: 'test2'}
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
}

