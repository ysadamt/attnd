/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
<<<<<<< HEAD
import type * as messages from "../messages.js";
=======
import type * as qr from "../qr.js";
import type * as users from "../users.js";
>>>>>>> e8ac0c8ef5d131c96b00acaba84e9171d027abe8

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
<<<<<<< HEAD
  messages: typeof messages;
=======
  qr: typeof qr;
  users: typeof users;
>>>>>>> e8ac0c8ef5d131c96b00acaba84e9171d027abe8
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */
