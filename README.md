# CGS-landing 🌐

Welcome to **CGS-landing**, a project aimed at providing a seamless, scalable, and organized structure for your codebase. This README serves as a guide for the coding style and file organization that we follow to maintain consistency and clarity across the project.

---

## **Code Style Guide** 📝

### **Naming Conventions**

#### 1. File Naming in `kebab-case` ✅
- Always use `kebab-case` for file and folder names. This style improves readability and consistency across the codebase.

**Examples:**

```
history.type.ts
calculate-outcome.util.ts
links.const.ts
manager.controller.ts
user.service.ts
post.entity.ts
```

#### 2. Use Suffixes for Files ✅
- Adding suffixes to file names makes it easier to navigate through open files, especially in larger projects.

**Frontend Examples:**
```
history.component.ts
calculate-outcome.container.ts
roles.util.ts
links.const.ts
manager.styled.ts
user.service.ts
post.provider.ts
history.type.ts
```  

**Backend Examples:**
```
history.component.ts
calculate-outcome.container.ts
roles.util.ts
links.const.ts
manager.controller.ts
user.service.ts
post.entity.ts
```

#### 3. Folder Naming ✅
- Use `kebab-case` for folder names to ensure a consistent structure throughout the project.

**Example:**
```
- modules
-- account-tracking
-- user-management
```

#### 4. Folder structure ✅

###### Use modular approach for large projects and medium projects 🙏

> If the project which you are working on has opportunities to grow and scale, it is time to think about modules.
> Modules help you to keep your code clear and migrate easy to Micro Service architecture in the future.
> We usually use the following structure:


**Frontend:**

```
src
- modules
-- user
--- components
---- user-input.component.ts
---- user-avatar.component.ts
---- user-slider.component.ts
---- index.ts
---
--- containers
---- user-page.container.ts
---- user-details-page.container.ts
---- index.ts
---
--- services
---- user-auth.service.ts
---- user-stats.service.ts
---- index.ts
---
--- utils
---- crop-user-avatar.util.ts
---- index.ts
---
--- types
---- user.types.ts
---- index.ts
---
--
-

```


**Backend:**

```
src
- modules
-- user
--- controllers
---- user.controller.ts
---- index.ts
---
--- services
---- user-auth.service.ts
---- user-stats.service.ts
---- index.ts
---
--- utils
---- crop-user-avatar.util.ts
---- index.ts
---
--- types
---- user.types.ts
---- index.ts
---
--
-
```


For more detailed code style instructions, you can check our company [**GitHub repo**](https://github.com/CodeGeneration-2020/code-generation-code-style/tree/main)
# cgs-landing
# cgs-landing
