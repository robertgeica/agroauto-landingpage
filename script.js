const body = document.querySelector('body');
const mobileNavbar = document.querySelector('.mobile-menu');

// preloader
window.addEventListener('load', () => {
	body.classList.add('loaded');
});


// mobile navbar
mobileNavbar.addEventListener('click', () => {
  	body.classList.toggle('open');
	const overlay = document.getElementById('nav');

	// close overlay
	window.addEventListener('click', e => {
		e.target === overlay && body.className === 'loaded open' ? body.classList.remove('open') : '';
	})

});

// carousel
let li = document.querySelectorAll('.li');
let index = 0;


const moveSlide = (increase) => {
	if(index + increase > li.length) {
		index = 0;
	}

	console.log(index);
  	index = index + increase;
	console.log(index);

  	index = Math.min(Math.max(index, 0), li.length - 1);
  	li[index].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
}

let next = document.getElementById('next');
next.addEventListener('click', () => moveSlide(+1));
let prev = document.getElementById('prev');
prev.addEventListener('click', () => moveSlide(-1));



// switch clienti-furnizori
const clienti = document.querySelector('.clienti');
const furnizori = document.querySelector('.furnizori');
const clientiButton = document.querySelector('.clientiButton');
const furnizoriButton = document.querySelector('.furnizoriButton');

clientiButton.addEventListener('click', () => {
	furnizori.classList.add('hide');
	furnizoriButton.classList.remove('active-switch');
	
	clienti.classList.remove('hide');
	clientiButton.classList.add('active-switch');
});

furnizori.classList.add('hide');
clientiButton.classList.add('active-switch');

furnizoriButton.addEventListener('click', () => {
	clienti.classList.add('hide');
	clientiButton.classList.remove('active-switch');

	furnizori.classList.remove('hide');
	furnizoriButton.classList.add('active-switch');
});



// counter 
const animateCounter = (elements, start, end, duration) => {
	const toCount = document.querySelectorAll(elements);
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer = 0;
  
    const run = () => {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));

		for(let i = 0; i < toCount.length; i++) {
			toCount[i].innerHTML = `+${value}`;
		}

        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}
animateCounter('.values', 0, 100, 2000);



