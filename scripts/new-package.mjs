// a script that takes a string as value and copies the folder packages/template
// to a new folder with the name of the value

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import yargs from "yargs";

const TOKEN_START = "<!-- experimental-warning start -->";
const TOKEN_END = "<!-- experimental-warning end -->";
const experimental_label =
  "🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧\n### This tool is EXPERIMENTAL - USE WITH CAUTION\n🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧\n";

const argv = yargs(process.argv.slice(2))
  .usage("Usage: new-package <name> --experimental")
  .example(
    "new-package my-package --experimental",
    "Create a new package named my-package"
  )
  .demandCommand(1)
  .string("name")
  .boolean("experimental")
  .default("experimental", false).argv;

// this is less than ideal, but the only way to make positional working with v16 of yargs
const projectName = argv["_"][0];
const experimental = argv.experimental;

// do some quick sanitization
const cleanProjectName = projectName.replace(/[|&;$%@"<>()+,]/g, "");

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.dirname(scriptsDir);

// copy the package/template folder to a new folder with the name of the value
// and then change the package.json file to the new name
const templatePath = path.join(repoRoot, "packages", "template");

const targetFolderPath = experimental ? "incubator" : "packages";

const newProjectPath = path.join(repoRoot, targetFolderPath, cleanProjectName);

// copy the template folder to the new project folder
try {
  fs.cpSync(templatePath, newProjectPath, {
    dereference: true,
    errorOnExist: true,
    force: false,
    recursive: true,
  });
} catch (error) {
  console.error(
    "ERROR: There's already a directory matching that package name!"
  );
}

// change the package.json file to the new name
const packageJsonPath = path.join(newProjectPath, "package.json");
const packageJson = JSON.parse(
  fs.readFileSync(packageJsonPath, { encoding: "utf-8" })
);
packageJson.name = "@rnx-kit/" + cleanProjectName;
packageJson.description =
  `${
    experimental
      ? "EXPERIMENTAL - USE WITH CAUTION - New package called "
      : "New package called "
  }` + cleanProjectName;

packageJson.homepage =
  `https://github.com/microsoft/rnx-kit/tree/main/${targetFolderPath}/` +
  cleanProjectName +
  "#readme";

packageJson.repository.directory = `${targetFolderPath}/` + cleanProjectName;

if (experimental) {
  packageJson.experimental = true;
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

// don't keep the changelog from template
const changelogPath = path.join(newProjectPath, "CHANGELOG.md");
try {
  fs.unlinkSync(changelogPath);
} catch (err) {
  console.error(err);
}

// change the README.md file to the new name
const readmePath = path.join(newProjectPath, "README.md");

const readme = fs.readFileSync(readmePath, { encoding: "utf-8" });

const newReadme = readme.replace(/template/g, cleanProjectName);

const replaceInReadmeWith = experimental
  ? `${TOKEN_START}\n\n${experimental_label}\n\n${TOKEN_END}`
  : "";

const updatedExperimentalReadme = newReadme.replace(
  new RegExp(`${TOKEN_START}([^]+)${TOKEN_END}`),
  replaceInReadmeWith
);

fs.writeFileSync(readmePath, updatedExperimentalReadme);
