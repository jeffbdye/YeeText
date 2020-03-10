import { clap, spongebob, titleCase } from './yee';
import copy from 'copy-to-clipboard';

const inputElement = document.getElementById('input-text') as HTMLTextAreaElement;
const resultElement = document.getElementById('yeetext') as HTMLTextAreaElement;
const yeetElement = document.getElementById('yeet') as HTMLInputElement;
const spongebobElement = document.getElementById('sPoNgEbOb') as HTMLInputElement;
const jadenElement = document.getElementById('Jaden-Smith') as HTMLInputElement;
const copyButton = document.getElementById('copy') as HTMLButtonElement;

function yeet(value: string) {
  resultElement.innerHTML = yeetThatText(value);
}

function optionToggled(e: Event) {
  validateForm(e);
  yeet(inputElement.value);
}

function yeetThatText(text: string) {
  const yeetSelected = yeetElement.checked;
  const spongebobSelected = spongebobElement.checked;
  const jadenSelected = jadenElement.checked;

  // ugh
  if (spongebobSelected && yeetSelected) {
    return clap(spongebob(text));
  } else if (jadenSelected && yeetSelected) {
    return clap(titleCase(text));
  } else if (yeetSelected) {
    return clap(text);
  } else if (spongebobSelected) {
    return spongebob(text);
  } else if (jadenSelected) {
    return titleCase(text);
  } else {
    return text;
  }
}

function validateForm(e: Event) {
  // enforce eclusive capitalization options, since these
  // are like radio buttons with an implied 'neither selected' option
  const srcElement = e.srcElement as HTMLElement;
  if (srcElement.id === 'sPoNgEbOb') {
    jadenElement.checked = false;
  } else if (srcElement.id === 'JadÍÍen-Smith') {
    spongebobElement.checked = false;
  }
}

function copyClicked() {
  copy(resultElement.textContent);
  copyButton.innerText = 'Copied!';
}

export { yeet, copyClicked, optionToggled };