/**
 * createActionNoAppID: Tạo một action không có API
 * @param {*} type
 * @param {*} payload
 * @param {*} original
 * @param {*} condition
 */
export default function createActionNoAppID(type, payload = {}, original = {}, condition = {}) {
    return {type, payload, original, condition, timestamp: Date.now()};
}
