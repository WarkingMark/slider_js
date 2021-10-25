let down_button = document.querySelector('.down-button');
let up_button = document.querySelector('.up-button');

let sidebar = document.querySelector('.sidebar');

let main_slide = document.querySelector('.main-slide');

let slide_items = main_slide.querySelectorAll('div');

let count = slide_items.length

let container = document.querySelector('.container')
let activeIndex = 0;

down_button.addEventListener('click', () => {
    ChangeSlide('down');
})
up_button.addEventListener('click', () => {
    ChangeSlide('up');
})

sidebar.style.top = `-${(count - 1) * 100}vh`;

function ChangeSlide (direction) {
    if(direction === 'up') {
        activeIndex++
        if(activeIndex === count) {
            activeIndex = 0;
        }
    } else if (direction == 'down') {
        activeIndex--;
        if(activeIndex < 0) {
            activeIndex = count - 1;
        }
    }


    main_slide.style.transform = `translateY(-${activeIndex * 100}vh)`
    sidebar.style.transform = `translateY(${activeIndex * 100}vh)`
}