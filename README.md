# REACT TYPESCRIPT DESIGN SYSTEM

Welcome to the **React + TypeScript + Tailwind CSS + Redux Toolkit + React Query + Material UI** starter project. This README provides step-by-step instructions for setting up, running, and contributing to this codebase.

---

## Table of Contents

- [FE-D30-PLATFORM](#fe-d30-platform)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install Dependencies](#2-install-dependencies)
    - [3. Environment Variables](#3-environment-variables)
    - [4. Run the Development Server](#4-run-the-development-server)
  - [Available Scripts](#available-scripts)
  - [Folder Structure](#folder-structure)
  - [Core Features](#core-features)
  - [Routing](#routing)
  - [API Client](#api-client)
  - [Design System Page](#design-system-page)
  - [Authentication Pages](#authentication-pages)
  - [Testing](#testing)
  - [Linting \& Formatting](#linting--formatting)
  - [Contributing](#contributing)

---

## Project Overview

This project is a modern, production-ready React starter kit that includes:

* **React** with **TypeScript**
* **Tailwind CSS** for utility-first styling
* **Material UI** components with emotion styling
* **Redux Toolkit** for global state management
* **React Query** for server state and data fetching
* **Axios** wrapper (`HttpClient`) with built–in JWT support
* **React Router v6** for client-side navigation
* A set of **reusable UI components** (buttons, inputs, cards, tables, modals, etc.)
* A **Design System** page showcasing all components
* **Login** and **Sign Up** pages wired to API endpoints

This setup accelerates feature development and enforces consistency across UIs.

---

## Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (v18.x LTS or higher)
* **pnpm** (preferred)

  * Install via Corepack: `corepack enable && corepack prepare pnpm@latest --activate`
* **Git** for version control

If using **npm** or **yarn**, commands below can be adjusted accordingly.

---

## Getting Started

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Cavista-Technologies/fe-d30-platform.git
cd fe-d30-platform.
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Variables

Create a `.env` file in the project root containing:

```ini
VITE_API_URL=https://api.yourservice.com
```

* `VITE_API_URL` – base URL for your backend API.

### 4. Run the Development Server

```bash
pnpm dev
```

Open your browser to [http://localhost:5173](http://localhost:5173).

---

## Available Scripts

* **`pnpm dev`** – start Vite development server
* **`pnpm build`** – build production assets
* **`pnpm preview`** – preview the production build locally
* **`pnpm lint`** – run ESLint check
* **`pnpm format`** – run Prettier formatting
* **`pnpm test`** – run tests (Vitest + React Testing Library)

Adjust scripts in `package.json` as needed.

---

## Folder Structure

```text
src/
├── components/       # Reusable UI components (Button, TextInput, Card, etc.)
├── features/         # Domain-level logic & Redux slices
│   └── counter/      # Example counter feature
├── hooks/            # Custom React hooks
├── layouts/          # Layout wrappers
├── pages/            # Route-level pages (Home, Design System, Auth)
│   ├── Home
│   ├── DesignSystem.rsx
│   ├── Login
│   └── Signup
├── services/         # HTTP client & API wrappers
│   └── httpClient.ts
├── context/          # React contexts (e.g. ToastProvider)
├── store.ts          # Redux Toolkit store configuration
├── main.tsx          # Application entrypoint
└── index.css         # Tailwind base imports
```

---

## Core Features

1. **Redux Toolkit** – global state slices with `configureStore` & `createSlice`.
2. **React Query** – data fetching hooks with caching and status handling.
3. **Axios HttpClient** – generic `request` method with JWT injection.
4. **Material UI** – design tokens and `CssBaseline` for resets.
5. **Tailwind CSS** – utility classes for rapid styling.
6. **TypeScript** – strict typing across components and services.

---

## Routing

Routes are defined in `src/App.tsx` using React Router v6:

* `/` – Home (Redux + React Query demo)
* `/design-system` – component showcase page
* `/login` – Login form
* `/signup` – Sign Up form

Add additional routes in `<Routes>` as needed.

---

## API Client

The `HttpClient` in `src/services/httpClient.ts` wraps Axios with:

* Base URL configured from `VITE_API_URL`
* JSON content headers
* Request interceptor for `Authorization: Bearer <token>`
* Generic `get`, `post`, `put`, `patch`, `delete` methods
* Response envelope handling via `ApiEnvelope<T>`

Usage example:

```ts
import { httpClient } from './services/httpClient';

interface User { id: string; name: string; }

async function loadUsers() {
  const users = await httpClient.get<User[]>('/users');
  return users;
}
```

---

## Design System Page

Located at `src/pages/DesignSystem.tsx`. It renders each UI component with example props. Update this page whenever you add new components.

---

## Authentication Pages

* **Login** (`/login`) – submits `{ email, password }` to `/auth/login`, stores token, navigates home.
* **Signup** (`/signup`) – submits `{ name, email, password }` to `/auth/signup`, shows toast, navigates to login.

Both use the `useToast` hook for feedback.

---

## Testing

This project is configured for **Vitest** and **React Testing Library**. Sample tests can be placed under `src/__tests__/`.

Run tests:

```bash
pnpm test
```

---

## Linting & Formatting

* **ESLint** – statically analyze code (with `pnpm lint`)
* **Prettier** – code formatting (with `pnpm format`)

Add your editor integrations for auto-format on save.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m "feat: add new component"`)
4. Push to your fork (`git push origin feat/your-feature`)
5. Open a Pull Request
