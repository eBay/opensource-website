// Custom stylelint formatter to output checkstyle format for ci
// and unix format for local development

import fs from "fs";
import stylelint from "stylelint";
import checkStyleFormatter from "stylelint-checkstyle-formatter";
const unixFormatter = await stylelint.formatters.unix;

export default function (results) {
  fs.writeFileSync("stylelint-warnings.xml", checkStyleFormatter(results));
  return unixFormatter(results);
}
