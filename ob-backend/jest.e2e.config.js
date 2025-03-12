module.exports = {  
    "testEnvironment": "node",
    "moduleFileExtensions": [
      "ts",
      "js"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testMatch": [
      "**/tests/**/*.test.(ts|js)"
    ],
    "testSequencer": "./tests/jestCustomSequencer.js"

};
