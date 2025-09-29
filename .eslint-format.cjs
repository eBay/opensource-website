// Custom eslint formatter to output checkstyle format for ci
// and unix format for local development

const fs = require("fs");
const { ESLint } = require("eslint");
const eslint = new ESLint();

module.exports = async function (results) {
  const format = async (id) => (await eslint.loadFormatter(id)).format(results);
  fs.writeFileSync("eslint-warnings.xml", await format("checkstyle"));
  return format("unix");
};
