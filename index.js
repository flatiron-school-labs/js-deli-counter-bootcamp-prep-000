function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let place = katzDeliLine.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
  } else {
    let name = katzDeliLine.shift();
  return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
  } else {
    let currentLine = [];
  for (i = 0; i < currentLine.length; i++)
  currentLine.push(`)
  return `The line is currently: ${katzDeliLine}.`;
  }
}

function theBeatlesPlay(a, b) {
  var c = [];
    for (var i = 0; i < a.length; i++) {
      c.push(a[i] + " plays " + b[i]);
    }
  return c;
}