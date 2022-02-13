# 🚀 NodeJs + TypeScript + ESBuild starter

Note: rc config file support is included.
To use rc config file, rename .servicerc.example to .servicerc. All root variables
should contain "env_" or "menv_" prefix.

```JSON
{
  "env_name": "Example Environment",
  "env_description": "This is an example environment",
  "env_version": "1.0",
  "env_variables": {
    "example_variable": "example_value"
  }
}
```
To prevent leaking env variables to the client, only variables prefixed with menv_ are exposed to your electron/main code. e.g. the following file:
```JSON
{
  "env_name": "Example Environment",
  "env_description": "This is an example environment",
  "env_version": "1.0",
  "env_variables": {
    "example_variable": "example_value"
  },
  "menv_secret_variable": "secret_variable_value"
}
```

## Installation

```sh
npm install
```

## Development

```sh
npm run dev
```

## Build

```sh
npm run build
```
