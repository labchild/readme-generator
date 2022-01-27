// function to render license badge
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `![${license}](https://img.shields.io/badge/license-${license[0].replaceAll(' ', '%20')}-brightgreen)`;
}

// function to render license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // return link specific to license selected
  switch (license) {
    case 'MIT':
      return `[${license}](https://opensource.org/licenses/MIT)`;
    case 'ISC':
      return `[${license}](https://opensource.org/licenses/ISC)`;
    case 'Apache License 2.0':
      return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    case 'Mozilla Public License 2.0':
      return `[${license}](https://opensource.org/licenses/MPL-2.0)`;
    case 'GNU GPLv3':
      return `[${license}](https://opensource.org/licenses/GPL-3.0)`;
  };
};

// render entire license section, including link and badge
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License ${renderLicenseBadge(license)}
  This project falls under a ${renderLicenseLink(license[0])} license.
  `;
}

// render table of contents to include user selected sections
function renderTableOfContents({ installation, usage, license, contributors, tests }) {
  const sections = { installation, usage, license, contributors, tests };
  let sectionTitles = [];

  // create linked text for section titles
  for (var property in sections) {
    const str = property;
    const upperCaseStr = str.charAt(0).toUpperCase() + str.slice(1);

    // push markdown string to array
    sectionTitles.push(`[${upperCaseStr}](${str})`);
  }

  // then map arr to return joined string to markdown template
  return `
  ### Table of Contents
  ${sectionTitles.map(title => {
    return `
  * ${title}`;
  }).join('')}
  * [Questions](#questions)
  `;
};

// if installation included, function to handle installation section
const renderInstallation = installation => {
  if (!installation) {
    return '';
  }

  return `
  ## Installation
  ${installation}

  `;
};

// render tests section
const renderTestsSection = tests => {
  if (!tests) {
    return '';
  }

  return `
  ## Tests
  ${tests}

  `;
};


// if include contributing, handle render section
const renderContributingSection = ({ contributors, contributorsArr }) => {
  if (!contributors) {
    return '';
  }

  return ` 
  ## Contributing
  ${contributorsArr.map(person => {
    return `
  * [${person.name}](https://github.com/${person.github})`;
  }).join('')}
  `;
}


// function with page template to generate markdown
function generateMarkdown(data) {
  const {
    title,
    description,
    usage,
    installation,
    license,
    email,
    tests,
    contributors,
    contributorsArr
  } = data;

  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ${renderTableOfContents({ installation, usage, license, contributors })}

  ${renderInstallation(installation)}
  ## Usage
  ${usage}

  ${renderLicenseSection(license)}
  ${renderContributingSection({ contributors, contributorsArr })}
  ${renderTestsSection(tests)}
  
  ## Questions 
  Reach out to [${email}](${email}) with any questions.

  Please submit an issue if you have suggestions, requests, or find a bug.
`;
};

module.exports = generateMarkdown;