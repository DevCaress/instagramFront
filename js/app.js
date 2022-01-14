const slider = () => {

    const imgs = document.getElementsByClassName('imgCar');
    let index = 0;

    setInterval(() => {

        for (const iterator of imgs) {
            iterator.classList.remove('active');
        }

        imgs[index].classList.add('active');
        index == 4 ? index = 0 : index++;

    }, 2000);

}

const initApp = () => {

    slider();

}

initApp();


