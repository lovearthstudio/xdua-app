import PropTypes from 'prop-types'

export const userRoleShape = PropTypes.shape({
  id: PropTypes.string,
  ugrp: PropTypes.string,
  role: PropTypes.string,
  uid: PropTypes.string,
  byuid: PropTypes.string,
  note: PropTypes.string,
  expire: PropTypes.string,
  enabled: PropTypes.string,
  cstamp: PropTypes.string,
})