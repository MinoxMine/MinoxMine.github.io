<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width,initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #000;
    }
  </style>
</head>
<body>
<!-- STITCH_THREEJS_START:ANIMATION_22 class="fixed inset-0 w-full h-full bg-transparent" -->
<div class="fixed inset-0 w-full h-full bg-transparent" style="display:block;">
<script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js"></script>
<div id="threejs-container-ANIMATION_22" style="width:100%;height:100%"></div>
<script>
(function() {
  const container = document.getElementById('threejs-container-ANIMATION_22');
  const devicePixelRatio = window.devicePixelRatio || 1;
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Minox Network Site Initialized');

    // Smooth Scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Copy IP Address Functionality
    const copyButtons = document.querySelectorAll('[data-copy-ip]');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const ip = 'minox.mineserver.xyz';
            navigator.clipboard.writeText(ip).then(() => {
                const originalText = btn.innerText;
                btn.innerText = 'СКОПИРОВАНО!';
                btn.classList.add('bg-green-600');
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-green-600');
                }, 2000);
            }).catch(err => {
                console.error('Ошибка при копировании:', err);
            });
        });
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('#mobile-menu-btn');
    const navDrawer = document.querySelector('#nav-drawer');
    const closeDrawerBtn = document.querySelector('#close-drawer-btn');

    if (menuBtn && navDrawer) {
        menuBtn.addEventListener('click', () => {
            navDrawer.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });
    }

    if (closeDrawerBtn && navDrawer) {
        closeDrawerBtn.addEventListener('click', () => {
            navDrawer.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    }
});
})();
</script>
</div>
<!-- STITCH_THREEJS_END:ANIMATION_22 -->
</body>
</html>
