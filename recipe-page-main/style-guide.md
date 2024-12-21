# Front-end Style Guide

## Layout

The designs were created to the following widths:

Mobile
display: flex;
width: 375px;
flex-direction: column;
align-items: flex-start;
background: var(--color-white, #FFF);

Tablet
display: flex;
width: 768px;
padding: var(--spacing-1600, 128px) var(--spacing-600, 48px);
justify-content: center;
align-items: center;
gap: var(--spacing-100, 8px);
background: var(--color-stone-100, #F3E5D7);

Desktop
display: flex;
width: 1440px;
padding: var(--spacing-1600, 128px) var(--spacing-600, 48px);
justify-content: center;
align-items: center;
gap: var(--spacing-100, 8px);
background: var(--color-stone-100, #F3E5D7);


## Style Guide

### Colors

This section outlines the color palette used throughout the design. Each color is defined with its HEX, RGB, and HSL values for precise implementation.

| Color        | Usage       | HEX      | RGB             | HSL                 |
| :----------- | :---------- | :------- | :-------------- | :------------------ |
| rose-800     | Primary     | #7A284E  | 122, 40, 78     | 332°, 51%, 32%      |
| rose-50      | Accent      | #FFF7FB  | 255, 247, 251   | 330°, 100%, 98%     |
| stone-900    | Dark Text   | #312E2C  | 49, 46, 44      | 24°, 5%, 18%        |
| stone-600    | Body Text   | #5F564D  | 95, 86, 77      | 30°, 10%, 34%       |
| stone-150    | Light Gray  | #E3DDD7  | 227, 221, 215   | 30°, 18%, 87%       |
| stone-100    | Background  | #F3E5D7  | 243, 229, 215   | 30°, 54%, 90%       |
| brown-800    | Secondary   | #854A32  | 133, 70, 50     | 14°, 45%, 36%       |
| white        | Base        | #FFFFFF  | 255, 255, 255   | 0°, 0%, 100%        |

### Typography

This section defines the typographic styles, including font families, weights, sizes, line heights, and letter spacing.

** Font Families: **

*   **Young Serif:** Used for headings (e.g., `<h1>`, `<h2>`) and prominent text elements.
*   **Outfit:** Used for body text, smaller headings, and UI elements.

** Text Presets: **

| Preset        | Font Family   | Font Weight | Font Size (px) | Line Height | Letter Spacing | Usage                                                                                                                                                  |
| :------------ | :------------ | :---------- | :------------- | :---------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text Preset 1 | Young Serif   | Regular     | 40             | 100%        | 0px            | Main headings (`<h1>`)                                                                                                                                 |
| Text Preset 2 | Young Serif   | Regular     | 28             | 100%        | 0px            | Section headings (`<h2>`)                                                                                                                             |
| Text Preset 3 | Outfit        | Semibold    | 20             | 100%        | 0px            | Subheadings (`<h3>`), important labels                                                                                                                |
| Text Preset 4 | Outfit        | Regular     | 16             | 150%        | 0px            | Body text, paragraphs (`<p>`), lists (`<ul>`, `<ol>`), form inputs, buttons                                                                              |
| Text Preset 4 Bold | Outfit        | Bold     | 16             | 150%        | 0px            | Used within body text to emphasize certain words or phrases. Can also be used for interactive elements like buttons or links when a heavier weight is needed. |

**III. Spacing**

This section outlines the spacing scale used for margins, paddings, and gaps. These values should be used consistently throughout the design to maintain visual harmony.

| Spacing Unit | Value (px) |
| :----------- | :--------- |
| 1600         | 128        |
| 600          | 48         |
| 500          | 40         |
| 400          | 32         |
| 300          | 24         |
| 200          | 16         |
| 150          | 12         |
| 100          | 8          |

## Content
Okay, I've analyzed the images you provided, and here's a breakdown of the content structure suitable for writing the HTML. The structure follows semantic HTML5 elements and considers accessibility.

**I. Main Container:**

*   **Element:** `<main>`
*   **Purpose:**  Wraps the entire recipe content.

**II. Hero Section:**

*   **Element:** `<section>`
*   **Purpose:** Contains the introductory elements, including the image and recipe title.
*   **Content:**
    *   **Image:**
        *   **Element:** `<img src="path/to/omelette.jpg" alt="Simple Omelette Recipe">`
        *   **Purpose:**  Displays the hero image of the finished omelette.
        *   **Note:**
            *   `src` attribute should point to the actual image file.
            *   `alt` attribute should provide a concise description of the image for screen readers.
    *   **Title:**
        *   **Element:** `<h1>Simple Omelette Recipe</h1>`
        *   **Purpose:**  The main heading of the recipe.
    *   **Description:**
        *   **Element:** `<p>`
        *   **Purpose:**  A brief introduction to the recipe.
        *   **Content:** "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."

**III. Preparation Time Section:**

*   **Element:** `<section>`
*   **Purpose:**  Outlines the preparation and cooking times.
*   **Content:**
    *   **Heading:**
        *   **Element:** `<h2>Preparation time</h2>`
        *   **Purpose:** Section title.
    *   **List:**
        *   **Element:** `<ul>`
        *   **Purpose:**  Presents the time breakdown.
        *   **List Items:** `<li>`
            *   `<li><strong>Total:</strong> Approximately 10 minutes</li>`
            *   `<li><strong>Preparation:</strong> 5 minutes</li>`
            *   `<li><strong>Cooking:</strong> 5 minutes</li>`

**IV. Ingredients Section:**

*   **Element:** `<section>`
*   **Purpose:** Lists the ingredients required for the recipe.
*   **Content:**
    *   **Heading:**
        *   **Element:** `<h2>Ingredients</h2>`
        *   **Purpose:** Section title.
    *   **List:**
        *   **Element:** `<ul>`
        *   **Purpose:** Presents the ingredients.
        *   **List Items:** `<li>`
            *   `<li>2-3 large eggs</li>`
            *   `<li>Salt, to taste</li>`
            *   `<li>Pepper, to taste</li>`
            *   `<li>1 tablespoon of butter or oil</li>`
            *   `<li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>`

**V. Instructions Section:**

*   **Element:** `<section>`
*   **Purpose:** Provides step-by-step cooking instructions.
*   **Content:**
    *   **Heading:**
        *   **Element:** `<h2>Instructions</h2>`
        *   **Purpose:** Section title.
    *   **Ordered List:**
        *   **Element:** `<ol>`
        *   **Purpose:** Presents the instructions in sequential order.
        *   **List Items:** `<li>`
            *   Each `<li>` contains a step with a bold title and a brief description:
                *   `<li><strong>Beat the eggs:</strong> In a bowl, beat the eggs...</li>`
                *   `<li><strong>Heat the pan:</strong> Place a non-stick frying pan...</li>`
                *   `<li><strong>Cook the omelette:</strong> Once the butter is melted...</li>`
                *   `<li><strong>Add fillings (optional):</strong> When the eggs begin to set...</li>`
                *   `<li><strong>Fold and serve:</strong> As the omelette continues to cook...</li>`
                *   `<li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper...</li>`

**VI. Nutrition Section:**

*   **Element:** `<section>`
*   **Purpose:** Displays the nutritional information per serving.
*   **Content:**
    *   **Heading:**
        *   **Element:** `<h2>Nutrition</h2>`
        *   **Purpose:** Section title.
    *   **Description:**
        *   **Element:** `<p>`
        *   **Purpose:**  Briefly explains the nutritional information.
        *   **Content:** "The table below shows nutritional values per serving without the additional fillings."
    *   **Table:**
        *   **Element:** `<table>`
        *   **Purpose:** Organizes the nutritional data.
        *   **Table Body:** `<tbody>`
            *   **Table Rows:** `<tr>`
                *   **Table Data:** `<td>`
                    *   `<tr><td>Calories</td><td>277kcal</td></tr>`
                    *   `<tr><td>Carbs</td><td>0g</td></tr>`
                    *   `<tr><td>Protein</td><td>20g</td></tr>`
                    *   `<tr><td>Fat</td><td>22g</td></tr>`