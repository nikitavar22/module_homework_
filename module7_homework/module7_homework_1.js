function func(hero) {
    for (let key in hero) {
        if (hero.hasOwnProperty(key)){
            console.log(`${key} = ${hero[key]}`);
        }
    }
}

const hero = {
    name: 'Bruce',
    surname: 'Banner',
    nickname: 'Hulk',
    power: 90,
    intelligence: 85
}

func(hero);