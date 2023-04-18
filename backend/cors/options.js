let allowed = ["http://localhost:3000", "http://localhost:4000"]
function options(req, res) {
  let tmp
  let origin = req.header("Origin")
  if (allowed.indexOf(origin) > -1) {
    tmp = {
      origin: true,
      optionSuccessStatus: 200,
    }
  } else {
    tmp = {
      origin: "false",
    }
  }
  return res(null, tmp)
}

module.exports = options
