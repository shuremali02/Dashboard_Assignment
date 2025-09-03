# 📊 Dashboard App

A responsive dashboard application built with **React**, **Tailwind CSS**, and **Context API**.  
It includes a sidebar with navigation between pages (Dashboard, Revenue, Expenses, Profit) and works on both desktop and mobile with a toggle sidebar.

---

## 🚀 Features

- Responsive sidebar (desktop fixed, mobile toggle with overlay)
- Pages:
  - Dashboard (default)
  - Revenue
  - Expenses
  - Profit
- Context API for filter state management
- Built with Tailwind CSS for styling

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [Vite](https://vitejs.dev/) (for development & build)

---

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install Dependencies
npm install
3. Run the Development Server
npm run dev
Your app will be running at:
👉 http://localhost:5173

🔨 Build for Production

npm run build
📂 Project Structure
css

src/
  app/
    App.tsx
  components/
    Sidebar.tsx
    Header.tsx
    FilterBar.tsx
    StatCard.tsx
    PerformanceBanner.tsx
    NotificationPerformance.tsx 
    LinesChart.tsx
  context/
    FilterContext.tsx
  hooks/
    useDashboardData.ts
  lib/
    data.ts
  utils/
    filters.ts
    format.ts
    csv.ts
  pages/
    Dashboard.tsx
    Revenue.tsx
    Profit.tsx
    Expenses.tsx
  index.css
  main.tsx
✅ Notes
Make sure you have Node.js (>=16) installed.

After cloning, simply run:


npm install
npm run dev
The app will be ready to use 🎉

