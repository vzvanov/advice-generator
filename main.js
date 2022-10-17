
const defaultAdvice = {
  "slip": {
    "id": 117,
    "advice": "It is easy to sit up and take notice, what's difficult is getting up and take action."
  }
};

const advice__title = document.querySelector('.advice__title');
const advice__content = document.querySelector('.advice__content');
const advice__btn = document.querySelector('.advice__btn');

advice__title.innerHTML = 'Loading...';
advice__content.innerHTML = '';

advice__btn.onclick = () => {
  getApiAdvice();
}

const fetchApiAdvice = async () => {
  let advice = undefined;
  let res = await fetch('https://api.adviceslip.com/advice');
  if (res.ok) {
    advice = await res.json();
  }
  return advice;
};

const showAdvice = ({ id, advice }) => {
  advice__title.innerHTML = `<h1>Advice # ${id}</h1>`;
  advice__content.innerHTML = `"${advice}"`;
}

const getApiAdvice = () => {
  fetchApiAdvice()
    .then((data) => {
      let res = defaultAdvice.slip;
      if (data) {
        res = data?.slip;
      }
      showAdvice(res);
    });

}

getApiAdvice();
