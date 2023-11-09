//rc95 03/06/2023 10:30
exports.getCurrentDateTime = () => {
  const now = new Date()

  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

//rc95 09/11/2023 09:21: ejemplo "1970-12-31T00:00:00.000Z" -> "31/12/1970"
exports.getFormatedDate_from_ISO_8601 = (datetime) => {
  const day = datetime.getUTCDate().toString().padStart(2, '0')
  const month = (datetime.getUTCMonth() + 1).toString().padStart(2, '0') // Sumar 1 al mes ya que los meses en JavaScript son base 0 (0-11)
  const year = datetime.getUTCFullYear()

  return `${day}/${month}/${year}`
}