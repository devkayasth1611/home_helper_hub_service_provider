
import './App.css'

function App() {

  return (
    <>
      <header className="bgCol text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between py-3">
            <h1 className="h3">HomeHelper Hub</h1>

            {/* <!-- Navbar --> */}
            <nav className="d-none d-md-block">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact Us</a>
                </li>
              </ul>
            </nav>

            <button className="btn btn-light d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
              Toggle Sidebar
            </button>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bgCol sidebar collapse">
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Help</a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Welcome to HomeHelper Hub</h2>
            </div>
            <p>Your one-stop solution for managing all your home needs efficiently.</p>
            <p>Explore our services to get started with your home management journey.</p>
          </main>
        </div>
      </div>

      <footer className="bgCol text-white text-center py-3 mt-auto">
        <div className="container">
          <p>&copy; 2024 HomeHelper Hub. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}


export default App