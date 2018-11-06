import { clap } from './yee';
import copy from 'copy-to-clipboard';

function yeet(value: string) {
  document.getElementById('yeetext').innerHTML = yeetThatText(value);
}

function yeetThatText(text: string) {
  return clap(text);
}

function copyClicked() {
  copy(document.getElementById('yeetext').textContent);
  document.getElementById('copy').innerText = 'Copied!';
}

if (typeof window !== 'undefined') {
  Object.assign(window, {
    yeet: yeet,
    copyClicked: copyClicked
  });
}
