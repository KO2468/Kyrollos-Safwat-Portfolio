const progress = document.querySelector('.progress');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / max) * 100}%`;
});

toggle.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
