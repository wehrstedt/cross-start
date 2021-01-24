# cross-start

Run different npm start commands per platform.   

## Description
Do you need to start a `.bat` script on windows in order to launch your application? And on linux, you need to start a `bash`-script? Then just let `cross-start` handle to call the correct startup command, and you can continue to use the simple `npm start` command to launch your application. 

## Installation

Install this module via
```
npm install --save-dev cross-start
```

or 
```
yarn add cross-start --dev
```

if you use yarn.

## Usage

Replace your default start command with `cross-start`:
```json
{
	"scripts": {
		"start": "cross-start"
	}
}
```

Next, add a start command for each platform you wish to run your project on:
```jsonc
{
	"scripts": {
		"start": "cross-start",
		"start:win32": "cmd my\\startup\\script.bat",
		"start:linux": "bash my/startup/script.sh"
	}
}
```

Your script name must starts with `start:` and ends with one of the [supported platforms](https://nodejs.org/api/os.html#os_os_platform) by node.js.   

List of valid task names:
* `start:aix`
* `start:darwin`
* `start:freebsd`
* `start:linux`
* `start:openbsd`
* `start:sunos`
* `start:win32`
