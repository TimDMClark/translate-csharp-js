console.log("Do you believe in magic?");
console.log("------------------------");

var allSpells = GetAllSpells();
var goodBook = MakeGoodSpellBook(allSpells);
var evilBook = MakeEvilSpellBook(allSpells);

DisplaySpellBook(goodBook);
console.log();
DisplaySpellBook(evilBook);

function DisplaySpellBook(book) {
    console.log(book.Title);
    book.Spells.forEach(function (aSpell) {
        console.log("  " + aSpell.Name);
    });
}

function MakeEvilSpellBook(allSpells) {
    var evilBook = {
        Title: "Evil Book",
        Spells: allSpells.filter(function (spell) {
            return spell.IsEvil;
        })
    };

    return evilBook;
}

function MakeGoodSpellBook(allSpells) {
    var goodBook = {
        Title: "Good Book",
        Spells: allSpells.filter(function (spell) {
            return !spell.IsEvil;
        })
    };

    return goodBook;
}

function GetAllSpells() {
    var allSpells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ];

    return allSpells;
}
