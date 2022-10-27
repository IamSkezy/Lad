const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3,
            "magicDmg": 0,
            "physicArmorPercents": 20,
            "magicArmorPercents": 20,
            "cooldown": 0
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
}

const mage = {
    maxHealth: 10,
    name: "Сироткин",
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4
        },
    ]
}

let num_mage_skill, num_monster_skill;
let current_mage_skill, current_monster_skill;
let current_mage_skill_cooldown, current_monster_skill_cooldown;
let attemps = 1;

function pickHealth() {
    let changeMageHealth = confirm("Желаете изменить количество здоровья у Сироткина?");
    if (changeMageHealth == true) {
        do {
            mage.maxHealth = +prompt("Введите здоровье Сироткина:\n(Максимальное количество здоровья = 15!)\n(Рекомендуемое количество здоровья = 10!)");
        }while((mage.maxHealth != typeof mage.maxHealth == Number) || mage.maxHealth > 15 || mage.maxHealth < 1);
    }
    let changeMonsterHealth = confirm("Желаете изменить количество здоровья у монстра?");
    if(changeMonsterHealth == true) {
        do {
            monster.maxHealth = +prompt("Введите здоровье монстра:\n(Максимальное количество здоровья = 15!)\n(Рекомендуемое количество здоровья = 10!)");
        }while((monster.maxHealth != typeof monster.maxHealth == Number) || monster.maxHealth > 15 || monster.maxHealth < 1);
    }

}

function mageInfo() {
    document.getElementById('mage_maxHealth').innerHTML = `Здоровье: ${mage.maxHealth}`;
    document.getElementById('mage_name').innerHTML = `Название: ${mage.name}`;
    document.getElementById('mage_moves').innerHTML = `Навыки:`;
}

function monsterInfo() {
    document.getElementById('monster_maxHealth').innerHTML = `Здоровье: ${monster.maxHealth}`;
    document.getElementById('monster_name').innerHTML = `Название: ${monster.name}`;
    document.getElementById('monster_moves').innerHTML = `Навыки:`;
}

function reloadHP() {
    document.getElementById('mage_maxHealth').innerHTML = `Здоровье: ${mage.maxHealth}`;
    document.getElementById('monster_maxHealth').innerHTML = `Здоровье: ${monster.maxHealth}`;
}

function reloadRaund() {
    document.getElementById('raund').innerHTML = `Раунд ${attemps}`;
}

function pickMageSkill() {
do{
    num_mage_skill = +prompt(`Введите номер навыка, который хотите выбрать:\nНавыки:\n1 - ${mage.moves[0].name}\n2 - ${mage.moves[1].name}\n3 - ${mage.moves[2].name}\n4 - ${mage.moves[3].name}`);
    if (num_mage_skill == 1) {
        current_mage_skill = mage.moves[0];
    }
    else if(num_mage_skill == 2) {
        current_mage_skill = mage.moves[1];
    }
    else if(num_mage_skill == 3) {
        current_mage_skill = mage.moves[2];
    }
    else if(num_mage_skill == 4) {
        current_mage_skill = mage.moves[3];
    }
    else {
        alert("Ошибка в выборе навыка!")
    }
}while(num_mage_skill != 1 && num_mage_skill != 2 && num_mage_skill != 3 && num_mage_skill != 4);

    return current_mage_skill;
}

function pickMonsterSkill() {
    num_monster_skill = Math.floor(Math.random() * 3)
    if (num_monster_skill == 0) {
        current_monster_skill = monster.moves[0];
    }
    else if(num_monster_skill == 1) {
        current_monster_skill = monster.moves[1];
    }
    else if(num_monster_skill == 2) {
        current_monster_skill = monster.moves[2];
    }
    else {
        alert("Ошибка в выборе навыка!")
    }
    return current_monster_skill;

}

function oneStepGame() {
    pickMageSkill();
    pickMonsterSkill();
    monster.maxHealth -= (current_mage_skill.physicalDmg - current_mage_skill.physicalDmg * current_monster_skill.physicArmorPercents/100) + (current_mage_skill.magicDmg - current_mage_skill.magicDmg * current_monster_skill.magicArmorPercents/100);
    mage.maxHealth -= (current_monster_skill.physicalDmg - current_monster_skill.physicalDmg * current_mage_skill.physicArmorPercents/100) + (current_monster_skill.magicDmg - current_monster_skill.magicDmg * current_mage_skill.magicArmorPercents/100);
    reloadHP(); 
    attemps++;
}

function Game() {
    if (mage.maxHealth >= 0 || monster.maxHealth >= 0) {
        reloadRaund();
        oneStepGame();
    }
    else if(mage.maxHealth <= 0 || monster.maxHealth <= 0) {
        alert("Конец игры!");
    }
}

function start_game() {
    Game();
}

function initGame() {
    pickHealth();
    mageInfo();
    monsterInfo();
}

initGame();