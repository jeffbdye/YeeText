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

export function alternate(text: string): string {
  const chars = text.trim().split('');
  if (!chars.length) {
    return '';
  }

  let output = '';
  let upper = chars[0] === chars[0].toUpperCase();
  for (var i = 0; i < chars.length; i++) {
    if (/[a-zA-z]/.test(chars[i])) {
      output += upper ? chars[i].toUpperCase() : chars[i].toLowerCase();
      upper = !upper;
    } else {
      output += chars[i];
    }
  }
  return output;
}
