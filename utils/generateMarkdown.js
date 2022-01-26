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
function renderLicenseSection(license) {
  return '#### so far so good';
}

// render table of contents to include user selected sections
function renderTableOfContents({ installation, usage, license, contributors }) {
  /* const sections = { installation, usage, license, contributors }; 
  
  for (var property in sections) {
    const str = property;
    const upperCaseStr = str.charAt(0).toUpperCase() + str.slice(1);

    if (property) {
      return `
      * [${upperCaseStr}](#${property})
      `;
    }
  }*/
  return '#### so far so good';
};

// if installation included, function to handle installation section
const renderInstallation = installation => {
  /*if (!installation) {
    return '';
  }

  return `
  ## Installation
  ${installation}

  `;*/
  return '#### so far so good';
};

// render tests section
const renderTestsSection = tests => {
  /*if (!tests) {
    return '';
  }

  return `
  ## Tests
  ${tests}

  `;*/
  return '#### so far so good';
};

// if include contributing, handle render section
const renderContributingSection = ({ contributors, contributorsArr }) => {
  /*if (!contributors) {
    return '';
  }

  contributorsArr.forEach( person => {
     return `
  ## Contributing
  * [${person.contribName}](https://github.com/${person.contribGithub})
  `;
  });*/
  return '#### so far so good';
}

// TODO: Create a function to generate markdown for README
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

  ### Table of Contents
  ${renderTableOfContents({ installation, usage, license, contributors })}
  * [Questions and Contact](#questionsandcontact)

  ${renderInstallation(installation)}
  ## Usage
  ${usage}

  ${renderLicenseSection(license)}
  ${renderTestsSection(tests)}
  ${renderContributingSection(contributorsArr)}
  ## Questions 
  Reach out to [${email}](${email}) with any questions.

  Please submit an issue if you have suggestions, requests, or find a bug.
`;
}

module.exports = generateMarkdown;
