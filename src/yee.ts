const CLAP_CHAR = '\u{1F44F}';

function clap(text: string): string {
  const words = text.trim().split(' ');
  let output = '';
  for (let i = 0; i < words.length - 1; i++) {
    output += words[i] + CLAP_CHAR;
  }
  output += words[words.length - 1];
  return output;
}

function spongebob(text: string): string {
  const chars = text.trim().split('');
  if (!chars.length) {
    return '';
  }

  let output = '';
  let upper = chars[0] === chars[0].toUpperCase();
  for (let i = 0; i < chars.length; i++) {
    if (/[a-zA-z]/.test(chars[i])) {
      output += upper ? chars[i].toUpperCase() : chars[i].toLowerCase();
      upper = !upper;
    } else {
      output += chars[i];
    }
  }
  return output;
}

function titleCase(text: string) {
  const words = text.trim().split(' ');
  if (!words.length) {
    return '';
  }

  let output = '';
  for (const word of words) {
    const titleCased = word[0].toUpperCase() + word.substring(1).toLowerCase();
    output += titleCased + ' ';
  }

  return output.slice(0, -1);
}

export { spongebob, clap, titleCase };
