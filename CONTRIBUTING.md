# Contributing to @nodesandbox/response-kit

Thank you for considering contributing to `@nodesandbox/response-kit` ! We welcome contributions from the community to enhance the project. This document outlines how you can help.

## Table of Contents

- [Getting Started](#getting-started)
- [Reporting Issues](#reporting-issues)
- [Contributing Code](#contributing-code)
- [Code Style](#code-style)
- [Creating a Pull Request](#creating-a-pull-request)
- [License](#license)

## Getting Started

1. **Fork the repository**: Click on the "Fork" button at the top right of the repository page to create your copy.
2. **Clone your fork**: Use the following command to clone your forked repository:
   ```bash
   git clone https://github.com/your-username/response-kit.git
   ```
3. **Navigate to the project directory**:
   ```bash
   cd response-kit
   ```

## Reporting Issues

If you encounter any bugs or have feature requests, please open an issue in the repository:

1. Click on the "Issues" tab.
2. Click the "New Issue" button.
3. Provide a clear description of the issue, including steps to reproduce it, if applicable.

## Contributing Code

### Creating a Branch

Create a new branch for your feature or bug fix:
```bash
git checkout -b feat/my-feature-name
git checkout -b fix/my-bug-fix-name
```

### Code Style

To ensure consistency throughout the project, please follow the existing code style:

- Use **TypeScript** for all new files.
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for JavaScript files.
- Use **ESLint** to lint your code and fix any issues before committing.

### Commit Your Changes

Commit your changes with a descriptive message:
```bash
git commit -m "feat: add new feature"
```

## Creating a Pull Request

1. Push your changes to your forked repository:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Navigate to the original repository where you want to propose your changes.
3. Click on the "New Pull Request" button and select your branch.
4. Provide a clear description of your changes and submit the pull request.

## Testing (Future Contribution)

Currently, there are no automated tests in this project. We encourage contributors to help set up testing infrastructure (e.g., using **Jest** or **Mocha**) and write tests for new features and bug fixes in the future.

## License

By contributing to **@nodesandbox/response-kit**, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## Questions?

If you have any questions or need further assistance, feel free to reach out by opening an issue or contacting the maintainers.

Thank you for contributing!