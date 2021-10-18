# ABI Gen

This package allows you to generate TypeScript or Python contract wrappers from ABI files.
It's heavily inspired by [Geth abigen](https://github.com/ethereum/go-ethereum/wiki/Native-DApps:-Go-bindings-to-Ethereum-contracts) but takes a different approach.
You can write your custom handlebars templates which will allow you to seamlessly integrate the generated code into your existing codebase with existing conventions.

[Here](https://github.com/0xProject/0x-monorepo/tree/development/packages/0x.js/abi-gen-templates) are the templates used to generate the contract wrappers used by 0x.js.

## Installation

`cnpm i -g easy-abi-gen` from China

`npm i -g easy-abi-gen` from the rest of the world


## Template supports working progress

- [x] Typescript
- [x] Python
- [ ] Golang
- [ ] Php
- [ ] Rust
- [ ] Java
- [ ] Swift
- [ ] Bash

## Usage

```
$ abi-gen-uni --help
Options:
  --help               Show help                                       [boolean]
  --version            Show version number                             [boolean]
  --abibins            Glob pattern to search for ABI JSON files that comes with with abi and bin.
                                                             [string] [required]
  --output, -o, --out  Folder where to put the output files  [string] [required]
  --partials           Glob pattern for the partial template files      [string]
  --template           Path for the main template file that will be used to
                       generate each contract                [string] [required]
  --backend            The backing Ethereum library your app uses. For
                       TypeScript, either 'web3' or 'ethers'. Ethers
                       auto-converts small ints to numbers whereas Web3 doesn't.
                       For Python, the only possibility is Web3.py
                          [string] [choices: "web3", "ethers"] [default: "web3"]
  --network-id         ID of the network where contract ABIs are nested in
                       artifacts                          [number] [default: 50]
  --language           Language of output file to generate
              [string] [choices: "TypeScript", "Python"] [default: "TypeScript"]

Examples:
  abi-gen-uni --abis 'src/artifacts/**/*.json'  Full usage example
  --out 'src/contracts/generated/'
  --partials
  'src/templates/partials/**/*.handlebars'
  --template
  'src/templates/contract.handlebars'

```

Sample Implemenation:
```
#!/usr/bin/env bash

typescriptabi0x() {
  mkdir -p $COMPILED_TS
  mkdir -p $COMPILED_PY

  abi-gen-uni --abis $COMPILED_ABI \
    --out "$COMPILED_TS" \
    --partials "$BUILDPATH/abi_templates/TypeScript/partials/*.handlebars" \
    --template "$BUILDPATH/abi_templates/TypeScript/contract.handlebars"

  abi-gen-uni --abis $COMPILED_ABI  \
   --out "$COMPILED_PY" \
   --partials "$BUILDPATH/abi_templates/Python/partials/*.handlebars" \
   --template "$BUILDPATH/abi_templates/Python/contract.handlebars"

}

typescriptabi() {
  abi-gen-uni ts -i $COMPILED_ABI -o $COMPILED_TS --verbose
  mkdir -p $GEN_DOC
  soldocgen $GEN_DOC $BUILDPATH/vault/tokenization
}


BUILDPATH=$HOME/to/my/workspace
COMPILE_FILE="to/my/specific.sol"
SOLCPATH="/root/contracts/vault"

GEN_DOC="$BUILDPATH/doc"
COMPILED_ABI="$BUILDPATH/build/specific.abi"
COMPILED_TS="$BUILDPATH/abi_src/gen_ts/"
COMPILED_PY="$BUILDPATH/abi_src/gen_py/"
COMPILED_HANDLERBARS="$COMPILED_TS/contract.handlebars"

typescriptabi

```



You're required to pass a [glob](<https://en.wikipedia.org/wiki/Glob_(programming)>) template where your abi files are located.
TL;DR - here is the example from 0x.js.

`--abis 'src/artifacts/@(Exchange|Token|TokenTransferProxy|EtherToken|TokenRegistry).json`

We could've just used `--abis 'src/artifacts/*.json` but we wanted to exclude some of the abi files.

The abi file should be either a [Truffle](http://truffleframework.com/) contract artifact (a JSON object with an abi key) or a JSON abi array.

You need to also specify the location of your main template used for every contract `--template` as well as the partial templates `--partials` that can later be used from the main one.

## How to write custom templates?

The best way to get started is to copy [0x.js templates](https://github.com/0xProject/0x-monorepo/tree/development/packages/abi-gen-templates) and start adjusting them for your needs.
We use [handlebars](http://handlebarsjs.com/) template engine under the hood.
You need to have a master template called `contract.mustache`. it will be used to generate each contract wrapper. Although - you don't need and probably shouldn't write all your logic in a single template file. You can write [partial templates](http://handlebarsjs.com/partials.html) and as long as they are within a partials folder - they will be registered and available.

## Which data/context do I get in my templates?

For now you don't get much on top of methods abi, some useful helpers and a contract name because it was enough for our use-case, but if you need something else - create a PR.
See the [type definition](https://github.com/0xProject/0x-monorepo/tree/development/packages/abi-gen/src/types.ts) of what we pass to the render method.

## Output files

Output files will be generated within the specified output folder. If you already have some files in that folder they will be overwritten.

Names of files, classes and methods will be converted to the standard naming conventions for the given target language.

## Contributing

We welcome improvements and fixes from the wider community! To report bugs within this package, please create an issue in this repository.

Please read our [contribution guidelines](../../CONTRIBUTING.md) before getting started.

### Install dependencies

If you don't have yarn workspaces enabled (Yarn < v1.0) - enable them:

```bash
yarn config set workspaces-experimental true
```

Then install dependencies

```bash
yarn install
```

You will also need to have Python 3 installed in order to build and run the tests of the command-line interface, which is integrated with the `yarn build`, `yarn test`, and `yarn lint` commands described below. More specifically, your local `pip` should resolve to the Python 3 version of `pip`, not a Python 2.x version.

### Build

To build this package and all other monorepo packages that it depends on, run the following from the monorepo root directory:

```bash
PKG=easy-abi-gen yarn build
```

Or continuously rebuild on change:

```bash
PKG=easy-abi-gen yarn watch
```

### Clean

```bash
yarn clean
```

### Lint

```bash
yarn lint
```

### CLI tests

The files in `test-cli/` are used to test the output generated by running the command-line tool against a set of fixture contracts. These tests are integrated with `yarn build`, `yarn test`, etc, but can be run independently per the instructions below.

Compile fixture contracts:

```
yarn compile:sol
```

Compiling the fixture contracts into ABI is done ahead of time, and the ABI is checked in to `git`, in order to speed up test run time. Therefore, this compilation does not happen automatically as part of `yarn build`, and must be run explicitly after making any changes to the fixture contracts; and, any proposed changes to the fixture contracts should be accompanied by changes to the corresponding compilation artifacts.

Generate wrappers (and build them, in the case of TypeScript), and build unit tests:

```
yarn test_cli:build
```

Run unit tests and check diffs of generated wrappers vs known wrappers:

```
yarn test_cli
```

Known-good wrappers have been previously committed and are kept in `test-cli/expected-output/{language}`. They are intended to provide sample output and should be kept in sync with the generating code. When making changes to this project or `@0x/abi-gen-templates`, run `yarn test_cli:prebuild` to generate fresh code into `test-cli/output/{language}`, and then manually copy it to `test-cli/expected-output/{language}`.

Run linters against generated code:

```
yarn test_cli:lint
```
