/* eslint no-bitwise: 0 */

export default n => ((0x0000FFFF & n) << 16) + ((0xFFFF0000 & n) >> 16)
