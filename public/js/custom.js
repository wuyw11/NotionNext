// 这里编写自定义js脚本；将被静态引入到页面中
// 这里编写自定义js脚本；将被静态引入到页面中
// 炫彩粒子爆炸 + 流光文字特效
(function () {
// 添加动画样式
const style = document.createElement('style');
style.textContent =     .click-particle {       position: fixed;       pointer-events: none;       z-index: 9999;       width: 8px;       height: 8px;       border-radius: 50%;       will-change: transform, opacity;     }     .click-text {       position: fixed;       pointer-events: none;       z-index: 10000;       font-size: 20px;       font-weight: bold;       white-space: nowrap;       font-family: 'Segoe UI', 'Poppins', system-ui, 'PingFang SC';       text-shadow: 0 0 5px currentColor;       will-change: transform, opacity;     }     @keyframes particleFly {       0% { transform: translate(0, 0) scale(1); opacity: 1; }       100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }     }     @keyframes textFloat {       0% { transform: translateY(0) scale(0.5); opacity: 1; filter: blur(0px); }       70% { transform: translateY(-60px) scale(1.2); opacity: 0.9; }       100% { transform: translateY(-120px) scale(0.8); opacity: 0; filter: blur(4px); }     }  ;
document.head.appendChild(style);

const texts = ['✨ 炫酷 ✨', '⚡ 炸裂 ⚡', '💥 嘭 💥', '🌈 彩虹', '🌟 星尘', '💖 心动', '🔥 燃爆', '🎉 快乐', '⭐️ 闪耀', '💎 璀璨'];

document.addEventListener('click', function (e) {
const x = e.clientX, y = e.clientY;

// 粒子系统（12~20个彩色粒子向四周飞散）
const particleCount = 12 + Math.floor(Math.random() * 10);
for (let i = 0; i < particleCount; i++) {
const particle = document.createElement('div');
particle.className = 'click-particle';
const angle = Math.random() * Math.PI * 2;
const distance = 60 + Math.random() * 100;
const dx = Math.cos(angle) * distance;
const dy = Math.sin(angle) * distance - 40;
particle.style.setProperty('--dx', dx + 'px');
particle.style.setProperty('--dy', dy + 'px');
particle.style.background = hsl(${Math.random() * 360}, 100%, 65%);
particle.style.left = (x - 4) + 'px';
particle.style.top = (y - 4) + 'px';
particle.style.animation = particleFly 0.6s ease-out forwards;
document.body.appendChild(particle);
particle.addEventListener('animationend', () => particle.remove());
}

// 上升炫光文字
const text = texts[Math.floor(Math.random() * texts.length)];
const span = document.createElement('div');
span.className = 'click-text';
span.textContent = text;
span.style.color = hsl(${Math.random() * 360}, 90%, 65%);
span.style.fontSize = (18 + Math.random() * 16) + 'px';
span.style.left = (x - 30) + 'px';
span.style.top = (y - 15) + 'px';
span.style.animation = textFloat 0.8s ease-out forwards;
document.body.appendChild(span);
span.addEventListener('animationend', () => span.remove());
});
})();
