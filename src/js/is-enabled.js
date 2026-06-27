// @ts-check

/**
 * 
 * @param {Object} configName 
 * @returns {boolean}
 */
function isEnabled(configName) {
    if(configName.toString().trim().toLowerCase() === "true")
        return true;
    return false;
}

export { isEnabled };
