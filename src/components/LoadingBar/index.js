import LoadingBar from './LoadingBar';

let instance;
let timerId;
let width = 2;

function clearTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

// 全局仅生成一个实例
function getInstance() {
  instance = instance || new LoadingBar({ width });
  return instance;
}

function destroy() {
  clearTimer();
  const inst = getInstance();
  setTimeout(() => {
    inst.update({
      show: false,
    });
    inst.destroy();
    instance = null;
  }, 2000);
}

function updateInstance(options) {
  const inst = getInstance();
  inst.update(options);

  if (options.progress && options.progress >= 100) {
    destroy();
  }
}

function start() {
  if (!timerId) {
    let progress = 0;
    timerId = setInterval(() => {
      progress += 10;
      if (progress >= 90) {
        console.log('clear');
        clearInterval(timerId);
        timerId = null;
      }
      updateInstance({
        progress,
      });
    }, 200);
  }
}

function update(progress) {
  clearTimer();
  updateInstance({
    progress,
  });
}

function error() {
  clearTimer();
  updateInstance({
    progress: 100,
    status: 'error',
  });
}

function finish() {
  update(100);
}

function config({ width: _width }) {
  if (_width) {
    width = _width;
  }
}

export default {
  start,
  update,
  error,
  finish,
  config,
};
