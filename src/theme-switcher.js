const inputSwitcherEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// localStorage tester
if (localStorage.getItem('Theme') === Theme.DARK) {
    bodyEl.classList.add('dark-theme');
    bodyEl.classList.remove('light-theme');
    inputSwitcherEl.checked = true;
};

if (localStorage.getItem('Theme') === Theme.LIGHT) {
    bodyEl.classList.add('light-theme');
    bodyEl.classList.remove('dark-theme');
    inputSwitcherEl.checked = false;
};


// theme switcher function

inputSwitcherEl.addEventListener('change', themeSwitcher);

function themeSwitcher() {
    if (inputSwitcherEl.checked) {
        bodyEl.classList.add('dark-theme');
        bodyEl.classList.remove('light-theme');
        localStorage.setItem('Theme', Theme.DARK);
        return
    };

    if (!inputSwitcherEl.checked) {
        bodyEl.classList.add('light-theme');
        bodyEl.classList.remove('dark-theme');
        localStorage.setItem('Theme', Theme.LIGHT);
    };
};

