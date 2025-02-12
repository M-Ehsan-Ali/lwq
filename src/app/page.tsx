// import PostsTemplate from "@/components/Templates/Post/PostsTemplate";
import Home from "./content";

export default function MainPage() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen 2xl:min-h-0"
        style={{
          backgroundImage: "url('/home/home-background.png')",
        }}
      >
        <Home />
      </div>
      {/* Services */}
      {/* <div
    className="bg-cover bg-center bg-no-repeat min-h-screen "
    style={{
      backgroundImage: "url('/services/services.png')",
    }}
  >
    <Services />
  </div> */}
    </>
  );
}
