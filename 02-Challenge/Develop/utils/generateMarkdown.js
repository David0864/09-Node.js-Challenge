// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

-${data.description}


## Table of Contents

  - [Installation](#installation) 

  - [Usage](#usage)

  - [License](#license)

  - [Contributing](#contributing)

  - [Tests](#tests)

  - [Questions](#questions)



## Installation

-${data.installation}

## Usage

-${data.usage}

## License

${renderLicenseBadge(data.license)}

## Contributing

-${data.contributing}

## Tests

-${data.tests}

## Questions

-${data.questions}

`;
}

module.exports = generateMarkdown;
