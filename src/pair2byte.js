import byte2pair from './byte2pair.js';

const pair2byte = {};
for (let b = 0x00; b <= 0xff; ++b) pair2byte[byte2pair[b]] = b;

export default pair2byte;
