// 加载动画至少显示 3 秒钟
  const minLoadingTime = 3000; // 最少显示 3000ms = 3秒
  const startTime = Date.now();

  window.addEventListener("load", function() {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minLoadingTime - elapsed);

    setTimeout(() => {
      // 淡出效果
      const loadingEl = document.getElementById("loading");
      loadingEl.style.transition = "opacity 1.5s ease";
      loadingEl.style.opacity = 0;

      // 0.5s 后彻底隐藏
      setTimeout(() => {
        loadingEl.remove();
      }, 500);
    }, remaining);
  });
// 进度条
window.onscroll = function() {
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var progress = (scrollTop / docHeight) * 100.0;//控制进度条长度
    document.getElementById('progress-bar').style.width = progress + '%';
};
//to-top按钮
// 当页面滚动超过 200px 时显示按钮
window.addEventListener("scroll", function() {
  const toTopButton = document.getElementById("toTopButton");
  if (window.scrollY > 200) {
    toTopButton.classList.remove("d-none");
  } else {
    toTopButton.classList.add("d-none");
  }
});

// 点击按钮平滑滚动到顶部
document.getElementById("toTopButton").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

