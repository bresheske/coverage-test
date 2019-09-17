import * as mathFuncs from './index';

describe(`index tests`, () => {
    it(`should add`, () => {
        const result = mathFuncs.add(1, 1);
        expect(result).toBe(2);
    });
});