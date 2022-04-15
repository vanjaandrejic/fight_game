class Heroj {
    constructor(vrsta, health, ranac = []) {
        this.vrsta = vrsta;
        this.health = health;
        this.ranac = ranac;
    }
}

const carobnjak = new Heroj ('Carobnjak' , 150);
const macevalac = new Heroj ('Macevalac', 100);


class Oruzje extends Heroj {
    constructor(vrsta, health, ranac, vrstaOruzja, jacinaOruzja){
        super(vrsta, health, ranac);

        this.vrstaOruzja = vrstaOruzja;
        this.jacinaOruzja = jacinaOruzja;
    }

    uzmiOruzje(vrstaOruzja) {
        if(vrsta === 'Carobnjak') {
            vrstaOruzja = carolija;
            this.ranac = ranac.push(vrstaOruzja);
        } else if(vrsta === 'Macevalac') {
            vrstaOruzja = mac || koplje;
            this.ranac = ranac.push(vrstaOruzja);
        }
    }

    baciOruzje(vrstaOruzja){
        if(vrsta === 'Carobnjak') {
            vrstaOruzja = carolija;
            this.ranac = ranac.remove(vrstaOruzja);
        } else if(vrsta === 'Macevalac') {
            vrstaOruzja = mac || koplje;
            this.ranac = ranac.remove(vrstaOruzja);
        }

    }
    napad(vrstaOruzja){
        
        if(vrstaOruzja === mac) {
            Cudoviste.health = Cudoviste.health =- Oruzje.jacinaOruzja;
        } else if (vrstaOruzja === koplje) {
            Cudoviste.health = Cudoviste.health =- Oruzje.jacinaOruzja;
        } else if (vrstaOruzja === carolija ) {
            Cudoviste.health = Cudoviste.health =- Oruzje.jacinaOruzja;
        }
    }
}

const mac = new Oruzje('Mac', 10);
const koplje = new Oruzje('Koplje', 15);
const carolija = new Oruzje('Carolija', 20);


class Cudoviste {
    constructor(ime) {
        this.ime = ime;
    }

    napad(nacin) {
        let nacin;
        if(nacin === 'Udarac') {
            Heroj.health = Heroj.health =- 5;
        } else if (nacin === 'Vatra') {
            Heroj.health = Heroj.health =- 20;
        } else if (nacin === 'Ujed' ) {
            Heroj.health = Heroj.health =- 8;
        }
    }
}

const zmaj = new Cudoviste('Zmaj');
const pauk = new Cudoviste('Pauk');









