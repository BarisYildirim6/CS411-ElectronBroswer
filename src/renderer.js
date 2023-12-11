import './index.css';

const back = document.getElementById('back-button');
const forward = document.getElementById('forward-button');
const reload = document.getElementById('reload-button');
const search = document.getElementById('search-button');
const newtab = document.getElementById('newtab-button');
const go = document.getElementById('go');

const urlInput = document.getElementById('url-input');

const webview = document.getElementById('webview');
let url = '';

urlInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		handleUrl();
	}
});

if (!url) {
	url = 'https://www.google.com';
	urlInput.value = url;
	webview.src = url;
}

go.addEventListener('click', (event) => {
	event.preventDefault();
	handleUrl();
});

newtab.addEventListener('click', () => {
	api.newWindow();
});

search.addEventListener('click', () => {
	url = 'https://www.google.com';
	urlInput.value = url;
	webview.src = url;
});

back.addEventListener('click', () => {
	webview.goBack();
});

forward.addEventListener('click', () => {
	webview.goForward();
});

reload.addEventListener('click', () => {
	webview.reload();
});

webview.addEventListener('did-navigate', (event) => {
	url = event.url;
	urlInput.value = url;
});

function handleUrl() {
	let url = '';
	const inputUrl = urlInput.value;

	if (inputUrl.startsWith('http://') || inputUrl.startsWith('https://')) {
		url = inputUrl;
	} else {
		url = 'http://' + inputUrl;
	}

	webview.src = url;
}
