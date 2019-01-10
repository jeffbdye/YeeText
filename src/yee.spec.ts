import { alternate, clap } from './yee';

describe('YeeText', () => {
  let input = `That's some text right there.`;

  it('should insert claps between words', () => {
    const expected = `That's👏some👏text👏right👏there.`
    let actual = clap(input);
    expect(actual).toBe(expected);
  });

  it('should alternate case properly', () => {
    const expected = `ThAt'S sOmE tExT rIgHt ThErE.`
    let actual = alternate(input);
    expect(actual).toBe(expected);
  });
});