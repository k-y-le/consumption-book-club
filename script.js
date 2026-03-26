const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyH4YPqNGVa3tZA5VOQWcDr-mMf49h8QyL0SPTA-3aFqC1FCv6YDYDat8oWmcUvUbGz/exec';

const eventsData = {
    'annihilation': {
        title: 'Annihilation',
        subtitle: 'by Jeff VanderMeer — April 26, 2026 at Index Greenpoint',
        flyer: 'img/cbc3_flyer.png',
        description: `<p>Celebrate Earth day and all the new things growing in spring through Jeff VanderMeer’s surreal story, <i>Annihilation</i>. In this book, we follow a biologist who is keeping a diary to record her experience while investigating a strange ecological phenomenon called Area X, located within an ever expanding boundary known as “The Shimmer” that threatens to take over the world, where chaotic and rapid mutations unfold. The few who have successfully entered and returned have come back changed, with limited ability to explain anything that went on while in the boundaries. Our unnamed narrator goes in blind with six other scientists and attempts to gain some understanding on the page.</p>
        <p>The theme for this book club will be “Re-Generation,” looking at evolution of thought and materials, symbiosis, and our intrinsic link to our world and one another. We will explore a vegan tasting garden of verdant, springy meals (and cocktails!), creating our own responses and observations to their textures, flavors, appearance, and more in a guided, generative writing/creative workshop. Our diaries will be written, drawn, or sculpted on paper made from the waste of the very same food we are responding to. This event will also include a hands on paper-making workshop with artist Lily Massee to get physically connected to our materials. After an initial round of writing responses, we will then share our work with one another and respond to fellow participants' work, creating an “exquisite corpse” that links us to our food, our waste, our community, and our creative practices. This event is for artists, creatives, scientists, and tasters of all kinds of experience levels. Come one, come all!</p>
        <p>And as always, come hungry. We promise you will leave full of good food, new connections, and the first sprouts of budding projects to rejuvenate your creative practices. Participants will also take home a commemorative “cook book” zine with recipes, illustrations, and writings around the book and theme—as well as your own, hand-made paper!</p>`,
        gallery: []
    },
    'paradise-rot': {
        title: 'Paradise Rot',
        subtitle: 'by Jenny Hval — February 15, 2026 at Index Greenpoint',
        flyer: 'img/cbc2_flyer.png',
        description: `
            <p>This session pairs a guided sourdough pretzel-making workshop with an open group discussion of Paradise Rot, Jenny Hval's twisted novella of intimacy and decomposition. Our theme is "Consumed by You," and we'll discuss the crushes that can consume us, the fine line between disgust and pleasure, the sickly sweet obsession that comes with the honeymoon phase, and how to nurture and mature those feelings instead of letting them go to rot.</p>
            <p>Participants will…</p>
            <p>Learn how to proof, shape, and bake your own sourdough pretzels (and take some home!)<br>
            Snack on a fermented spread of cheese, pickles, beer, and kombucha<br>
            Engage in guided discussion on Paradise Rot—no prior reading required<br>
            Receive a printed zine of recipes, writing, and artwork inspired by the themes.</p>
            <p>Through these events, we help shape counter-consumer-culture, where instead of feeling driven towards buying into short lived products and experiences in order to feel connected to each other, we intentionally spend our time and attention towards consuming that which actually feeds us: connecting with our community, expanding our thoughts, and doing both over delicious, thoughtful, and satiating meals.</p>
        `,
        gallery: []
    },
    'land-of-milk-and-honey': {
        title: 'Land of Milk and Honey',
        subtitle: 'by C. Pam Zhang — December 5, 2025 at telos.haus',
        flyer: 'img/cbc1_flyer.png',
        description: `
            <p>Land of Milk and Honey by C. Pam Zhang is a beautiful novel that explores the risks that come from "overconsumption." In a near-dystopian-future, pollution has covered most of the earth in a thick smog, leading to a world-wide famine due to a mass extinction among crops and animals. While most of society subsists on genetically modified mung-protein-flour that can keep them alive, the nameless chef narrator of this story hungers for more.</p>
            <p>She finds her way into an exclusive research facility on the top of a mountain in Italy, where the rich live above the fog and fund the scientists working to bring back extinct species in exchange for elaborate meals and the certainty of their futures. As the new head chef, our narrator explores her own relationship with pleasure, pain, indulgence, want, and hunger.</p>
            <p class="credits">Photography by <a href="https://www.eleanorpetry.com/" target="_blank">Eleanor Petry</a></p>
            `,
        gallery: []
    }
};

document.addEventListener('DOMContentLoaded', function () {

    // ── Mobile carousel ──────────────────────────────────────────────
    function setupCarousel(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        const images = container.querySelectorAll('.carousel-image');
        let idx = 0;
        setInterval(() => {
            images[idx].classList.remove('active');
            idx = (idx + 1) % images.length;
            images[idx].classList.add('active');
        }, 1000);
    }
    setupCarousel('.mobile-only.image-carousel');
    setupCarousel('.desktop-carousel');

    // ── Flyer hover / click ───────────────────────────────────────────
    const mainTitle = document.getElementById('mainTitle');
    const mainSubtitle = document.getElementById('mainSubtitle');
    const defaultTitle = mainTitle.textContent;
    const defaultSubtitle = mainSubtitle.textContent;
    const defaultContent = document.getElementById('defaultContent');
    const eventDetailContent = document.getElementById('eventDetailContent');
    const desktopCarousel = document.querySelector('.desktop-carousel');
    const mobileCarousel = document.querySelector('.mobile-only.image-carousel');
    let activeEvent = null;

    function setTitle(text) {
        mainTitle.classList.add('fading');
        setTimeout(() => {
            mainTitle.textContent = text;
            mainTitle.classList.remove('fading');
        }, 150);
    }

    function setSubtitle(text) {
        mainSubtitle.classList.add('fading');
        setTimeout(() => {
            mainSubtitle.textContent = text;
            mainSubtitle.classList.remove('fading');
        }, 150);
    }

    function populateDetail(eventKey) {
        const event = eventsData[eventKey];
        document.getElementById('eventDetailText').innerHTML = event.description;
        const gallery = document.getElementById('eventGallery');
        gallery.innerHTML = '';
        event.gallery.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = event.title;
            gallery.appendChild(img);
        });
    }

    function showDetail(eventKey) {
        populateDetail(eventKey);
        defaultContent.classList.add('hidden');
        desktopCarousel.classList.add('hidden');
        if (mobileCarousel) mobileCarousel.classList.add('hidden');
        eventDetailContent.classList.remove('hidden');
        setTitle(eventsData[eventKey].title);
        setSubtitle(eventsData[eventKey].subtitle || '');
    }

    function showIndex() {
        eventDetailContent.classList.add('hidden');
        defaultContent.classList.remove('hidden');
        desktopCarousel.classList.remove('hidden');
        if (mobileCarousel) mobileCarousel.classList.remove('hidden');
        setTitle(defaultTitle);
        setSubtitle(defaultSubtitle);
        document.querySelectorAll('.flyer-img, .dock-img').forEach(i => i.classList.remove('active'));
        activeEvent = null;
    }

    // Desktop flyer hover/click
    document.querySelectorAll('.flyer-img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            showDetail(img.dataset.event);
        });
        img.addEventListener('mouseleave', () => {
            if (activeEvent) {
                showDetail(activeEvent);
            } else {
                showIndex();
            }
        });
        img.addEventListener('click', () => {
            if (activeEvent === img.dataset.event) {
                showIndex();
            } else {
                document.querySelectorAll('.flyer-img').forEach(i => i.classList.remove('active'));
                img.classList.add('active');
                activeEvent = img.dataset.event;
                document.querySelector('.left-col').scrollTop = 0;
            }
        });
    });

    // Mobile dock click
    document.querySelectorAll('.dock-img').forEach(img => {
        img.addEventListener('click', () => {
            if (activeEvent === img.dataset.event) {
                showIndex();
            } else {
                document.querySelectorAll('.dock-img').forEach(i => i.classList.remove('active'));
                img.classList.add('active');
                activeEvent = img.dataset.event;
                showDetail(img.dataset.event);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
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
