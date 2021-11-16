const sounds = ['applause', 'boo', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button');

    btn.classList.add('btn');
    btn.innerHTML = sound;

    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
})