import { REDS, GREENS, YELLOWS, BLUES } from "./constants";
import type { RandomizedParam } from "./fields";

function getRandomChoice(choices: string[] | number[]): string | number {
  // choose a random integer or string from a list
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getRandomSize(): string {
  // get a random integer between 0-100
  const i = Math.trunc(Math.random() * 100);
  return i.toString() + "px";
}
function getList(i: number, maxLength: number): string[] {
  // gets the correct list of colors based on how far (horizontal)
  const quartile = Math.trunc(maxLength / 4);
  const fourthQuartile = maxLength - quartile;
  const secondQuartile = maxLength - quartile * 2;
  const firstQuartile = maxLength - quartile * 3;
  if (i > fourthQuartile) {
    return GREENS;
  } else if (i > secondQuartile) {
    return YELLOWS;
  } else if (i > firstQuartile) {
    return BLUES;
  } else {
    return REDS;
  }
}
function getLeftPosition(i: number): string {
  // adds dithering from left/right as squares are added
  const choice = getRandomChoice([-5, -4, -3, -2, 2, 3, 4, 5]);
  return (i * 13 + Number(choice)).toString() + "px";
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function getBottomPosition(i: number, max: number): string {
  var position = 0;
  // keeps first 2 colors to the left & second 2 colors to the right
  if (i > max / 2) {
    position = getRandomArbitrary(200, 500);
  } else {
    position = getRandomArbitrary(0, 300);
  }
  return position + "px";
}

export function getRandomizedParams(): RandomizedParam[] {
  const params: RandomizedParam[] = [];
  const max = 120; // max can be larger for a wider page
  for (let i = 5; i < max; i++) {
    // 5 is an arbitrary # used to buffer
    // color
    const colorList = getList(i, max);
    const color = getRandomChoice(colorList).toString();
    // height/width
    const size = getRandomSize();
    // positioning
    const leftPosition = getLeftPosition(i);
    const bottomPosition = getBottomPosition(i, max);
    // add obj
    const param: RandomizedParam = {
      heightWidth: size,
      color: color,
      leftPosition: leftPosition,
      bottomPosition: bottomPosition,
    };
    params.push(param);
  }
  return params;
}
