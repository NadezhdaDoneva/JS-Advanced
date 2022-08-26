function attachGradientEvents() {
    let boxElement = document.getElementById('gradient-box');
    let resultElment = document.getElementById('result');


    boxElement.addEventListener('mousemove', (e) => {
        let percent = Math.floor((e.offsetX/e.target.offsetWidth)*100);
        resultElment.textContent = `${percent}%`;
    })

    //second way
    //     let gradient = document.getElementById('gradient');
    //     gradient.addEventListener('mousemove', gradientMove);
    //     gradient.addEventListener('mouseout', gradientOut);
    //     function gradientMove(event) {
    //       let power = event.offsetX / (event.target.clientWidth - 1);
    //       power = Math.trunc(power * 100);
    //       document.getElementById('result').textContent = power + "%";
    //     }
    //     function gradientOut(event) {
    //       document.getElementById('result').textContent = "";
    //     }
    //   }
}