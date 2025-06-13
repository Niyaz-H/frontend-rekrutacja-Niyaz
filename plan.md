# Project Plan: Interactive Product List (Angular Edition)

This plan outlines the development of an interactive product list view using Angular and Tailwind CSS, focusing on a clean, modular, and professional implementation.

#### Phase 1: Project Initialization & Setup (Estimated Time: 30 minutes)

1.  **GitHub Repository:**
    *   Create a new, public GitHub repository named `frontend-rekrutacja-Niyaz`.
2.  **Angular Project Setup:**
    *   Create a new standalone Angular project using the Angular CLI: `ng new frontend-rekrutacja-Niyaz --standalone --style=scss`.
    *   This ensures a modern, clean foundation without unnecessary boilerplate.
3.  **Tailwind CSS Integration:**
    *   Add Tailwind CSS to the project following the official guide for Angular.
    *   Configure `tailwind.config.js` to align with the project's design requirements.
4.  **Initial Commit:**
    *   Commit the initial project structure and the `plan.md` file to the new repository.
    *   **Commit Message:** `feat: initial project setup with Angular and Tailwind CSS`

#### Phase 2: Core Component & Service Development (Estimated Time: 1 hour)

1.  **Product Data Service:**
    *   Create a `ProductService` to provide a static array of 5-10 product objects. This keeps data management separate from the components.
    *   Define a `Product` interface for type safety.
2.  **`ProductListComponent`:**
    *   Generate a new component: `ng generate component product-list`.
    *   **Responsibility:** Fetch and display the list of products from `ProductService`.
    *   **Output:** An `EventEmitter` named `productSelected` that emits the selected product.
3.  **`ProductDetailsComponent`:**
    *   Generate a new component: `ng generate component product-details`.
    *   **Responsibility:** Display the details of a single product.
    *   **Input:** A property named `product` to receive the selected product object.
    *   **Output:** An `EventEmitter` named `back` to signal a return to the list view on mobile.
4.  **`AppComponent` (Main View):**
    *   **Responsibility:** Act as the main container, managing the layout and state.
    *   **State Management:** Hold the list of all products and the currently selected product.
    *   **Logic:**
        *   Listen for the `productSelected` event from `ProductListComponent`.
        *   Listen for the `back` event from `ProductDetailsComponent`.
        *   Use `*ngIf` to conditionally render the components based on the application's state.

#### Phase 3: Styling & Responsiveness (Estimated Time: 1 hour)

1.  **Layout with Tailwind CSS:**
    *   **Desktop (≥768px):** Implement a two-column layout using CSS Grid (`grid-cols-1 md:grid-cols-3`).
        *   `ProductListComponent`: `md:col-span-1`
        *   `ProductDetailsComponent`: `md:col-span-2`
    *   **Mobile (<768px):** A single-column layout where only one component is visible at a time.
2.  **Component Styling:**
    *   Style the product list items and the product details card using Tailwind CSS utility classes.
    *   Ensure a clean, consistent, and professional UI.
3.  **Interactions & UX:**
    *   Add `hover` and `focus` states to all interactive elements (list items, buttons).
    *   Implement a "Back to list" button in the `ProductDetailsComponent`, visible only on mobile.
4.  **Accessibility:**
    *   Use semantic HTML (`<main>`, `<article>`, `<button>`, etc.).
    *   Add appropriate ARIA attributes and `alt` tags for images.

#### Phase 4: Final Touches & Deployment (Estimated Time: 30 minutes)

1.  **Animations (Optional):**
    *   Add subtle fade-in/fade-out transitions when switching between views for a smoother user experience.
2.  **Code Review & Refactoring:**
    *   Review the code for clarity, consistency, and adherence to best practices.
    *   Ensure all components are modular and reusable.
3.  **Final Commits & Push:**
    *   Make final, atomic commits with clear and descriptive messages.
    *   Push the complete project to the GitHub repository.

```mermaid
graph TD
    A[AppComponent] -->|Manages State| B(ProductListComponent)
    A -->|Manages State| C(ProductDetailsComponent)
    B -- productSelected event --> A
    C -- back event --> A