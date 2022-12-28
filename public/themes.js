const themeCheckbox = document.getElementById('checkbox-theme');

function setTheme(theme) {
    localStorage.setItem('theme', theme);
}

function getTheme() {
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
}

function applyTheme(theme) {
    switch (theme) {
        case 'light':
            document.documentElement.style.setProperty('--background', '#e7eff9');
            document.documentElement.style.setProperty('--article-gradient-top', '#fff8');
            document.documentElement.style.setProperty('--article-gradient-bottom', '#fff4');
            document.documentElement.style.setProperty('--shadow', '#2393');
            document.documentElement.style.setProperty('--highlight', '#fffd');
            document.documentElement.style.setProperty('--text', '#234');
            document.documentElement.style.setProperty('--links', '#4a80ed');
            themeCheckbox.checked = true;
            break;
    
        default:
            document.documentElement.style.setProperty('--background', '#1a1a20');
            document.documentElement.style.setProperty('--article-gradient-top', '#31313f88');
            document.documentElement.style.setProperty('--article-gradient-bottom', '#31313f3a');
            document.documentElement.style.setProperty('--shadow', '#000005d0');
            document.documentElement.style.setProperty('--highlight', '#313141ee');
            document.documentElement.style.setProperty('--text', '#dde');
            document.documentElement.style.setProperty('--links', '#72a8ff');
            themeCheckbox.checked = false;
            break;
    }
}

themeCheckbox.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'light' : 'dark';
    setTheme(theme);
    applyTheme(theme);
});

applyTheme(getTheme());