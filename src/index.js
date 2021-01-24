#!/usr/bin/env node

const fs = require("fs");

try {
	if (fs.existsSync("package.json")) {
		const packageJSON = JSON.parse(fs.readFileSync("package.json", { encoding: "utf-8" }));
		const platform = require("os").platform;
		const startCommand = "start:" + platform;
		if (packageJSON.scripts && packageJSON.scripts[startCommand]) {
			const command = "npm run start:" + platform;
			console.log(command);
			require("child_process").execSync(command, {
				stdio: "inherit",
				
			});
		} else {
			throw new Error("Missing start command for platform '" + platform + "'. Add a script with name '" + startCommand + "' to your package.json.");
		}
	} else {
		throw new Error("Cannot find 'package.json' in '" + process.cwd() + "'.");
	}
} catch (err) {
	console.error(err);
	process.exit(1);
}
