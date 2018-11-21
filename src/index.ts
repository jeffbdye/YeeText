import { clap, alternate } from './yee';
import copy from 'copy-to-clipboard';

function yeet(value: string) {
  document.getElementById('yeetext').innerHTML = yeetThatText(value);
}

function optionToggled() {
  const yeetElement = document.getElementById('input-text') as HTMLTextAreaElement;
  yeet(yeetElement.value);
}

function yeetThatText(text: string) {
  const yeetSelected = getCheckboxValue('yeet');
  const alternateSelected = getCheckboxValue('aLtErNaTiNg');
  if (yeetSelected && alternateSelected) {
    return alternate(clap(text));
  } else if (yeetSelected) {
    return clap(text);
  } else {
    return alternate(text);
  }
}

function copyClicked() {
  copy(document.getElementById('yeetext').textContent);
  document.getElementById('copy').innerText = 'Copied!';
}

function getCheckboxValue(elementId: string): boolean {
  return (document.getElementById(elementId) as HTMLInputElement).checked;
}

if (typeof window !== 'undefined') {
  Object.assign(window, {
    yeet: yeet,
    copyClicked: copyClicked,
    optionToggled: optionToggled
  });
}
