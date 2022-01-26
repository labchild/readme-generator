// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  
  return `
  ![license](https://img.shields.io/badge/license-${license}-brightgreen)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// render table of contents to include user selected sections
function renderTableOfContents(data) {
  const sections = { installation, usage, license, contributors }; 
  
  for (var property in sections) {
    const str = property;
    const upperCaseStr = str.charAt(0).toUpperCase() + str.slice(1);

    if (property) {
      return `
      * [${upperCaseStr}](#${property})
      `;
    }
  }
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

  contributorsArr.forEach( person => {
     return `
  ## Contributing
  * [${person.contribName}](${person.contribGithub})
  `;
  });
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge}
  ## Description
  ${description}

  ### Table of Contents
  ${renderTableOfContents}

  ${renderInstallation}

  ## Usage
  ${usage}

  ${renderLicenseSection}
  ${renderTestsSection}
  ${renderContributingSection}

`;
}

module.exports = generateMarkdown;
