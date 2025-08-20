import { readFileSync } from 'fs';

const patternHook = () => {
    return readFileSync('./patterns/pattern.js', 'utf-8') 
}
export { patternHook }