'use strict'

const STATUS_CODES = {
  OK: '0',
  SERVER_ERROR: '1',
  DEBTOR_NOT_FOUND: '2',
  DEBTOR_NO_BILLS: '3',
  UNAUTHORIZED: '4',
  BAD_REQUEST_PARAMS: '5',
  REVERSION_NOT_MATCH: '6',
  OLD_PENDING_BILLS: '7'
}

module.exports = STATUS_CODES
