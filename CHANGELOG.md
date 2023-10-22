# Changelog

## 1.3.2 (2023-10-22)

### fix: Update skills data

## 1.3.1 (2023-10-21)

### fix: Fix style on small devices

- Update `Skills` and `SkillDetails` components to fix style on small devices

## 1.3.0 (2023-10-21)

### feat: Implement SkillDetails Component

- Add `skillClicked` output event to `Skill` component
- Implement `SkillDetails` component
- Update `Skills` component to display `SkillDetails` on click on a `Skill`
- Update `SkillInterface` with a new field: `details`
- Update `skills` data
- Add `sharp` npm package
  
<details>
  <summary>See old changelog</summary>

  ## 1.2.0 (2023-10-20)

  ### feat: LazyLoading Components on scroll + Optimizing images

  - Add `useIntersectionObserver` and `withLazyLoad` functions
  - Update images with compressed and resized images
  - Implement LazyLoading components on scroll
  
  ## 1.1.2 (2023-10-20)

  ### fix: Remove snap style

  - Remove `snap` style

  ## 1.1.1 (2023-10-20)

  ### fix: Fix About image style

  - Fix About image style on large devices

  ## 1.1.0 (2023-10-20)

  ### feat: Implement LazyLoading

  - Update fetch methods to remove `process.env.BASE_URL`
  - Implement dynamic component loading
  - Implement LazyLoading

  ## 1.0.2 (2023-10-18)

  ### fix: Minor fixes

  - Update `AboutComponent` and `ProjectsComponent` styles
    
  ## 1.0.1 (2023-10-18)

  ### fix: Remove unused field to Project typings

  - Remove `github` and `website` unused field to `Project` typings
    
  ## 1.0.0 (2023-10-18)

  ### feat: Implement real data

  - Remove typewritter title from `HeroComponent`
  - Update `ProjectsComponent` to implement project ressources
  - Replace fake data by real ones 
  - Update some css styles

  ## 0.13.4 (2023-10-18)

  ### fix: Some minor fixes

  - Update `globals.css` file to fix `heroButton` and `contactInput` style
  - Refactor `gray-light` custom color from `tailwind.config.ts` file into `green-light`
  - Add new custom colors to `tailwind.config.ts`: `gray-light` and `gray-card`
  - Fix `About` component on small devices
  - Implement `ChevronButton` component
  - Update `DarkModeButton` style
  - Update `ExperienceCard` image size
  - Fix color to `Header` component link
  - Fix double scrollbar from `Projects` component

  ## 0.13.3 (2023-10-15)

  ### fix: Fix ExperienceCard css

  - Fix `ExperienceCard` css on LightMode

  ## 0.13.2 (2023-10-15)

  ### fix: Some minor fixes

  - Fix color scheme on LightMode
  - Fix responsive design on `Projects` section
  - Update `README.md` file

  ## 0.13.1 (2023-10-11)

  ### fix: Fix style on Projects Component

  - Fix Scroll Buttons style on `Projects` Component
  - Hide projects image on small devices

  ## 0.13.0 (2023-10-11)

  ### feat: Implement Scroll Buttons on Projects Component

  - Implement Right & Left scroll buttons on `Projects` Component to navigate between them
  - Update style to fix responsive design on small devices
  - Update color scheme for LightMode 
  
  ## 0.12.0 (2023-10-11)

  ### feat: Add Data for the About Section

  - Update `About` data to remove `Lorem ipsum` 

  ## 0.11.3 (2023-10-11)

  ### fix: Fix LightMode color scheme

  - Update color scheme for LightMode in all components 

  ## 0.11.2 (2023-10-09)

  ### fix: Fix Skills component css

  - Fix `Skills` component style on Dark Mode 
    
  ## 0.11.1 (2023-10-09)

  ### fix: Update ExperienceCard component style

  - Update `ExperienceCard` style
  - Update `BackgroundCircles` component with the new `green` custom color
  - Update `Hero` component with the new `green` custom color

  ## 0.11.0 (2023-10-09)

  ### feat: Implement DarkModeButton component

  - Update `tailwind.config.ts` file with custom color
  - Refactor all occurrences with the new color value from `tailwind.config.ts`
  - Implement `DarkModeButton` component
  - Update style for the light mode

  ## 0.10.0 (2023-10-09)

  ### fix: Fix Responsive Design

  - Update image style from `About` component for small devices
  - Update style from `ExperienceCard` component for all devices
  - Update style from `WorkExperience` component for all devices
  - Change image for 'E-commerce' experience
    
  ## 0.9.0 (2023-10-08)

  ### feat: Implement Footer Component

  - Implement `Footer` Component

  ## 0.8.0 (2023-10-08)

  ### feat: Implement ContactMe Component

  - Add `contactMe` data file
  - Add `Contact` typings file
  - Add an API route to fetch the `contactMe` data
  - Add `ContactMe` component
  - fix css on `HeroComponent`

  ## 0.7.0 (2023-10-08)

  ### feat: Implement Projects Component

  - Add `projects` data file
  - Add `Projects` typings file
  - Add an API route to fetch the `projects` data
  - Add projects pictures in `public` folder
  - Add `Projects` component
  
  ## 0.6.0 (2023-10-08)

  ### feat: Implement Skills Component

  - Add `skills` data file
  - Add `SkillsInterface` typings file
  - Add an API route to fetch the `skills` data
  - Add `Skills` component
  
  ## 0.5.1 (2023-10-08)

  ### fix: Update experiences data

  - Update experiences data json file

  ## 0.5.0 (2023-10-08)

  ### feat: Implement Experiences Section

  - Add `experiences` data file
  - Add `Experiences` typings file
  - Add an API route to fetch the `experiences` data
  - Add experience pictures in `public` folder
  - Add `WorkExperience` component
  - Add `ExperienceCard` component
  - Add `Skill` component
  - Add `TooltipSkill` component

  ## 0.4.0 (2023-10-08)

  ### feat: Implement About Component

  - Add `about` data file
  - Add `About` typings file
  - Add an API route to fetch the `about` data
  - Add about picture in `public` folder
  - Add `About` component
  
  ## 0.3.0 (2023-10-08)

  ### feat: Implement Hero Component

  - Add `heroData` data file
  - Add `HeroData` typings file
  - Add an API route to fetch the `heroData` data
  - Add `BackgroundCircles` component
  - Add hero picture in `public` folder
  - Add `Hero` component
    
  ## 0.2.4 (2023-10-08)

  ### fix: Error prerendering

  - Edit `dynamic` fetch setting on `page.tsx`

  ## 0.2.3 (2023-10-05)

  ### fix: Error prerendering

  - Move `index.tsx` component from `pages` directory to `app` directory and rename to `page.tsx`
  - Remove `_app.tsx` and `_document.tsx` files
  - Add `app` directory
  - Move back `globals.css` from `styles` directory to `app` directory
  - Move back `favicon.ico` from `public` directory to `app` directory
  - Add `layout` component
  - Upadte `fetchSocialLinks` handler function

  ## 0.2.2 (2023-10-05)

  ### fix: Error prerendering

  - Move `page.tsx` component from `app` directory to `pages` directory and rename to `index.tsx`
  - Add `_app.tsx` and `_document.tsx` files
  - Move `globals.css` from `app` directory to `styles` directory
  - Move `favicon.ico` from `app` directory to `public` directory
  - Remove unnecessary `layout` component
  - Remove `app` directory

  ## 0.2.1 (2023-10-05)

  ### fix: Error prerendering

  - Move `socialLinks` api page from `app` directory to `pages` directory
  - Remove unnecessary `;` from files

  ## 0.2.0 (2023-10-05)

  ### feat: Implement Header Component

  - Add `socialLinks` data
  - Add `SocialLink` typings
  - Add an API route to fetch the `socialLinks` data.
  - Implement `.env` file

  ## 0.1.0 (2023-09-01)

  ### feat: Init project

  - Implement NEXT.js
<details>