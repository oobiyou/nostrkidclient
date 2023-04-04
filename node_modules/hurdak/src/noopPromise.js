const noopPromise = {then: () => noopPromise, catch: () => noopPromise}

export default noopPromise
