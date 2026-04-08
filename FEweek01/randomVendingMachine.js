const drinks = {
    아메리카노: 1500,
    바닐라라떼: 3000,
    말차라떼: 2800,
    카라멜라떼: 2500,
    카페모카: 2500,
    카페화이트모카: 2500,
    딸기에이드: 3000,
    레몬에이드: 3000,
};

function buyDrink() {
    let wallet = 5000;
    let selected = 0;

    const keys = Object.keys(drinks);
    const values = Object.values(drinks);

    for (var i = 1; i <= 3; i++) {
        selected = Math.floor(Math.random() * values.length);

        if (wallet >= values[selected]){
            wallet -= values[selected];
            console.log(keys[selected]);
            console.log( `음료가 나왔어요! (가격: ${values[selected]})
                지갑에 남은 돈: ${wallet}원`);
        }

        else{
            console.log(`돈이 부족해요! 음료를 살 수 없어요!`);
        }
    };
};

buyDrink();