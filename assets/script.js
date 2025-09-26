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

