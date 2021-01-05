const sendApiSuccess = (res, status, data, message) => {
  return res.status(status).json({
    ok: true,
    status,
    message,
    data,
    error: null
  })
}

const sendApiError = (res, status, error, message) => {
  return res.status(status).json({
    ok: false,
    status,
    message,
    data: null,
    error
  })
}

const sendBodyError = (res, status, message) => {
  return res.status(status).json({
    ok: false,
    status,
    message,
    error: null,
    data: null
  })
}

const sendFieldError = (res, status, message, miss, extra) => {
  return res.status(status).json({
    ok: false,
    status,
    message,
    error: { miss, extra },
    data: null
  })
}

module.exports = {
  sendApiSuccess,
  sendApiError,
  sendBodyError,
  sendFieldError
}