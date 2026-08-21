document.getElementById('year').textContent = new Date().getFullYear();

const THEME_KEY = 'diamante-theme';
const themeToggle = document.getElementById('themeToggle');
const themedImages = document.querySelectorAll('[data-src-light][data-src-dark]');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themedImages.forEach((img) => {
    img.src = theme === 'dark' ? img.dataset.srcDark : img.dataset.srcLight;
  });
}

applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navList.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealTargets = document.querySelectorAll(
  '.service-card, .differential, .about-text, .about-media, .form-intro, .quote-form, .hero-stats'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

const WHATSAPP_NUMBER = '5561992492922';
const quoteForm = document.getElementById('quoteForm');
const formNote = document.getElementById('formNote');

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(quoteForm).entries());

  if (!data.nome || !data.telefone || !data.servico) {
    formNote.textContent = 'Preencha nome, telefone e tipo de serviço para continuar.';
    return;
  }

  const lines = [
    'Olá, Viação Diamante! Gostaria de solicitar um orçamento.',
    `Nome: ${data.nome}`,
    `Telefone: ${data.telefone}`,
    data.email ? `E-mail: ${data.email}` : null,
    `Serviço: ${data.servico}`,
    data.origem ? `Origem: ${data.origem}` : null,
    data.destino ? `Destino: ${data.destino}` : null,
    data.data ? `Data prevista: ${data.data}` : null,
    data.passageiros ? `Passageiros: ${data.passageiros}` : null,
    data.mensagem ? `Detalhes: ${data.mensagem}` : null,
  ].filter(Boolean);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;

  formNote.textContent = 'Abrindo o WhatsApp com sua solicitação preenchida...';
  window.open(whatsappUrl, '_blank', 'noopener');
  quoteForm.reset();
});
