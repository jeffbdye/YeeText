const clap_char = '\u{1F44F}';

export function clap(text: string): string {
  const words = text.trim().split(' ');
  let output = '';
  for (var i = 0; i < words.length - 1; i++) {
    output += words[i] + clap_char;
  }
  output += words[words.length - 1];
  return output;
}
