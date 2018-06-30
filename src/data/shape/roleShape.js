import PropTypes from 'prop-types'

export const roleShape = PropTypes.shape({
  id: PropTypes.string,
  ugrp: PropTypes.string,
  usroc: PropTypes.string,
  name: PropTypes.string,
  brief: PropTypes.string,
  avartar: PropTypes.string,
  enabled: PropTypes.string,
  cstamp: PropTypes.string,
})