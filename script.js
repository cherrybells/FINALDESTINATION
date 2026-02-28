function createPipes(delta) {
    pipeTimer += delta;

    const isMobile = window.innerWidth < 768;
    const spacing = isMobile ? CONFIG.pipeSpacingMobile : CONFIG.pipeSpacingDesktop;

    if (pipeTimer < spacing) return;
    pipeTimer = 0;

    // Set moderate gap for the bird to pass
    const gap = isMobile ? 180 : 150; // smaller than before, but passable
    const minPipeHeight = 60;         // minimum top/bottom pipe height
    const maxPipeHeight = window.innerHeight - gap - minPipeHeight;

    const topHeight = Math.random() * (maxPipeHeight - minPipeHeight) + minPipeHeight;
    const bottomHeight = window.innerHeight - gap - topHeight;

    // --- TOP PIPE ---
    const topPipe = document.createElement('div');
    topPipe.className = 'pipe_sprite';
    topPipe.style.height = topHeight + 'px';
    topPipe.style.top = '0px';
    topPipe.style.left = '100vw';
    topPipe.increase_score = '0';
    document.body.appendChild(topPipe);

    // --- BOTTOM PIPE ---
    const bottomPipe = document.createElement('div');
    bottomPipe.className = 'pipe_sprite';
    bottomPipe.style.height = bottomHeight + 'px';
    bottomPipe.style.top = topHeight + gap + 'px';
    bottomPipe.style.left = '100vw';
    bottomPipe.increase_score = '1';
    document.body.appendChild(bottomPipe);
}
