let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discord.com/users/1001100533236518923';
      break;
    case 'twitter':
      url = 'https://twitter.com/iNxsyy_';
      break;
    case 'info':
      url = 'https://ranwex.tk/about.html';
      break;
  }

  window.open(url);
}

function typerStartTyping(typer) {
  typer.reset();

  let text = ['Sanal'];

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

function switchScreen() {
  document.title = 'Ranwex';

  $('.intro').fadeOut(1000, function () {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });

  ['background', 'rain'].forEach(function (audioName) {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio')
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none'
    
    audioElement.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });
    audioElement.play();
  });
}

function startIntroTyping() {
  switchScreen()
  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}
document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  switchScreen()
});
console.log("U2VsaW4gPDMgWXVzdWY=")
