let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">${portfolio.owner.location}</p>
    </header>
`;

document.querySelector('#generated-header').innerHTML = headerHTML;
document.querySelector('#bio').textContent = portfolio.owner.bio;
document.querySelector('#owner-email').textContent = portfolio.owner.email;
document.querySelector('#owner-email').href = `mailto:${portfolio.owner.email}`;

let skillsHTML = '';

for (let i = 0; i < portfolio.skills.length; i++) {
    let skill = portfolio.skills[i];
    skillsHTML += `
        <li>
            <p>${skill.name}</p>
            <div class="skill-bar" aria-hidden="true">
                <div class="skill-progress" style="--skill-level: ${skill.level}%"></div>
            </div>
            <p class="skill-percentage">${skill.level}%</p>
        </li>
    `;
}

document.querySelector('#generated-skills').innerHTML = skillsHTML;

let projectsHTML = '';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    let tagsHTML = '';

    for (let j = 0; j < project.technologies.length; j++) {
        tagsHTML += `<span class="tag">${project.technologies[j]}</span>`;
    }

    projectsHTML += `
        <article class="project-card" data-category="${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${tagsHTML}</p>
            <p class="date">Completed: ${project.completionDate}</p>
        </article>
    `;
}

document.querySelector('#generated-projects').innerHTML = projectsHTML;
