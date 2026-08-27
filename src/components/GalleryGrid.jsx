import Bookmark from "../assets/icons/bookmark.svg";
import Image1 from "../assets/images/image1.jpg";
import Image2 from "../assets/images/image2.jpg";
import Image3 from "../assets/images/image3.jpg";
import Image4 from "../assets/images/image4.jpg";
import Image5 from "../assets/images/image5.jpg";
import Image6 from "../assets/images/image6.jpg";

export default function GalleryGrid() {
  return (
    //  Gallery Container
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {/* Image 1 */}
      <div className="relative group">
        <img src={Image1} alt="Abstract Painting" className="w-72" />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">Abstract Painting</p>
              <p className="text-xs">245 likes - 35 Shares</p>
            </div>
            <div className="flex items-center">
              <img src={Bookmark} alt="bookmark" />
            </div>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative group">
        <img src={Image2} alt="Vintage Wooden Window" className="w-72" />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">Vintage Wooden Window</p>
              <p className="text-xs">305 likes - 45 Shares</p>
            </div>
            <div className="flex items-center">
              <img src={Bookmark} alt="bookmark" />
            </div>
          </div>
        </div>
      </div>

      {/* Image 3 */}
      <div className="relative group">
        <img src={Image3} alt="Side View" className="w-72" />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">Side View</p>
              <p className="text-xs">700 likes - 20 Shares</p>
            </div>
            <div className="flex items-center">
              <img src={Bookmark} alt="bookmark" />
            </div>
          </div>
        </div>
      </div>

      {/* Image 4 */}
      <div className="relative group">
        <img src={Image4} alt="Color Contrast" className="w-72" />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">Color Contrast</p>
              <p className="text-xs">550 likes - 30 Shares</p>
            </div>
            <div className="flex items-center">
              <img src={Bookmark} alt="bookmark" />
            </div>
          </div>
        </div>
      </div>

      {/* Image 5 */}
      <div className="relative group">
        <img src={Image5} alt="Abstract Estate" className="w-72" />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">Abstract Estate</p>
              <p className="text-xs">350 likes - 60 Shares</p>
            </div>
            <div className="flex items-center">
              <img src={Bookmark} alt="bookmark" />
            </div>
          </div>
        </div>
      </div>

      {/* Image 6 */}
      <div className="relative group">
        <img src={Image6} alt="The Door" className="w-72" />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">The Door</p>
              <p className="text-xs">400 likes - 50 Shares</p>
            </div>
            <div className="flex items-center">
              <img src={Bookmark} alt="bookmark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
