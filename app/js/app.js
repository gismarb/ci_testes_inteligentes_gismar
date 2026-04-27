const TEST_EMAIL = 'admin@if.edu.br';
const TEST_PASSWORD = '123456';

function setMessage(element, text, type) {
  if (!element) {
    return;
  }

  element.textContent = text;
  element.className = `message ${type}`;
}

function configureLogin() {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('loginMessage');

  if (!form) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      setMessage(message, 'Informe e-mail e senha para continuar.', 'error');
      return;
    }

    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      localStorage.setItem('usuarioLogado', email);
      setMessage(message, 'Login realizado com sucesso.', 'success');
      window.location.href = 'dashboard.html';
      return;
    }

    setMessage(message, 'E-mail ou senha inválidos.', 'error');
  });
}

function configureCadastro() {
  const form = document.getElementById('cadastroForm');
  const message = document.getElementById('cadastroMessage');

  if (!form) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('emailCadastro').value.trim();
    const curso = document.getElementById('curso').value;

    if (!nome || !email || !curso) {
      setMessage(message, 'Preencha todos os campos obrigatórios.', 'error');
      return;
    }

    setMessage(message, 'Cadastro realizado com sucesso!', 'success');
    form.reset();
  });
}

function configureLogout() {
  const logoutLinks = document.querySelectorAll('#logoutLink');

  logoutLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      localStorage.removeItem('usuarioLogado');
    });
  });
}

configureLogin();
configureCadastro();
configureLogout();
