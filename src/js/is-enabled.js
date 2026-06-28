// @ts-check

/**
 * @fileoverview Utility for interpreting Hugo template string flags as booleans.
 * Hugo injects configuration values as strings (e.g. `"true"` / `"false"`).
 * This module provides a single helper to normalise those strings to proper
 * JavaScript booleans.
 * @module is-enabled
 */

/**
 * Determines whether a Hugo configuration flag is enabled.
 *
 * Trims surrounding whitespace, lower-cases the result, and returns `true`
 * only when the stringified value equals `"true"`. Any other value —
 * including `"1"`, `"yes"`, empty string, or the Hugo template placeholder
 * itself — is treated as `false`.
 *
 * @param {*} configName - The configuration value to test. Typically a string
 *   produced by a Hugo template directive, but any value with a `.toString()`
 *   method is accepted.
 * @returns {boolean} `true` if the value normalises to `"true"`, `false` otherwise.
 *
 * @example
 * isEnabled("true");   // true
 * isEnabled("false");  // false
 * isEnabled("True");   // true  (case-insensitive)
 * isEnabled("  true "); // true (whitespace trimmed)
 * isEnabled("1");      // false
 */
function isEnabled(configName) {
    if(configName.toString().trim().toLowerCase() === "true")
        return true;
    return false;
}

export { isEnabled };
