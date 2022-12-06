function destinationMapper(input) {
    
    let text = input.split('').join('');
    let pattern = /(\/|=)(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let validNames = [];
    let totalPoints = 0;

let match = pattern.exec(text)
  while (match !== null) {

      validNames.push(match.groups.destination);
      points = Number(match.groups.destination.length);
      totalPoints += points;

    match = pattern.exec(text)
  }
    console.log(`Destinations: ${validNames.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");