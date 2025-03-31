import http from 'k6/http';
import { sleep, check } from 'k6';

export const scenario = {
  executor: 'ramping-vus',
  stages: [
    { duration: '2s', target: 10 },
    { duration: '5s', target: 20 },
    { duration: '5s', target: 0 },
  ],
}

export function test() {
  let res = http.get('https://quickpizza.grafana.com/');
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}