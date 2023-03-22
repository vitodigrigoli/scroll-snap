const video = document.getElementById("video-bg")

let playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }

const departments = document.querySelectorAll('.services__list__department');
const popups = document.querySelectorAll('.popup');

const lottiePath = {
  'marketing': 'https://assets10.lottiefiles.com/packages/lf20_chcyxcbj.json',
  'social-managment': 'https://assets1.lottiefiles.com/packages/lf20_36mizzpb.json',
  'web-design': 'https://assets5.lottiefiles.com/packages/lf20_01jwptn4.json',
  'web-development': 'https://assets8.lottiefiles.com/packages/lf20_ctaacxzb.json',
  'graphic-design': 'https://assets9.lottiefiles.com/packages/lf20_2nbubmkc.json',
  'copy&content': 'https://assets6.lottiefiles.com/packages/lf20_eqWpPDzdOz.json',
  'branding': 'https://assets4.lottiefiles.com/packages/lf20_VwUsidH4D2.json',
  'motion&video': 'https://assets9.lottiefiles.com/packages/lf20_hgwne4xq.json',
  'photography': 'https://assets10.lottiefiles.com/packages/lf20_vcvl4urd.json',
  'seo': 'https://assets10.lottiefiles.com/packages/lf20_d5xpsakx.json',
  'web-security':'https://assets4.lottiefiles.com/packages/lf20_qtdordqf.json',
  'advertising':'https://assets9.lottiefiles.com/packages/lf20_rpgizkm4.json',
  'funding':'https://assets5.lottiefiles.com/packages/lf20_vLSIWiEpIC.json',
  'quality-control':'https://assets7.lottiefiles.com/packages/lf20_8Gsmmv/Quality_Contril.json',
  'events':'https://assets4.lottiefiles.com/packages/lf20_98vgucqb.json',
  'form': 'https://assets9.lottiefiles.com/packages/lf20_qdiq7qa5.json'
}


const openPopup = (department) => {

  const departament__attr = department.getAttribute('data-department')
  
    popups.forEach( popup =>{
      if (popup.getAttribute('data-department') === departament__attr) {
        const container = popup.querySelector('.container');
        const popup__img = container.querySelector('.popup__img');
        const child = '<lottie-player class="service-icon small" src="' + lottiePath[departament__attr] + '"  background="transparent"  speed="1"  loop  autoplay></lottie-player>'
        popup__img.innerHTML = child;
        popup.classList.add('popup--active');
      }
    })
}


const loader = document.getElementsByClassName('four-dots')[0]
const text_popup = document.getElementById("rs_form")
const lotties = document.querySelectorAll('.popup__img')

const closePopup = () => {

  popups.forEach( popup => {
    popup.classList.remove('popup--active')

    lotties.forEach( lottie => lottie.innerHTML = '')
  })
}


(function() {
        emailjs.init('ddVupeAA7v4I3fL4a');
      })();


document.getElementById('form').addEventListener('submit', (event) => {

  event.preventDefault();
  
  emailjs.init('ddVupeAA7v4I3fL4a');

  closePopup()
  document.querySelector('#popup_rs').classList.add('popup--active')

  loader.classList.remove('none')

  const val = document.getElementById('none').value;

  if(val == '') {
    emailjs.sendForm("service_yj1hoag","template_vq4tbhk", event.target)
    .then(function() {
      loader.classList.add('none')
      text_popup.innerHTML = "Il tuo messaggio è stato inviato correttamente";
      event.target.reset()
    
    }, function(error) {
      text_popup.innerHTML = "Invio non riuscito! Riprova di nuovo";          
    });
  }
});


let elements = document.querySelectorAll('.watch')

const observer = new IntersectionObserver( (items) =>{
	items.forEach( item => {
		if( item.isIntersecting){
			item.target.classList.add('in-view')
		}
		else{
			item.target.classList.remove('in-view')
		}
	})
}, { threshold: 0.01} )

elements.forEach( el => observer.observe(el))