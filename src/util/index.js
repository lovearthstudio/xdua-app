import React from 'react'

export const buildParamURI = function({ originalURI, paramName, substitutedValue  }) {
  return _.replace(originalURI, paramName, substitutedValue)
}

export const isEnabled = function (type) {
  if (type === '1') {
    return '已激活'
  }
  return '未激活'
}

export const buildLoadingAndError = function({ loading, error }) {

  if (loading) {
    return (
      <div>
        加载中
      </div>
    )
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }

}