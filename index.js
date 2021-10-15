function saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (doSomething = "go to the office") {
    return `This Monday, I will ${doSomething}.`;
}

  function wrapAdjective (adjective="*") {
      return function inner(something="special") {
          return `You are ${adjective}${something}${adjective}!`
      }
  }