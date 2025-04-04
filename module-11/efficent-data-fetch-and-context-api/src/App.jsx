import { useTheme } from './context/ThemeContext.jsx'

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`min-h-screen px-4 py-4 ${theme === "light" ? 'bg-gray-100' : ' dark:bg-gray-800'}`}>
      <h1 className={`${theme === "light" ? 'text-[#000]' : 'text-[#fff]'}`}>Theme: {theme}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleTheme}>toggleTheme</button>
    </div>
  )
}

export default App
