import { resolve } from 'path';

export const entry = './app/assets/scripts/App.js';
export const output = {
    filename: 'bundled.js',
    path: resolve(__dirname, 'app')
};
export const mode = 'development';