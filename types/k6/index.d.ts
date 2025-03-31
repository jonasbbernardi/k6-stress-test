declare module 'k6' {
  export {
    fail, group, randomSeed, sleep, JSONValue, JSONArray, JSONObject
  } from '@types/k6';

  /**
   * Run checks on a value.
   * https://grafana.com/docs/k6/latest/javascript-api/k6/check/
   * @template VT - Value type.
   * @param val - Value to test.
   * @param sets - Tests (checks) to run on the value.
   * @param tags - Extra tags to attach to metrics emitted.
   * @returns `true` if all checks have succeeded, otherwise `false`.
   * @example
   * check(res, {
   *  "response code was 200": (res) => res.status == 200,
   *  "body size was 1234 bytes": (res) => res.body.length == 1234,
   * });
   */
  export function check<VT>(val: VT, sets: Checkers<VT>, tags?: object): boolean;

  /**
   * Named check procedures.
   * @template VT - Value type.
   */
  export interface Checkers<VT> {
    [description: string]: Checker<VT>;
  }

  interface Checker<VT> {
    /**
     * Check procedure.
     * @param val - Value to check.
     * @returns Whether check passed.
     */
    (val: VT): boolean | Promise<boolean>;
  }
}