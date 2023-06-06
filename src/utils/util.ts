export const isValidValue = (value: unknown): boolean => typeof value === 'number' || !!value

/**
 * 从输入的对象中过滤出所有有效值，并返回一个新的对象，该对象包含输入对象中的所有键值对，其中值为有效值。
 * 有效值指的是除了 undefined 和 null 之外的所有值。
 *
 * @template T 输入对象的类型
 * @param {T} object 输入对象
 * @returns {Partial<T>} 一个新的对象，包含输入对象中的所有键值对，其中值为有效值
 */
export const filterObject = <T extends Record<string, unknown>>(object: T): Partial<T> => {
  return Object.keys(object).reduce((accumulator: Partial<T>, key: keyof T) => {
    if (isValidValue(object[key])) {
      accumulator[key] = object[key]
    }
    return accumulator
  }, {})
}
