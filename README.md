# DevStack

## Project Description

DevStack is a responsive web application that helps developers explore different development technologies and build their own development stack. Users can browse available technologies, add technologies to their stack, remove individual technologies, or remove all selected technologies.

## Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* Vite

## Features

### 1. Explore Technologies

Users can explore different technologies such as Frontend, Backend, Database, Styling, DevOps, and Tools.

### 2. Build Your Stack

Users can add technologies to the "Your Stack" section and remove individual technologies or remove all selected technologies.

### 3. Responsive User Interface

The application is responsive and works properly on mobile, tablet, and desktop devices.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is data managed inside a component. State can change when the user interacts with the application.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data in a React component.

In this project, I used `useState` in the `App` component to manage the selected technologies.

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<TechnologyType[]>([]);
```

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is commonly used for side effects such as fetching data after a component renders.

I did not use `useEffect` in this project. I used `fetch()` to load the technology data from `data.json`. Then I used React's `use()` hook and `Suspense` to handle the Promise and loading state.

```tsx
const technologyFetch = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologyPromise = technologyFetch();
```

### 5. Why does every item in a .map() list need a unique key prop?

React needs a unique `key` to identify each item in a list. It helps React efficiently update the list when items are added, removed, or changed.

In this project, I used `technology.id` as the unique key.

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
    isAdded={selectedTechnologies.some(
      (item) => item.id === technology.id
    )}
    onAddToStack={onAddToStack}
  />
))}
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, conditional rendering is used in the "Your Stack" section. When no technology is selected, an empty stack message is displayed.

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty. Add some technologies!</p>
) : (
  selectedTechnologies.map((technology) => (
    <div key={technology.id}>
      {technology.name}
    </div>
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

A child component can send something back to the parent by calling a function that the parent passes as a prop.

In this project, the `App` component passes data and functions to the `Technology` component.

```tsx
<Technology
  technologyPromise={technologyPromise}
  selectedTechnologies={selectedTechnologies}
  onAddToStack={handleAddToStack}
  onRemove={handleRemove}
  onRemoveAll={handleRemoveAll}
/>
```

The child can call functions such as `onAddToStack()` or `onRemove()`. These functions update the state in the parent component.
