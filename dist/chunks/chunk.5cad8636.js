import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from './chunk.2a6b4664.js';
import 'html-escaper';
/* empty css                */
const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="page-header">
    <div class="page-header__container">
        <nav class="page-header__nav" aria-label="Main nav">
            <ul class="page-header__nav-list nav-list">
                <li class="nav-list__item">
                    <a href="#intro-section" class="nav-list__link">Home</a>
                </li>
                <li>
                    <a href="#about-section">About me</a>
                </li>
                <li class="nav-list__item">
                    <a href="#portfolio-section" class="nav-list__link">Portfolio</a>
                </li>
            </ul>
        </nav>
        <ul class="page-header__socials">
            <li>
                <a href="https://www.linkedin.com/in/alex-shvaba/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    <span class="visually-hidden">My page on Linkedin</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/shvaba-alex" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-3.8 23.39c.6.1.8-.26.8-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.09-.72.09-.72 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.94 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.33 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17a4.63 4.63 0 0 1 1.24 3.22c0 4.61-2.81 5.63-5.48 5.92.43.38.82 1.1.82 2.23v3.29c0 .32.2.7.8.58A12 12 0 0 0 12 0z"></path></svg>
                    <span class="visually-hidden">My page on GitHub</span>
                </a>
            </li>
        </ul>
    </div>
</header>`;
}, "C:/Users/shvaba/Desktop/projects/markup-template/src/components/Header.astro");

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="page-footer"></footer>`;
}, "C:/Users/shvaba/Desktop/projects/markup-template/src/components/Footer.astro");

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderComponent($$result, "Header", $$Header, {})}
		${renderSlot($$result, $$slots["default"])}
		${renderComponent($$result, "Footer", $$Footer, {})}
		<div class="page-overlay"></div>
		<div class="page-popups-area"></div>
	</body></html>`;
}, "C:/Users/shvaba/Desktop/projects/markup-template/src/layouts/Layout.astro");

const $$Astro$1 = createAstro();
const $$PortfolioCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioCard;
  const { href, tags, title, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="portfolio-card">
	<div class="portfolio-card__image-wrapper">
		<img${addAttribute(image, "src")}${addAttribute(title, "alt")}>
	</div>
	<h3 class="portfolio-card__title text-h3">
		<a${addAttribute(href, "href")} class="portfolio-card__link" target="_blank">${title}</a>
	</h3>
	<ul class="portfolio-card__tags">
		${tags.map((tag) => {
    return renderTemplate`<li class="portfolio-card__tag">${tag}</li>`;
  })}
	</ul>
</div>`;
}, "C:/Users/shvaba/Desktop/projects/markup-template/src/components/PortfolioCard.astro");

const volmkImg = "/assets/asset.62ef882f.webp";

const grodnomkImg = "/assets/asset.fa855289.webp";

const mppImg = "/assets/asset.9dc95c09.webp";

const crmImg = "/assets/asset.53702bfe.webp";

const meImg = "/assets/asset.8856bf58.jpg";

const shopnemanImg = "/assets/asset.2e7b0738.webp";

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to my Template." }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<main class="page">
        <section id="intro-section" class="page__hero-section hero-section" aria-labelledby="hero-section-label">
            <div class="hero-section__container">
                <div class="hero-section__avatar">
                    <img${addAttribute(meImg, "src")} alt="Shvaba Alexander">
                </div>
                <div class="hero-section__conten">
                    <h1 class="hero-section__title text-h1" id="hero-section-label">
                        Shvaba Alexander
                    </h1>
                    <p class="hero-section__description">
                        I'm frontend developer
                    </p>
                </div>
            </div>
        </section>
        <section id="about-section" class="page__about-section about-section" aria-labelledby="about-section-title">
            <div class="about-section__container">
                <header class="about-section__header section-header">
                    <h2 class="about-section__title section-header__title text-h2" id="about-section-title">
                        About me
                    </h2>
                    <p class="about-section__description section-header__description">
                        I’m Frontend Developer in "<a href="https://spektr.digital" target="_blank">spektr.digital</a>".
                        I've been developing a CRM system for managing real
                        estate documents using Vue,js, Laravel, WebSocket,
                        Centrifugo and Docker, supporting WordPress projects and
                        adding new functionality. I've experience about doing
                        markup using Astro and Gulp.
                    </p>
                </header>
                <div class="about-section__skills">
                    <h3 class="text-h3">Skills:</h3>
                    <ul class="about-section__skills-list skills-list">
                        <li class="skills-list__skill">JS</li>
                        <li class="skills-list__skill">Astro</li>
                        <li class="skills-list__skill">Vue.js 3</li>
                        <li class="skills-list__skill">SCSS</li>
                        <li class="skills-list__skill">CSS</li>
                        <li class="skills-list__skill">HTML</li>
                        <li class="skills-list__skill">Git</li>
                        <li class="skills-list__skill">Accessibility markup</li>
                        <li class="skills-list__skill">Wordpress</li>
                        <li class="skills-list__skill">Python</li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="portfolio-section" class="page__portfolio-section portfolio-section" aria-labelledby="portfolio-section-title">
            <div class="portfolio-section__container">
                <header class="portfolio-section__header section-header">
                    <h2 class="portfolio-section__title section-header__title text-h2" id="portfolio-section-title">
                        Portfolio
                    </h2>
                </header>
                <div class="portfolio-section__portfolios">
                    ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley", "image": crmImg, "tags": [
    "js",
    "vue.js 3",
    "php",
    "laravel",
    "websocket",
    "centrifugo",
    "REST API"
  ], "title": "CRM (NDA)" })}
                    ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "href": "https://volmk.by/", "image": volmkImg, "tags": ["scss", "css", "js", "gulp", "bitrix"], "title": "Volkovysk meat-processing plant" })}
                    ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "href": "https://grodnomk.by", "image": grodnomkImg, "tags": ["scss", "css", "js", "gulp", "bitrix"], "title": "Grodnomk" })}
                    ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "href": "https://mpp.by", "image": mppImg, "tags": ["scss", "css", "js", "gulp", "wordpress"], "title": "MASTERPRINT-PACK" })}
                    ${renderComponent($$result2, "PortfolioCard", $$PortfolioCard, { "href": "https://shopneman.by/", "image": shopnemanImg, "tags": ["scss", "css", "js", "gulp"], "title": "Shop Neman" })}
                </div>
            </div>
        </section>
    </main>
` })}`;
}, "C:/Users/shvaba/Desktop/projects/markup-template/src/pages/index.astro");

const $$file = "C:/Users/shvaba/Desktop/projects/markup-template/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
