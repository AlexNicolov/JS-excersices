function inventory(input) {
    let heros = [];
    for (const element of input) {
        let info = element.split(" / ");
        let currHeroName = info[0];
        let currHeroLevel = info[1];
        let currHeroItems = info[2].split(", ").join(", ");
        let currentHero = {
            name: currHeroName,
            level: currHeroLevel,
            items: currHeroItems
        }
        heros.push(currentHero);
    }
    heros.sort((a, b) => a.level - b.level);
    for (const hero of heros) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])