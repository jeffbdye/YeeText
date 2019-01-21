import { clap, alternate } from './yee';
import copy from 'copy-to-clipboard';

const inputElement = document.getElementById('input-text') as HTMLTextAreaElement;
const resultElement = document.getElementById('yeetext') as HTMLTextAreaElement;
const yeetElement = document.getElementById('yeet') as HTMLInputElement;
const alertnatingElement = document.getElementById('aLtErNaTiNg') as HTMLInputElement;
const jalenElement = document.getElementById('Jalen-Smith') as HTMLInputElement;
const copyButton = document.getElementById('copy') as HTMLButtonElement;

function yeet(value: string) {
  resultElement.innerHTML = yeetThatText(value);
}

function optionToggled(e: Event) {
  validateForm(e);
  applyStyles();
  yeet(inputElement.value);
}

function yeetThatText(text: string) {
  const yeetSelected = yeetElement.checked;
  const alternateSelected = alertnatingElement.checked;

  if (yeetSelected && alternateSelected) {
    return alternate(clap(text));
  } else if (yeetSelected) {
    return clap(text);
  } else if (alternateSelected) {
    return alternate(text);
  } else {
    return text;
  }
}

function validateForm(e: Event) {
  // enforce eclusive capitalization options, since these
  // are like radio buttons with an implied 'neither selected' option
  if (e.srcElement.id === 'aLtErNaTiNg') {
    jalenElement.checked = false;
  } else if (e.srcElement.id === 'Jalen-Smith') {
    alertnatingElement.checked = false;
  }
}

function applyStyles() {
  const jalenSelected = jalenElement.checked;
  resultElement.style.textTransform = jalenSelected ? 'capitalize' : '';
}

function copyClicked() {
  copy(resultElement.textContent);
  copyButton.innerText = 'Copied!';
}

export { yeet, copyClicked, optionToggled };