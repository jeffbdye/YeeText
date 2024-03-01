import { spongebob, clap, titleCase } from './yee';

describe('YeeText', () => {
  it('should insert claps between words', () => {
    const input = `That's some text right there.`;
    const expected = `That's👏some👏text👏right👏there.`;
    const actual = clap(input);
    expect(actual).toBe(expected);
  });

  it('should alternate case', () => {
    const input = `Sarcastic spongebob`;
    const expected = `SaRcAsTiC sPoNgEbOb`;
    const actual = spongebob(input);
    expect(actual).toBe(expected);
  });

  it('should title case text', () => {
    const input = `real eyes REALIZE Real Lies`;
    const expected = `Real Eyes Realize Real Lies`;
    const actual = titleCase(input);
    expect(actual).toBe(expected);
  });
});
