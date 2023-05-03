/** @type {import('jest').Config} */
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

const config = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['<rootDir>/node_modules/', '/node_modules'],
    transform: {
        '/node_modules/': 'babel-jest',
    }
};

export default createJestConfig(config);
