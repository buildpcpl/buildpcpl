
document.addEventListener('DOMContentLoaded', function () {
  console.log("Strona w budowie - ładowanie z przesuwającymi się paskami.");

  const wybierzPodstawowy = document.getElementById('wybierz-podstawowy');
  const wybierzZaawansowany = document.getElementById('wybierz-zaawansowany');
  const formPodstawowy = document.getElementById('form-podstawowy');
  const formZaawansowany = document.getElementById('form-zaawansowany');
  const form1 = document.getElementById('wycena-podstawowa');
  const form2 = document.getElementById('wycena-zaawansowana');

  if (wybierzPodstawowy && wybierzZaawansowany && formPodstawowy && formZaawansowany) {
      wybierzPodstawowy.addEventListener('click', function () {
          formPodstawowy.style.display = 'block';
          formZaawansowany.style.display = 'none';
      });

      wybierzZaawansowany.addEventListener('click', function () {
          formZaawansowany.style.display = 'block';
          formPodstawowy.style.display = 'none';
      });
  }

  if (form1) {
      form1.addEventListener('submit', function (event) {
          event.preventDefault();
          sendEmail(this);
      });
  }

  if (form2) {
      form2.addEventListener('submit', function (event) {
          event.preventDefault();
          sendEmail(this);
      });
  }

  function sendEmail(form) {
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());

      const emailContent = `
          Imię i Nazwisko: ${formValues['imie-nazwisko'] || formValues['imie-nazwisko-zaawansowane'] || ''}
          Email: ${formValues['email'] || formValues['email-zaawansowane'] || ''}
          Kwota zestawu: ${formValues['kwota'] || formValues['kwota-zaawansowane'] || ''}
          Opis: ${formValues['opis'] || ''}
          ${formValues['procesor'] ? `Procesor: ${formValues['procesor']}` : ''}
          ${formValues['karta-graficzna'] ? `Karta Graficzna: ${formValues['karta-graficzna']}` : ''}
          ${formValues['plyta-glowna'] ? `Płyta Główna: ${formValues['plyta-glowna']}` : ''}
          ${formValues['ram'] ? `Pamięć RAM: ${formValues['ram']}` : ''}
          ${formValues['dyski'] ? `Dyski: ${formValues['dyski']}` : ''}
          ${formValues['chlodzenie'] ? `Chłodzenie: ${formValues['chlodzenie']}` : ''}
          ${formValues['zasilacz'] ? `Zasilacz: ${formValues['zasilacz']}` : ''}
          ${formValues['obudowa'] ? `Obudowa: ${formValues['obudowa']}` : ''}
      `;

      emailjs.send("service_pk66unl", "template_uq9otwr", {
          from_name: formValues['imie-nazwisko'] || formValues['imie-nazwisko-zaawansowane'] || '',
          email: formValues['email'] || formValues['email-zaawansowane'] || '',
          kwota: formValues['kwota'] || formValues['kwota-zaawansowane'] || '',
          opis: formValues['opis'] || '',
          content: emailContent.trim()
      })
      .then(function(response) {
          console.log("Wiadomość wysłana", response);
          alert("Prośba o wycenę została wysłana.");
          form.reset();
      })
      .catch(function(error) {
          console.error("Wystąpił błąd", error);
          alert("Wystąpił błąd. Spróbuj ponownie.");
      });
  }
});



document.addEventListener('DOMContentLoaded', function () {
  console.log("Strona w budowie - ładowanie z przesuwającymi się paskami.");

  const wybierzPodstawowy = document.getElementById('wybierz-podstawowy');
  const wybierzZaawansowany = document.getElementById('wybierz-zaawansowany');
  const formPodstawowy = document.getElementById('form-podstawowy');
  const formZaawansowany = document.getElementById('form-zaawansowany');
  const form1 = document.getElementById('wycena-podstawowa');
  const form2 = document.getElementById('wycena-zaawansowana');

  if (wybierzPodstawowy && wybierzZaawansowany && formPodstawowy && formZaawansowany) {
      wybierzPodstawowy.addEventListener('click', function () {
          formPodstawowy.style.display = 'block';
          formZaawansowany.style.display = 'none';
      });

      wybierzZaawansowany.addEventListener('click', function () {
          formZaawansowany.style.display = 'block';
          formPodstawowy.style.display = 'none';
      });
  }

  if (form1) {
      form1.addEventListener('submit', function (event) {
          event.preventDefault();
          sendEmail(this);
      });
  }

  if (form2) {
      form2.addEventListener('submit', function (event) {
          event.preventDefault();
          sendEmail(this);
      });
  }

  function sendEmail(form) {
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());

      const emailContent = `
          Imię i Nazwisko: ${formValues['imie-nazwisko'] || formValues['imie-nazwisko-zaawansowane'] || ''}
          Email: ${formValues['email'] || formValues['email-zaawansowane'] || ''}
          Kwota zestawu: ${formValues['kwota'] || formValues['kwota-zaawansowane'] || ''}
          Opis: ${formValues['opis'] || ''}
          ${formValues['procesor'] ? `Procesor: ${formValues['procesor']}` : ''}
          ${formValues['karta-graficzna'] ? `Karta Graficzna: ${formValues['karta-graficzna']}` : ''}
          ${formValues['plyta-glowna'] ? `Płyta Główna: ${formValues['plyta-glowna']}` : ''}
          ${formValues['ram'] ? `Pamięć RAM: ${formValues['ram']}` : ''}
          ${formValues['dyski'] ? `Dyski: ${formValues['dyski']}` : ''}
          ${formValues['chlodzenie'] ? `Chłodzenie: ${formValues['chlodzenie']}` : ''}
          ${formValues['zasilacz'] ? `Zasilacz: ${formValues['zasilacz']}` : ''}
          ${formValues['obudowa'] ? `Obudowa: ${formValues['obudowa']}` : ''}
      `;

      emailjs.send("service_pk66unl", "template_uq9otwr", {
          from_name: formValues['imie-nazwisko'] || formValues['imie-nazwisko-zaawansowane'] || '',
          email: formValues['email'] || formValues['email-zaawansowane'] || '',
          kwota: formValues['kwota'] || formValues['kwota-zaawansowane'] || '',
          opis: formValues['opis'] || '',
          content: emailContent.trim()
      })
      .then(function(response) {
          console.log("Wiadomość wysłana", response);
          alert("Prośba o wycenę została wysłana.");
          form.reset();
      })
      .catch(function(error) {
          console.error("Wystąpił błąd", error);
          alert("Wystąpił błąd. Spróbuj ponownie.");
      });
  }
});


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // animuj tylko raz
    }
  });
}, {
  threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});


