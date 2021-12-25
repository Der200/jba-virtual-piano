const clickPianoKey = (event) => {
  if (event.code === 'KeyA' ||
      event.code === 'KeyS' ||
      event.code === 'KeyD' ||
      event.code === 'KeyF' ||
      event.code === 'KeyG' ||
      event.code === 'KeyH' ||
      event.code === 'KeyJ' ||
      event.code === 'KeyW' ||
      event.code === 'KeyE' ||
      event.code === 'KeyT' ||
      event.code === 'KeyY' ||
      event.code === 'KeyU'
  ) {
    return new Audio(`audio/${event.key}.mp3`).play();
  } else {
    return console.log(`Warning! Pressed alternative key '${event.key}'`)
  }
}


document.addEventListener("keydown", clickPianoKey);
