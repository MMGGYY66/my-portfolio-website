const modal = document.querySelector('#modal-menu');

// Target the hamburger menu
const hamburger = document.querySelector('.hamburger-btn');

// Target the close btn
const closeBtn = document.querySelector('.modal-header');

// Target the portfolio menu
const portfolio = document.querySelector('.modal-portfolio');

// Target the about menu
const about = document.querySelector('.modal-about');

// Target the contact menu
const contact = document.querySelector('.modal-contact');

// Funtion to display the menu
function display() {
  modal.style.display = 'flex';
}

// Funtion to hide the menu
function hide() {
  modal.style.display = 'none';
}

// Add event on the hamburger btn
hamburger.addEventListener('click', display);
// Add event on the close btn
closeBtn.addEventListener('click', hide);

// Add event on the portfolio
portfolio.addEventListener('click', hide);

about.addEventListener('click', hide);

contact.addEventListener('click', hide);

// work section
const worksSection = document.querySelector('.works-section');
const projectData = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredImage: 'images/worksImg.png',
    featuredImageMobile: 'images/worksImg.png',
    featuredImageDesktop: 'images/worksImg.png',
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    links: [
      {
        link: 'https://mmggyy66.github.io/awesome-books-solo/',
        linkText: 'See Live',
        linkIcon: 'images/Icon-Export.png',
      },
      {
        link: 'https://github.com/MMGGYY66/awesome-books-solo',
        linkText: 'See Source',
        linkIcon: 'images/Vector.png',
      },
    ],
    closeIcon: 'images/cancel-icon.png',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-1.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        link: 'https://mmggyy66.github.io/awesome-books-solo/',
        linkText: 'See Live',
        linkIcon: 'images/Icon-Export.png',
      },
      {
        link: 'https://github.com/MMGGYY66/awesome-books-solo',
        linkText: 'See Source',
        linkIcon: 'images/Vector.png',
      },
    ],
    projectCardClass: ['card-1'],
    closeIcon: 'images/cancel-icon.png',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-2.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        link: 'https://mmggyy66.github.io/awesome-books-solo/',
        linkText: 'See Live',
        linkIcon: 'images/Icon-Export.png',
      },
      {
        link: 'https://github.com/MMGGYY66/awesome-books-solo',
        linkText: 'See Source',
        linkIcon: 'images/Vector.png',
      },
    ],
    projectCardClass: ['card-2'],
    closeIcon: 'images/cancel-icon.png',
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-3.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        link: 'https://mmggyy66.github.io/awesome-books-solo/',
        linkText: 'See Live',
        linkIcon: 'images/Icon-Export.png',
      },
      {
        link: 'https://github.com/MMGGYY66/awesome-books-solo',
        linkText: 'See Source',
        linkIcon: 'images/Vector.png',
      },
    ],
    projectCardClass: ['card-3'],
    closeIcon: 'images/cancel-icon.png',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-1.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        link: 'https://mmggyy66.github.io/awesome-books-solo/',
        linkText: 'See Live',
        linkIcon: 'images/Icon-Export.png',
      },
      {
        link: 'https://github.com/MMGGYY66/awesome-books-solo',
        linkText: 'See Source',
        linkIcon: 'images/Vector.png',
      },
    ],
    projectCardClass: ['card-4'],
    closeIcon: 'images/cancel-icon.png',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-2.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        link: 'https://mmggyy66.github.io/awesome-books-solo/',
        linkText: 'See Live',
        linkIcon: 'images/Icon-Export.png',
      },
      {
        link: 'https://github.com/MMGGYY66/awesome-books-solo',
        linkText: 'See Source',
        linkIcon: 'images/Vector.png',
      },
    ],
    projectCardClass: ['card-2', 'card-5'],
    closeIcon: 'images/cancel-icon.png',
  },
  {
    name: 'Website Protfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'images/card-3.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: [
      {
        link: 'https://mmggyy66.github.io/awesome-books-solo/',
        linkText: 'See Live',
        linkIcon: 'images/Icon-Export.png',
      },
      {
        link: 'https://github.com/MMGGYY66/awesome-books-solo',
        linkText: 'See Source',
        linkIcon: 'images/Vector.png',
      },
    ],
    projectCardClass: ['card-3', 'card-6'],
    closeIcon: 'images/cancel-icon.png',
  },
];

const workTitle = document.createElement('div');
workTitle.className = 'work-title';
const title = document.createElement('h3');
title.innerText = 'My Recent Works';
title.className = 'title';
const border = document.createElement('div');
border.className = 'border-right';

workTitle.append(title, border);
// Project Cards
const projectsContainer = document.createElement('div');
const projectCards = document.createElement('div');
projectCards.className = 'works-card';
for (let i = 0; i < projectData.length; i += 1) {
  if (i === 0) {
    const firstProject = document.createElement('div');
    firstProject.className = 'first-project';

    const featuredImageMobile = document.createElement('div');
    featuredImageMobile.className = 'project-image-mobile';
    const mobileImage = document.createElement('img');
    mobileImage.src = projectData[i].featuredImageMobile;
    featuredImageMobile.append(mobileImage);

    const featuredImageDesktop = document.createElement('div');
    featuredImageDesktop.className = 'project-image-desktop';
    const desktopImage = document.createElement('img');
    desktopImage.src = projectData[i].featuredImageDesktop;
    featuredImageDesktop.append(desktopImage);

    const content = document.createElement('div');
    const name = document.createElement('h4');
    const description = document.createElement('p');
    const technologies = document.createElement('ul');
    const button = document.createElement('button');
    button.classList.add('project-button');

    content.className = 'content';
    name.className = 'sub-title';
    description.className = 'description';
    technologies.className = 'technologies';

    name.innerText = projectData[i].name;
    description.innerText = projectData[i].description;

    const technologiesList = projectData[i].technologies;
    for (let j = 0; j < technologiesList.length; j += 1) {
      const list = document.createElement('li');
      list.innerText = technologiesList[i];
      technologies.append(list);
    }

    button.innerText = 'See Project';

    content.append(name, description, technologies, button);
    firstProject.append(featuredImageMobile, featuredImageDesktop, content);
    projectsContainer.append(firstProject);
    i = 1;
  }

  const cardContainer = document.createElement('div');
  const name = document.createElement('h4');
  const description = document.createElement('p');
  const technologies = document.createElement('ul');
  const button = document.createElement('button');

  cardContainer.classList.add('card');
  const listOfClass = projectData[i].projectCardClass;
  for (let k = 0; k < listOfClass.length; k += 1) {
    cardContainer.classList.add(listOfClass[k]);
  }
  name.innerText = projectData[i].name;
  description.innerText = projectData[i].description;
  technologies.className = 'technologies';
  button.innerText = 'See Project';
  button.classList.add('project-button');

  const technologiesList = projectData[i].technologies;
  for (let j = 0; j < technologiesList.length; j += 1) {
    const list = document.createElement('li');
    list.innerText = technologiesList[j];
    technologies.append(list);
  }

  cardContainer.append(name, description, technologies, button);
  projectCards.append(cardContainer);
}
projectsContainer.append(projectCards);
worksSection.append(workTitle, projectsContainer);

// End of Project card creation

// Popup window

const buttons = document.querySelectorAll('.project-button');

function displayProject(m) {
  const popupWindow = document.createElement('section');
  document.body.appendChild(popupWindow);

  const modal = document.createElement('div');
  modal.className = 'modal';

  const header = document.createElement('div');
  header.className = 'title';
  const name = document.createElement('h1');
  name.innerText = projectData[m].name;
  name.className = 'name';
  const closeIcon = document.createElement('img');
  closeIcon.className = 'cancel-icon';
  closeIcon.src = projectData[m].closeIcon;
  header.append(name, closeIcon);

  const technologies = document.createElement('ul');
  technologies.className = 'technologies';
  const technologiesList = projectData[m].technologies;
  for (let j = 0; j < technologiesList.length; j += 1) {
    const list = document.createElement('li');
    list.innerText = technologiesList[j];
    list.className = 'list';
    technologies.append(list);
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const imageWrapper = document.createElement('div');
  const featuredImage = document.createElement('img');
  featuredImage.className = 'popup-image';
  featuredImage.src = projectData[m].featuredImage;
  imageWrapper.appendChild(featuredImage);

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'content';

  const description = document.createElement('p');
  description.innerText = projectData[m].description;
  description.className = 'description';

  const linksWrapper = document.createElement('div');
  linksWrapper.className = 'links';

  const { links } = projectData[m];
  for (let i = 0; i < links.length; i += 1) {
    const link = document.createElement('a');
    link.className = 'link-pointer';
    link.href = links[i].link;
    link.innerText = links[i].linkText;
    link.target = '_blank';
    const linkIcon = document.createElement('img');
    linkIcon.className = 'link';
    linkIcon.src = links[i].linkIcon;

    link.append(linkIcon);
    linksWrapper.append(link);
  }

  contentWrapper.append(description, linksWrapper);
  wrapper.append(imageWrapper, contentWrapper);

  modal.append(header, technologies, wrapper);
  popupWindow.append(modal);

  const main = document.querySelector('.main');
  main.classList.toggle('blur');

  popupWindow.classList.toggle('popup');

  closeIcon.addEventListener('click', () => {
    popupWindow.classList.toggle('popup');
    main.classList.toggle('blur');
  });
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    displayProject(i);
  });
}
