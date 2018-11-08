'use strict'
$$('.dialog').forEach(dialog => dialog.addEventListener('click', e => dialog.classList.remove('open')));
$$('.dialog-2').forEach(dialog => dialog.addEventListener('click', e => dialog.classList.remove('open')));

$$('.js-img').forEach(img => img.addEventListener('click', e => $('.dialog').classList.add('open')))
$$('.js-img-2').forEach(img => img.addEventListener('click', e => $('.dialog-2').classList.add('open')))
