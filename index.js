function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    var serve = line.shift();
    return `Currently serving ${serve}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var katzDeliLine = [];
  for (var i = 0; i < line.length; i++) {
    line.push(`[i]. ${katzDeliLine[i]}`);
  }
    
  if (line.length === 0) {
    return "The line is currently empty.";   
  } else {
    return `The line is currently: ${line}`;
  }
}