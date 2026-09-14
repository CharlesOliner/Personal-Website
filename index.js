const showcaseEntries = [
    {
        href: "https://www.cisa.gov/resources-tools/services/protective-domain-name-system-dns-resolver",
        image: "url('images/Protective DNS.png')",
        heading: "Protective DNS",
        body: "I developed the front-end and back-end of Protective DNS as part of an Accenture Federal Services Agile development team subcontracted to the Dept of Homeland Security. Protective DNS protects the DHS and other agencies by preventing network traffic from reaching malicious destinations."
    },
    {
        href: "https://whiteflintcreations.com",
        image: "url('images/White Flint Creations.png')",
        heading: "White Flint Creations",
        body: "I developed the official website for a local woodshop. It features a contact form and a map widget."
    },
    {
        href: "https://the-ari.com",
        image: "url('images/Analytics Research Institute.png')",
        heading: "Analytics Research Institute",
        body: "I developed the official website for the ARI."
    },
    {
        href: "https://pekoedc.net",
        image: "url('images/Pekoe DC.png')",
        heading: "Pekoe DC",
        body: "I developed the official website for an accupuncture clinic."
    },
    {
        href: "https://torrents.band",
        image: "url('images/Torrents.png')",
        heading: "torrents.",
        body: "I developed the official website for a post-hardcore rock band. The site lists past shows and embeds some of the band's music."
    },
    {
        href: "https://www.johnsonsflorists.com",
        image: "url('images/JFGC.png')",
        heading: "Johnson's Florist & Garden Centers",
        body: "I maintain the store website using HTML and Javascript, and develop and maintain custom software in C# and Python that interfaces with Counterpoint to track inventory."
    }
];

function createShowcaseImage(image) {

    const showcaseImageOuter = document.createElement("div");
    showcaseImageOuter.classList.add("showcase-image-outer");

    const showcaseImageInner = document.createElement("div");
    showcaseImageInner.classList.add("image");
    showcaseImageInner.classList.add("showcase-image-inner");
    showcaseImageInner.style.backgroundImage = image;

    const vignette = document.createElement("div");
    vignette.classList.add("vignette");

    showcaseImageInner.appendChild(vignette);
    showcaseImageOuter.appendChild(showcaseImageInner);

    return showcaseImageOuter;
}


function createDescription(heading, body) {

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("showcase-description");

    const headingElement = document.createElement("h2");
    headingElement.innerText = heading;
    descriptionElement.appendChild(headingElement);

    const bodyElement = document.createElement("p");
    bodyElement.innerText = body;
    descriptionElement.appendChild(bodyElement);

    return descriptionElement;
}

const showcaseCard = document.getElementById("showcase-card");

for (const showcaseEntry of showcaseEntries) {

    const showcaseLink = document.createElement("a");
    showcaseLink.href = showcaseEntry.href;
    showcaseLink.classList.add("showcase-link");

    showcaseLink.appendChild(createShowcaseImage(showcaseEntry.image));
    showcaseLink.appendChild(createDescription(showcaseEntry.heading, showcaseEntry.body));

    showcaseCard.appendChild(showcaseLink);
}

