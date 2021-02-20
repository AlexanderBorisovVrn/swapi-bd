let compose = (...func) => (comp) => {
  return func.reduceRight((prevRes, f) => f(prevRes), comp)
}

export default compose;