
function App() {
  return (
    <>
      {/* <!-- Table Section --> */}
      <div className="max-w-[55rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-flex flex-col gap-3 align-middle">
              {/* Text and Layout */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="m-5">
                  <h1>Header</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus unde tenetur magni odio cumque non explicabo, eligendi laboriosam aliquid voluptate doloremque est pariatur nulla commodi nobis, voluptatibus amet? Ea.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam magni amet. Earum recusandae, quasi nesciunt illum tempora reprehenderit velit ab harum inventore quia ea veniam molestiae commodi! Cum, facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti totam quod praesentium aliquid quasi reiciendis sint, eveniet accusamus cumque exercitationem autem facilis necessitatibus, facere sed? Ullam vel eaque aperiam!</p>
                  <h1>Header 1</h1>
                  <h2>Header 2</h2>
                  <h3>Header 3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti quo unde, id facere perferendis accusantium voluptatibus nihil suscipit, temporibus rem repellat dicta necessitatibus sint non, nisi illo officia enim.</p>
                </div>
              </div>
              {/* Buttons */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="m-5 flex flex-col gap-2">
                  <h1>Buttons</h1>
                  <div className="inline-flex flex-wrap gap-2">
                    <button className="btn" href="#">Primary</button>
                    <button className="btn btn-outline" href="#">Primary</button>
                    <button className="btn btn-secondary" href="#">Secondary</button>
                    <button className="btn btn-outline-secondary" href="#">Secondary</button>
                    <button className="btn btn-danger" href="#">Danger</button>
                    <button className="btn btn-outline-danger" href="#">Danger</button>
                    <button className="btn btn-dark" href="#">Dark</button>
                    <button className="btn btn-outline-dark" href="#">Dark</button>
                    <button className="btn btn-link" href="#">Link</button>
                  </div>
                  <h1>Disabled Buttons</h1>
                  <div className="inline-flex flex-wrap gap-2">
                    <button className="btn" href="#" disabled>Primary</button>
                    <button className="btn btn-outline" href="#" disabled>Primary</button>
                    <button className="btn btn-secondary" href="#" disabled>Secondary</button>
                    <button className="btn btn-outline-secondary" href="#" disabled>Secondary</button>
                    <button className="btn btn-danger" href="#" disabled>Danger</button>
                    <button className="btn btn-outline-danger" href="#" disabled>Danger</button>
                    <button className="btn btn-dark" href="#" disabled>Dark</button>
                    <button className="btn btn-outline-dark" href="#" disabled>Dark</button>
                    <button className="btn btn-link" href="#" disabled>Link</button>
                  </div>
                </div>
              </div>
              {/* End Buttons */}
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
