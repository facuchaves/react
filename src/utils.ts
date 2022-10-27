// eslint-disable-next-line no-promise-executor-return
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default sleep;
