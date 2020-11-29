let showcaseIMG = document.querySelector('#showcaseIMG');

let introText = document.querySelector('.introText');
strText = introText.textContent;
const splitText = strText.split('');
introText.textContent = '';
for (let i = 0; i < splitText.length; i++) {
  introText.innerHTML += '<span>' + splitText[i] + '</span>';
}

setTimeout(() => {
  showcaseIMG.style.border = 'medium solid rgb(209, 144, 46)';
  showcaseIMG.style.transform = 'scale(1.1)';
}, 1300);

let char = 0;
let timer;

setTimeout(() => {
  timer = setInterval(onTick, 50);
}, 500);

function onTick() {
  const span = introText.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

  if (char > 11 && char < 18) {
    span.classList.add('text-highlight');
  }

  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

const curriculumItems = [
  {
    title: 'Biebertalschule',
    img: 'icons/college.png',
    year: '2008 - 2014',
    text:
      'Mit dem <span class="text-highlight">Realschulabschluss</span> an der Biebertalschule in Hofbieber erlangte ich die <span class="text-highlight">mittlere Reife</span>.',
  },
  {
    title: 'Konrad-Zuse-Schule',
    img: 'icons/design.png',
    year: '2014 - 2016',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    title: 'Ausbildung - JUMO GmbH & Co. KG',
    img: 'icons/programming.png',
    year: '2016 - 2019',
    text:
      'Lorem ipsum <span class="text-highlight">dolor</span> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    title: 'Hochschule Fulda',
    img: 'icons/college.png',
    year: '2019 - 20XX',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
];

let curriculum = document.querySelector('.curriculum');
let circles = curriculum.querySelectorAll('.circle');
let curriculumItem = curriculum.querySelector('.item');

circles[3].classList.add('active');
changeCurriculumItem(3);

circles.forEach((e, index) => {
  e.addEventListener('click', () => {
    circles.forEach((e) => {
      e.classList.remove('active');
    });
    e.classList.add('active');
    $(curriculumItem).fadeOut(300, () => changeCurriculumItem(index));
    $(curriculumItem).fadeIn(300);
  });
});

function changeCurriculumItem(itemID) {
  let c_img = curriculumItem.querySelector('img');
  let c_title = curriculumItem.querySelector('h2');
  let c_year = curriculumItem.querySelector('h3');
  let c_text = curriculumItem.querySelector('p');
  item = curriculumItems[itemID];
  c_img.src = item.img;
  c_title.textContent = item.title;
  c_year.textContent = item.year;
  c_text.innerHTML = item.text;
}
