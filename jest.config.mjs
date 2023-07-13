import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './'
});

/** @type {import('jest').Config} */
const config = {
    testEnvironment: "jest-environment-jsdom",
    testEnvironmentOptions: {
        customExportConditions: [] // don't load 'browser' fields
    },
    transformIgnorePatterns: [
        "/node_modules/(?!d3-format)",
        "/node_modules/",
    ],
    transform: {
        "/node_modules/": "babel-jest"
    },
    moduleNameMapper: {
        "d3-format": "d3-format",
    }
};

export default createJestConfig(config);
