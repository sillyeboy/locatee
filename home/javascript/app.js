// Made by Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
// Credits to expl0it, shellcode.team
// GitHub: https://github.com/Lumm1t/obnoxious.club

class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.2;
  musicFadeIn = 3000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['/locate on top', 'we up', 'public party', '⛧'];
}

const app = new _app();
