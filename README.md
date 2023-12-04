# Multi-language Project

Check out the application live at [Multi-language-project](https://multi-language-project.vercel.app/).

## Getting Started

This project is configured to run using Node.js version 16, please confirm that you are using it.

Make sure you have [Docker](https://www.docker.com/get-started) installed on your machine for a consistent development environment.

### Running with Docker

1. **Build the Docker Image**:  
   In the project directory, build the Docker image using the following command:

   ```bash
   docker build -t multi-language-project .
   ```

2. **Run the Docker Container**:  
   After building the image, start the container with:

   ```bash
   docker run -p 3000:3000 multi-language-project
   ```

3. **Access the Application**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```shell
├── Dockerfile # Instructions to build a Docker image for the project.
├── README.md # Documentation about the project.
├── docker-compose.yml # Docker Compose configuration file.
├── jest.config.js # Configuration file for Jest testing framework.
├── jest.setup.js # Setup file for Jest, including any global configurations for tests.
├── messages # Localization files.
│ ├── en.json # English language translations.
│ └── pt.json # Portuguese language translations.
├── next-env.d.ts # TypeScript declaration file for Next.js.
├── next.config.js # Configuration file for Next.js.
├── package.json # NPM package configuration, listing all dependencies and scripts.
├── src # Source code of the project.
│ ├── app # Application specific components and logic.
│ │ └── [locale] # Locale-specific layouts and pages.
│ │ ├── layout.tsx # Layout component for specific locale.
│ │ └── page.tsx # Page component for specific locale.
│ ├── components # Reusable React components.
│ │ ├── Breadcrumbs # Component for displaying breadcrumbs.
│ │ ├── Header # Component for the application header.
│ │ ├── LanguageSwitcher # Component for switching languages.
│ │ └── PageLayout # Layout component for pages.
│ ├── hooks # Custom React hooks.
│ │ └── useBreadcrumbs # Hook for generating breadcrumb paths.
│ ├── i18n.ts # Internationalization setup.
│ ├── middleware.ts # Custom Next.js middleware.
│ ├── navigation.ts # Navigation-related configurations.
│ └── pages # Next.js pages and routing.
│ ├── [locale] # Locale-specific pages.
│ └── _app.tsx # Main application component for Next.js.
└── tsconfig.json # TypeScript configuration file.
```

## Technologies

This project is built using various technologies:

- [Next.js](https://nextjs.org/): A React framework for production.
- [Docker](https://www.docker.com/): A platform for developing, shipping, and running applications.
- [Vercel](https://vercel.com/): A platform for frontend frameworks and static sites.
- [next-intl](https://github.com/amannn/next-intl): Internationalization library for Next.js.
- [MUI (Material-UI)](https://mui.com/): A popular React UI framework.
