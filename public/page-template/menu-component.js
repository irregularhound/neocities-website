// menu-component.js

class MenuComponent extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a template element
        const template = document.createElement('template');

        // Define the HTML structure
        template.innerHTML = `
            <style>
                body, html {
                    width: 100%;
                    overflow-y: hidden;
                }

                .image-links {
                    display: flex;
                    flex-direction: row;
                    row-gap: 25px;
                    width: 100%;
                    overflow-y: hidden;
                    overflow-x: auto;
                    align-items: center;  
                }

                .image-links > a {
                    max-width: 7vw;
                    max-height: auto;
                    display: inline-block;
                }

                .image-links > a > img {
                    max-width: 100%;
                    max-height: auto;
                    display: block;
                }

                @media only all and (max-device-width: 991px) {
                    .image-links {
                        gap: 15vw;
                        width: 100%;
                        margin-right: 10vw;
                        padding: 2vw 0;
                    }

                    .image-links > a > img {
                        max-width: 18vw;
                        overflow-y: hidden;
                        overflow-x: auto;
                    }
                }
            </style>
            <div class="image-links">
                <a href="/"><img src="/images/navbar/home.png" target="_top" alt="Home"></a>
                <a href="/about"><img src="/images/navbar/about.png" alt="About Me"></a>
                <a href="/projects"><img src="/images/navbar/stories.png" target="_top" alt="Stories"></a>
                <a href="/characters"><img src="/images/navbar/characters.png" target="_top" alt="Characters"></a>
                <a href="/art"><img src="/images/navbar/art.png" target="_top" alt="Art Gallery"></a>
                <a href="/prose"><img src="/images/navbar/prose.png" target="_top" alt="Writing Portfolio"></a>
                <a href="/shrines"><img src="/images/navbar/shrines.png" target="_top" alt="Shrines"></a>
                <a href="/graphics"><img src="/images/navbar/graphics.png" target="_top" alt="Graphics"></a>
                <a href="/webrings"><img src="/images/navbar/webrings.png" target="_top" alt="Webrings"></a>
                <a href="/websites"><img src="/images/navbar/websites.png" target="_top" alt="Other Websites"></a>
            </div>
        `;

        // Append the template content to the shadow root
        shadow.appendChild(template.content.cloneNode(true));

        // Add event listeners to the links
        shadow.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior
                window.parent.location.href = this.href; // Navigate the parent window
            });
        });
    }
}

// Define the custom element
customElements.define('menu-component', MenuComponent);