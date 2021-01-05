const checkField = (required, object) => {
  const miss = [];
  const extra = [];

  required.forEach(prop => {
    if (!(prop in object)) miss.push(prop);
  })

  for (const prop in object) {
    if (required.indexOf(prop) === -1) extra.push(prop);
  }

  const ok = extra.length && miss.length;
  return { ok, extra, miss };
}

module.exports = {
  checkField,
}