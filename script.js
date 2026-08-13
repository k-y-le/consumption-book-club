const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyH4YPqNGVa3tZA5VOQWcDr-mMf49h8QyL0SPTA-3aFqC1FCv6YDYDat8oWmcUvUbGz/exec';

const eventsData = {
    'light-eaters': {
        title: 'The Light Eaters',
        subtitle: 'by Zoë Schlanger — July 26, 2026 at Kingsland Wildflowers',
        description: `<p>A rooftop garden gathering exploring plant intelligence, communication & symbiosis through chef-crafted dishes & guided sensory activitities.</p><p>“We are what we eat” - a term often used in passing, without really considering the interconnectedness between ourselves and the ecosystems we belong to, consume from, and effect. Recent science has revealed that the gulf between plant and human experience is not as vast as many of us have been taught to believe. Plants can sense, remember, communicate, and even make decisions, upending everything we thought we knew about the line between "aware" and "inert." This session of Consumption Book Club turns that revelation into a menu, a garden walk, and embodied activities, guided by our reading: <i>The Light Eaters</i> by Zoë Schlanger.</p><p>This gathering, presented with <a href="https://www.nooarts.org/">Noo Arts,</a> explored plant intelligence, communication, and the strange, sensing world of the beings we so often reduce to background scenery. What does it mean to "consume" when the plants on our plates and in our environments are sensing, remembering, and responding to us all along?</p><p>Featuring guest chefs: Kendal Mitchell, Emma, Stuart Holton, Lilli Gluck</p><p class="credits">Photography by Stuart Holton</p>`,
        gallery: ['img/cbc4/cbc4_1.jpeg', 'img/cbc4/cbc4_2.jpeg', 'img/cbc4/cbc4_3.jpeg', 'img/cbc4/cbc4_4.jpeg', 'img/cbc4/cbc4_5.jpeg', 'img/cbc4/cbc4_6.jpeg', 'img/cbc4/cbc4_7.jpeg']
    },
    'annihilation': {
        title: 'Annihilation',
        subtitle: 'by Jeff VanderMeer — April 26, 2026 at Index Greenpoint',
        description: `<p>Celebrate Earth day and all the new things growing in spring through Jeff VanderMeer's surreal story, <i>Annihilation</i>. In this book, we follow a biologist who is keeping a diary to record her experience while investigating a strange ecological phenomenon called Area X, located within an ever expanding boundary known as “The Shimmer” that threatens to take over the world, where chaotic and rapid mutations unfold. The few who have successfully entered and returned have come back changed, with limited ability to explain anything that went on while in the boundaries. Our unnamed narrator goes in blind with six other scientists and attempts to gain some understanding on the page.</p>
        <p>The theme for this book club was “Re-Generation,” looking at evolution of thought and materials, symbiosis, and our intrinsic link to our world and one another. We explored a vegan tasting garden of verdant, springy meals (and cocktails!), creating our own responses and observations to their textures, flavors, appearance, and more in a guided, generative writing/creative workshop. Our own diaries were written, drawn, or sculpted on paper made from the waste of the very same food we responded to. This event included a hands on paper-making workshop with artist Lily Massee to get physically connected to our materials. After an initial round of writing responses, we then shared our work with one another and responded to fellow participants' work, creating an “exquisite corpse” that linked us to our food, our waste, our community, and our creative practices.</p>
        <p class="credits">Photography by Talisa Romagnoli</p>`,
        gallery: ['img/cbc3/cbc_1.JPG', 'img/cbc3/cbc_2.JPG', 'img/cbc3/cbc3_3.JPG', 'img/cbc3/cbc3_4.JPG', 'img/cbc3/cbc3_5.JPG', 'img/cbc3/cbc3_6.JPG', 'img/cbc3/cbc3_7.JPG']
    },
    'paradise-rot': {
        title: 'Paradise Rot',
        subtitle: 'by Jenny Hval — February 15, 2026 at Index Greenpoint',
        description: `
            <p>This session paired a guided sourdough pretzel-making workshop with an open group discussion of <i>Paradise Rot</i>, Jenny Hval's twisted novella of intimacy and decomposition. Our theme is "Consumed by You," and we discussed the crushes that can consume us, the fine line between disgust and pleasure, the sickly sweet obsession that comes with the honeymoon phase, and how to nurture and mature those feelings instead of letting them go to rot.</p>
            <p>In this gathering, participants...</p>
            <p>-  Learned how to proof, shape, and bake your own sourdough pretzels<br>
            -  Snacked on a fermented spread of cheese, pickles, beer, and kombucha<br>
            -  Engaged in guided discussion on <i>Paradise Rot</i><br>
            -  Received a printed zine of recipes, writing, and artwork inspired by the themes.</p><p class="credits">Photography by <a href="https://bennishumlin.com/" target="_blank">Benni Shumlin</a></p>
        `,
        gallery: ['img/cbc2/cbc2_1.JPG', 'img/cbc2/cbc2_2.JPG', 'img/cbc2/cbc2_3.JPG', 'img/cbc2/cbc2_4.JPG', 'img/cbc2/cbc2_5.JPG', 'img/cbc2/cbc2_6.JPG', 'img/cbc2/cbc2_7.JPG']
    },
    'land-of-milk-and-honey': {
        title: 'Land of Milk and Honey',
        subtitle: 'by C. Pam Zhang — December 5, 2025 at telos.haus',
        description: `
            <p><i>Land of Milk and Honey</i> by C. Pam Zhang is a beautiful novel that explores the risks that come from "overconsumption." In a near-dystopian-future, pollution has covered most of the earth in a thick smog, leading to a world-wide famine due to a mass extinction among crops and animals. While most of society subsists on genetically modified mung-protein-flour that can keep them alive, the nameless chef narrator of this story hungers for more.</p>
            <p>She finds her way into an exclusive research facility on the top of a mountain in Italy, where the rich live above the fog and fund the scientists working to bring back extinct species in exchange for elaborate meals and the certainty of their futures. As the new head chef, our narrator explores her own relationship with pleasure, pain, indulgence, want, and hunger.</p>
            <p>In a four-course meal, we read, discussed, and embodied some of the meals and themes from the book, screened a short film by Wendi Yan, and took home a zine of recipes and illustrations.</p>
            <p class="credits">Photography by <a href="https://www.eleanorpetry.com/" target="_blank">Eleanor Petry</a></p>
            `,
        gallery: ['img/cbc1/cbc1_1.jpg', 'img/cbc1/cbc1_2.jpg', 'img/cbc1/cbc1_3.jpg', 'img/cbc1/cbc1_4.jpg', 'img/cbc1/cbc1_5.jpg', 'img/cbc1/cbc1_6.jpg', 'img/cbc1/cbc1_7.jpg']
    }
};

// Placeholder copy/links — swap in real titles/descriptions/prices/purchase URLs later.
const zinesData = [
    {
        title: 'The Light Eaters Zine',
        description: 'A zine full of recipes, illustrations, and writings including features from our guest chefs.',
        price: '$10',
        purchaseUrl: 'https://buy.stripe.com/9B6cN6bJm73v4ADbgF5wI06',
        gallery: ['img/zine/zine4_1.jpg', 'img/zine/zine4_2.jpg']
    },
    {
        title: 'Annihilation Zine',
        description: 'A cook book zine of recipes, illustrations, and writings from our Annihilation gathering.',
        price: '$10',
        purchaseUrl: 'https://buy.stripe.com/6oUcN64gU87z5EH3Od5wI05',
        gallery: ['img/zine/zine3_1.jpg', 'img/zine/zine3_2.jpg', 'img/zine/zine3_3.jpg', 'img/zine/zine3_4.jpg']
    },
    {
        title: 'Paradise Rot Zine',
        description: 'Recipes, writing, and artwork inspired by our Paradise Rot sourdough pretzel-making session.',
        price: '$10',
        purchaseUrl: 'https://buy.stripe.com/6oUdRacNqafHffhbgF5wI04',
        gallery: ['img/zine/zine2_1.jpg', 'img/zine/zine2_2.jpg', 'img/zine/zine2_3.jpg', 'img/zine/zine2_4.jpg', 'img/zine/zine2_5.jpg']
    },
    {
        title: 'Land of Milk and Honey Zine',
        description: 'A commemorative cook book zine with recipes, illustrations, and writing from our Land of Milk and Honey gathering.',
        price: '$10',
        purchaseUrl: 'https://buy.stripe.com/dRm28sdRu3Rj4ADgAZ5wI03',
        gallery: ['img/zine/zine1_1.jpg', 'img/zine/zine1_2.jpg', 'img/zine/zine1_3.jpg', 'img/zine/zine1_4.jpg']
    }
];

document.addEventListener('DOMContentLoaded', function () {

    // ── Random accent theme (color set in <head> to avoid a flash) ────
    const spiralOverlay = document.getElementById('spiralOverlay');
    if (spiralOverlay && window.__cbcTheme) {
        spiralOverlay.src = window.__cbcTheme.spiral;
    }

    // ── Carousel ─────────────────────────────────────────────────────
    const carousel = document.querySelector('.image-carousel');
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-image');
        let idx = 0;
        setInterval(() => {
            images[idx].classList.remove('active');
            idx = (idx + 1) % images.length;
            images[idx].classList.add('active');
        }, 1500);
    }

    // ── Orb click → event detail ────────────────────────────────────
    const defaultContent = document.getElementById('defaultContent');
    const eventDetailContent = document.getElementById('eventDetailContent');
    const zineContent = document.getElementById('zineContent');
    const zineGrid = document.getElementById('zineGrid');
    const zineInvite = document.getElementById('zineInvite');
    const eventTitle = document.getElementById('eventTitle');
    const eventSubtitle = document.getElementById('eventSubtitle');
    const eventDetailText = document.getElementById('eventDetailText');
    const mainTitle = document.getElementById('mainTitle');
    const newsletterContainer = document.querySelector('.newsletter-container');
    let activeEvent = null;

    // ── Reusable carousel: builds slides into a container, auto-advances,
    // and lets prev/next arrows override the timer ──────────────────────
    function createCarousel(container, images, intervalMs) {
        const track = container.querySelector('.event-carousel-track');
        const prevBtn = container.querySelector('.carousel-prev');
        const nextBtn = container.querySelector('.carousel-next');
        track.innerHTML = images
            .map((src, i) => `<img src="${src}" alt="" class="carousel-slide${i === 0 ? ' active' : ''}">`)
            .join('');
        const slides = Array.from(track.querySelectorAll('.carousel-slide'));
        let index = 0;
        let timer = null;

        function show(i) {
            if (!slides.length) return;
            slides[index].classList.remove('active');
            index = (i + slides.length) % slides.length;
            slides[index].classList.add('active');
        }

        function restart() {
            clearInterval(timer);
            timer = setInterval(() => show(index + 1), intervalMs);
        }

        function stop() {
            clearInterval(timer);
        }

        if (prevBtn) prevBtn.addEventListener('click', () => { show(index - 1); restart(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { show(index + 1); restart(); });

        restart();
        return { stop };
    }

    // ── Event gallery carousel: auto-advances every 2s, arrows override ──
    const eventCarouselTrack = document.getElementById('eventCarouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    let gallerySlides = [];
    let galleryIndex = 0;
    let galleryTimer = null;

    function renderGallery(images) {
        eventCarouselTrack.innerHTML = images
            .map((src, i) => `<img src="${src}" alt="" class="carousel-slide${i === 0 ? ' active' : ''}">`)
            .join('');
        gallerySlides = Array.from(eventCarouselTrack.querySelectorAll('.carousel-slide'));
        galleryIndex = 0;
        restartGalleryTimer();
    }

    function showSlide(i) {
        if (!gallerySlides.length) return;
        gallerySlides[galleryIndex].classList.remove('active');
        galleryIndex = (i + gallerySlides.length) % gallerySlides.length;
        gallerySlides[galleryIndex].classList.add('active');
    }

    function restartGalleryTimer() {
        clearInterval(galleryTimer);
        galleryTimer = setInterval(() => showSlide(galleryIndex + 1), 1500);
    }

    function stopGalleryTimer() {
        clearInterval(galleryTimer);
    }

    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            showSlide(galleryIndex - 1);
            restartGalleryTimer();
        });
    }

    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            showSlide(galleryIndex + 1);
            restartGalleryTimer();
        });
    }

    // ── Zine sale cards: each gets its own independent carousel ───────
    let zineCarousels = [];

    function stopZineCarousels() {
        zineCarousels.forEach(c => c.stop());
        zineCarousels = [];
    }

    function renderZines() {
        zineGrid.innerHTML = zinesData
            .map((zine, i) => `
                <div class="zine-card">
                    <div class="event-carousel" data-zine="${i}">
                        <div class="event-carousel-track"></div>
                        <button class="carousel-arrow carousel-prev" aria-label="Previous image">&#8249;</button>
                        <button class="carousel-arrow carousel-next" aria-label="Next image">&#8250;</button>
                    </div>
                    <h3 class="zine-title">${zine.title}</h3>
                    <p class="zine-description">${zine.description}</p>
                    <div class="zine-meta">
                        <span class="zine-price">${zine.price}</span>
                        <a href="${zine.purchaseUrl}" class="btn zine-buy-btn" target="_blank" rel="noopener noreferrer">Purchase</a>
                    </div>
                </div>
            `)
            .join('');

        zineCarousels = Array.from(zineGrid.querySelectorAll('.event-carousel')).map((el, i) =>
            createCarousel(el, zinesData[i].gallery, 2000)
        );
    }

    function hideAllPanels() {
        defaultContent.classList.add('hidden');
        eventDetailContent.classList.add('hidden');
        zineContent.classList.add('hidden');
        if (carousel) carousel.classList.add('hidden');
        if (newsletterContainer) newsletterContainer.classList.add('hidden');
        stopGalleryTimer();
        stopZineCarousels();
        activeEvent = null;
    }

    // ── Routing: each view gets a shareable #hash URL ──────────────────
    const ZINES_ROUTE = 'zines';

    function setRouteHash(hash) {
        const url = hash ? `#${hash}` : location.pathname + location.search;
        if (location.hash !== (hash ? `#${hash}` : '')) {
            history.pushState(null, '', url);
        }
    }

    function showDetail(eventKey, { updateUrl = true } = {}) {
        hideAllPanels();
        const event = eventsData[eventKey];
        eventTitle.textContent = event.title;
        eventSubtitle.textContent = event.subtitle || '';
        eventDetailText.innerHTML = event.description;
        renderGallery(event.gallery || []);
        eventDetailContent.classList.remove('hidden');
        activeEvent = eventKey;
        if (updateUrl) setRouteHash(eventKey);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showZines({ updateUrl = true } = {}) {
        hideAllPanels();
        renderZines();
        zineContent.classList.remove('hidden');
        if (updateUrl) setRouteHash(ZINES_ROUTE);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showIndex({ updateUrl = true } = {}) {
        hideAllPanels();
        defaultContent.classList.remove('hidden');
        if (carousel) carousel.classList.remove('hidden');
        if (newsletterContainer) newsletterContainer.classList.remove('hidden');
        if (updateUrl) setRouteHash('');
    }

    function applyRoute() {
        const hash = decodeURIComponent(location.hash.slice(1));
        if (hash === ZINES_ROUTE) {
            showZines({ updateUrl: false });
        } else if (eventsData[hash]) {
            showDetail(hash, { updateUrl: false });
        } else {
            showIndex({ updateUrl: false });
        }
    }

    document.querySelectorAll('.orb').forEach(orb => {
        orb.addEventListener('click', () => {
            const key = orb.dataset.event;
            if (activeEvent === key) {
                showIndex();
            } else {
                showDetail(key);
            }
        });
    });

    if (mainTitle) {
        mainTitle.addEventListener('click', () => showIndex());
    }

    if (zineInvite) {
        zineInvite.addEventListener('click', () => showZines());
    }

    window.addEventListener('popstate', applyRoute);
    applyRoute();

    // ── Floating orbs: bounce off screen edges like a screensaver ─────
    // Collision bounds use the flyer image's own size (not the container,
    // which also holds the always-present-but-invisible label), so the
    // image visually touches the edge before it bounces.
    const orbEls = Array.from(document.querySelectorAll('.orb'));
    const orbs = [];

    function whenImageReady(img) {
        if (img.complete && img.naturalWidth) return Promise.resolve();
        return new Promise(resolve => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
        });
    }

    orbEls.forEach(el => {
        const img = el.querySelector('.orb-img');
        whenImageReady(img).then(() => {
            const w = img.offsetWidth;
            const h = img.offsetHeight;
            const x = Math.random() * Math.max(window.innerWidth - w, 0);
            const y = Math.random() * Math.max(window.innerHeight - h, 0);
            const angle = Math.random() * Math.PI * 2;
            const speed = 110 + Math.random() * 60; // px/s
            el.style.left = x + 'px';
            el.style.top = y + 'px';
            const state = {
                el, w, h, x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                paused: false
            };
            el.addEventListener('mouseenter', () => { state.paused = true; });
            el.addEventListener('mouseleave', () => { state.paused = false; });
            orbs.push(state);
        });
    });

    let lastFrame = performance.now();
    function stepOrbs(now) {
        const dt = Math.min((now - lastFrame) / 1000, 0.05);
        lastFrame = now;
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        orbs.forEach(o => {
            if (o.paused) return;

            o.x += o.vx * dt;
            o.y += o.vy * dt;

            if (o.x <= 0) {
                o.x = 0;
                o.vx = Math.abs(o.vx);
            } else if (o.x + o.w >= vw) {
                o.x = vw - o.w;
                o.vx = -Math.abs(o.vx);
            }

            if (o.y <= 0) {
                o.y = 0;
                o.vy = Math.abs(o.vy);
            } else if (o.y + o.h >= vh) {
                o.y = vh - o.h;
                o.vy = -Math.abs(o.vy);
            }

            o.el.style.left = o.x + 'px';
            o.el.style.top = o.y + 'px';
        });

        requestAnimationFrame(stepOrbs);
    }
    requestAnimationFrame(stepOrbs);

    window.addEventListener('resize', () => {
        orbs.forEach(o => {
            o.x = Math.min(o.x, Math.max(window.innerWidth - o.w, 0));
            o.y = Math.min(o.y, Math.max(window.innerHeight - o.h, 0));
        });
    });

    // ── Newsletter ────────────────────────────────────────────────────
    async function handleEmailSubmit(emailInput, subscribeBtn, checkmark) {
        const email = emailInput.value.trim();
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        subscribeBtn.disabled = true;
        subscribeBtn.textContent = 'sending...';

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            subscribeBtn.style.display = 'none';
            emailInput.style.display = 'none';
            checkmark.style.display = 'block';
            emailInput.value = '';

            setTimeout(() => {
                subscribeBtn.style.display = 'block';
                emailInput.style.display = 'block';
                checkmark.style.display = 'none';
                subscribeBtn.disabled = false;
                subscribeBtn.textContent = 'stay tuned';
            }, 3000);
        } catch (err) {
            console.error(err);
            alert('There was an error submitting your email. Please try again.');
            subscribeBtn.disabled = false;
            subscribeBtn.textContent = 'stay tuned';
        }
    }

    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('emailInput');
    const checkmark = document.getElementById('checkmark');

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => handleEmailSubmit(emailInput, subscribeBtn, checkmark));
        emailInput.addEventListener('keypress', e => { if (e.key === 'Enter') subscribeBtn.click(); });
    }
});
