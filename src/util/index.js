export const buildParamURI = function({ originalURI, paramName, substitutedValue  }) {
  return _.replace(originalURI, paramName, substitutedValue)
}