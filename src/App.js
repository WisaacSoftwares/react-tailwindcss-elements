import ButtonsSection from "./components/ButtonsSection";
import LayoutContainers from "./components/LayoutContainers";
import MainContainer from "./components/MainContainer";
import TextSection from "./components/TextSection";

function App() {
  return (
    <>
      {/* <!-- Table Section --> */}
      <div className="max-w-[55rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-flex flex-col gap-3 align-middle">
              {/* Text Section */}
              <MainContainer title={"Basic Text and Body"}>
                <TextSection />
              </MainContainer>
              {/* Buttons */}
              <MainContainer title={"Basic Buttons"}>
                <ButtonsSection />
              </MainContainer>
              {/* Layout and Containers */}
              <MainContainer title={"Basic Container and Layout"}>
                <LayoutContainers />
              </MainContainer>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Table Section --> */}
    </>
  );
}

export default App;
