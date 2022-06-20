/* Select a random element from values array. */
function choice() {
  let randIdx = String(Math.floor(Math.random() * 600));

  console.log(randIdx)

  return randIdx;
}

export { choice };