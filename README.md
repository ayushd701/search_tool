# Search Explorer 🔍

A responsive search tool built using **Vue 3 (Composition API)** that demonstrates modular component design, debounced search input, simulated API calls with pagination, and dark/light theme toggling.

---

## ✨ Features

- 🔎 Debounced search input for performance optimization
- 📦 Modular and reusable components
- ⏳ Simulated API with latency and pagination
- ➕ Load More pagination with result limits
- 🌙 Dark / Light theme toggle with persistence
- 🧠 Proper empty states handling
- 📱 Responsive and clean UI

---

## 🛠️ Tech Stack

- **Vue 3**
- Composition API (`ref`, `watch`, `onMounted`)
- CSS Variables for theming
- No external UI or state libraries

---

## 🚀 How It Works

1. User types in the search bar
2. Input is debounced to avoid unnecessary API calls
3. Parent component manages:
   - search query
   - loading states
   - pagination
4. Results are fetched from a simulated API
5. Results are rendered using reusable list and item components
6. Additional results can be loaded using the “Load more” button

---

## 🎨 Theme Handling

- Dark and light themes are handled using **CSS variables**
- Theme state is stored in `localStorage`
- Theme persists across page reloads

---

## 🧪 Empty States Covered

- Initial state → “Start typing to search”
- No results → “No results found”
- End of results → “You’ve reached the end”

---

## 📈 Scalability Considerations

For larger applications:
- API calls can be moved to a real backend
- Pagination can be replaced with infinite scroll
- Global state management (Pinia) can be introduced if needed
- Accessibility enhancements (keyboard navigation, ARIA roles)

---

## ▶️ Run Locally

```bash
gh repo clone ayushd701/search_tool
npm install
npm run dev
