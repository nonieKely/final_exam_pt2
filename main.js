const index = document.getElementById('index');
const navbar = document.querySelector('.navbar');
const  burger_menu = document.querySelector('.burger_menu');

burger_menu.addEventListener('click', function(){
    navbar.classList.toggle('vertical_navbar')
})

window.addEventListener('scroll', function(){
    navbar.classList.add('white_navbar')
})

window.addEventListener('scrollend', function(){
    navbar.classList.remove('white_navbar')
})


window.addEventListener('scroll', function () {
    const elementTop = index.getBoundingClientRect().top;
    const scrollPositionIn = window.scrollY + window.innerHeight + 400;
    const elementTopPosition = nos_services_intro.offsetTop + nos_services_intro.offsetHeight;

    if (scrollPositionIn > elementTopPosition) {

        index.style.transition = 'transform 1s, opacity 1s';
        index.style.transform = 'scale(1)';
        index.style.opacity = '1';
    }

    else if (scrollPositionIn < elementTopPosition) {
        index.style.transition = 'transform 1s, opacity 1s';
        index.style.transform = 'scale(1)';
        index.style.opacity = '1';
    }
    else {
        index.style.transition = 'transform 1s, opacity 1s';
        index.style.transform = 'scale(1)';
        index.style.opacity = '1';
    }
});




const nos_services_intro = document.querySelector('.nos_services_intro');

window.addEventListener('scroll', function () {
    const scrollPositionIn = window.scrollY + window.innerHeight + 400;
    const elementTopPosition = nos_services_intro.offsetTop + nos_services_intro.offsetHeight;

    if (scrollPositionIn > elementTopPosition) {
        nos_services_intro.style.transition = 'transform 1s, opacity 1s';
        nos_services_intro.style.transform = 'scale(1)';
        nos_services_intro.style.opacity = '1';
    } else {
        nos_services_intro.style.transition = 'transform 1s, opacity 1s';
        nos_services_intro.style.transform = 'scale(0)';
        nos_services_intro.style.opacity = '0';
    }
});

window.addEventListener('scroll', function () {
    const elementTop = nos_services_intro.getBoundingClientRect().top;

    if (elementTop < -250) {
        nos_services_intro.style.transition = 'transform 1s, opacity 1s';
        nos_services_intro.style.transform = 'scale(0)';
        nos_services_intro.style.opacity = '0';
    }
});


const content_reverse = document.querySelectorAll('.content_reverse');

window.addEventListener('scroll', function () {
    content_reverse.forEach(element => {
        const scrollPositionIn = window.scrollY + window.innerHeight + 200;
        const elementTopPosition = element.offsetTop + element.offsetHeight;

        if (scrollPositionIn > elementTopPosition) {
            element.style.transition = 'transform 1.25s, opacity 1.25s';
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
        } else {
            element.style.transition = 'transform 1.25s, opacity 1.25s';
            element.style.transform = 'translateX(200dvw)';
            element.style.opacity = '0';
        }
    });
});

window.addEventListener('scroll', function () {
    content_reverse.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < -100) {
            element.style.transition = 'transform 1.25s, opacity 1.25s';
            element.style.transform = 'translateX(200dvw)';
            element.style.opacity = '0';
        }
    });
});


const content = document.querySelectorAll('.content');

window.addEventListener('scroll', function () {
    content.forEach(element => {
        const scrollPositionIn = window.scrollY + window.innerHeight + 200;
        const elementTopPosition = element.offsetTop + element.offsetHeight;

        if (scrollPositionIn > elementTopPosition) {
            element.style.transition = 'transform 1.25s, opacity 1.25s';
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
        } else {
            element.style.transition = 'transform 1.25s, opacity 1.25s';
            element.style.transform = 'translateX(-200dvw)';
            element.style.opacity = '0';
        }
    });
});

window.addEventListener('scroll', function () {
    content.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < -100) {
            element.style.transition = 'transform 1.25s, opacity 1.25s';
            element.style.transform = 'translateX(-200dvw)';
            element.style.opacity = '0';
        }
    });
});


const container_room = document.querySelector('.container_room');

window.addEventListener('scroll', function () {
    const scrollPositionIn = window.scrollY + window.innerHeight + 600;
    const elementTopPosition = container_room.offsetTop + container_room.offsetHeight;

    if (scrollPositionIn > elementTopPosition) {
        container_room.style.transition = 'transform 1s, opacity 1s';
        container_room.style.opacity = '1';
    } else {
        container_room.style.transition = 'transform 0.5s, opacity 0.5s';
        container_room.style.opacity = '0';
    }
});

window.addEventListener('scroll', function () {
    const elementTop = container_room.getBoundingClientRect().top;

    if (elementTop < -250) {
        container_room.style.transition = 'transform 0.5s, opacity 0.5s';
        container_room.style.opacity = '0';
    }
});

const tarifs_container = document.querySelector('.tarifs_container');

window.addEventListener('scroll', function () {
    const scrollPositionIn = window.scrollY + window.innerHeight + 400;
    const elementTopPosition = tarifs_container.offsetTop + tarifs_container.offsetHeight;

    if (scrollPositionIn > elementTopPosition) {
        tarifs_container.style.transition = 'transform 1s, opacity 1s';
        tarifs_container.style.transform = 'scale(1)';
        tarifs_container.style.opacity = '1';
    } else {
        tarifs_container.style.transition = 'transform 1s, opacity 1s';
        tarifs_container.style.transform = 'scale(0)';
        tarifs_container.style.opacity = '0';
    }
});

window.addEventListener('scroll', function () {
    const elementTop = tarifs_container.getBoundingClientRect().top;

    if (elementTop < -250) {
        tarifs_container.style.transition = 'transform 1s, opacity 1s';
        tarifs_container.style.transform = 'scale(0)';
        tarifs_container.style.opacity = '0';
    }
});


const reservation_left_side = document.querySelector('.reservation_left_side');



window.addEventListener('scroll', function () {
    const scrollPositionIn = window.scrollY + window.innerHeight + 400;
    const elementTopPosition = reservation_left_side.offsetTop + reservation_left_side.offsetHeight;

    if (scrollPositionIn > elementTopPosition) {
        reservation_left_side.style.transition = 'transform 2.4s, opacity 2.4s';
        reservation_left_side.style.transform = 'translateX(0)';
        reservation_left_side.style.opacity = '1';
    } else {
        reservation_left_side.style.transition = 'transform 2.4s, opacity 2.4s';
        reservation_left_side.style.transform = 'translateX(150dvw)';
        reservation_left_side.style.opacity = '0';
    }
});

window.addEventListener('scroll', function () {
    const elementTop = reservation_left_side.getBoundingClientRect().top;
    if (elementTop < -500) {
        reservation_left_side.style.transition = 'transform 0.8s, opacity 0.8s';
        reservation_left_side.style.transform = 'translateX(150dvw)';
        reservation_left_side.style.opacity = '0';
    }
})




const reservation_right_side = document.querySelector('.reservation_right_side');

window.addEventListener('scroll', function () {
    const scrollPositionIn = window.scrollY + window.innerHeight + 400;
    const elementTopPosition = reservation_right_side.offsetTop + reservation_right_side.offsetHeight;

    if (scrollPositionIn > elementTopPosition) {
        reservation_right_side.style.transition = 'transform 0.8s, opacity 0.8s';
        reservation_right_side.style.transform = 'translateX(0)';
        reservation_right_side.style.opacity = '1';
    } else {
        reservation_right_side.style.transition = 'transform 0.8s, opacity 0.8s';
        reservation_right_side.style.transform = 'translateX(150dvw)';
        reservation_right_side.style.opacity = '0';
    }
});

window.addEventListener('scroll', function () {
    const elementTop = reservation_right_side.getBoundingClientRect().top;
    if (elementTop < -500) {
        reservation_right_side.style.transition = 'transform 0.8, opacity 0.8';
        reservation_right_side.style.transform = 'translateX(150dvw)';
        reservation_right_side.style.opacity = '0';
    }
})

const localisation = document.querySelector('.localisation');

window.addEventListener('scroll', function () {
    const scrollPositionIn = window.scrollY + window.innerHeight + 400;
    const elementTopPosition = localisation.offsetTop + localisation.offsetHeight;

    if (scrollPositionIn > elementTopPosition) {
        localisation.style.transition = 'transform 1s, opacity 1s';
        localisation.style.opacity = 1;
    } else {
        localisation.style.transition = 'transform 1s, opacity 1s';
        localisation.style.opacity = 0;
    }
});



const top_image1 = document.querySelector('.top_image1');
const bottom_image1 = document.querySelector('.bottom_image1');
const top_image2 = document.querySelector('.top_image2');
const bottom_image2 = document.querySelector('.bottom_image2');

top_image1.addEventListener('mouseover', function () {
    top_image1.style.width = '200%';
});
top_image2.addEventListener('mouseover', function () {
    top_image2.style.width = '200%';

});
bottom_image1.addEventListener('mouseover', function () {
    bottom_image1.style.width = '200%';
});
bottom_image2.addEventListener('mouseover', function () {
    bottom_image2.style.width = '200%';

});



top_image1.addEventListener('mouseout', function () {
    top_image1.style.width = '35vw';
});
top_image2.addEventListener('mouseout', function () {
    top_image2.style.width = '23vw';
});
bottom_image1.addEventListener('mouseout', function () {
    bottom_image1.style.width = '25vw';
});
bottom_image2.addEventListener('mouseout', function () {
    bottom_image2.style.width = '33vw';
});


















































