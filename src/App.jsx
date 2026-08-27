import GalleryGrid from "./components/GalleryGrid";
import Menu from "./components/Menu";
import Search from "./components/Search";

function App() {
  return (
    // Global Container
    <div class="flex items-center justify-center min-h-screen bg-cyan-50">
      {/* Card Container */}
      <div class="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <Menu />
        <Search />
        <GalleryGrid />
      </div>
    </div>
  );
}

export default App;
