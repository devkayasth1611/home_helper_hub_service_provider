
import './App.css'

function App() {

  return (
    <>
    <header class="bgCol text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-between py-3">
        <h1 class="h3">HomeHelper Hub</h1>

        {/* <!-- Navbar --> */}
        <nav class="d-none d-md-block">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contact Us</a>
            </li>
          </ul>
        </nav>

        <button class="btn btn-light d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
          Toggle Sidebar
        </button>
      </div>
    </div>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bgCol sidebar collapse">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Settings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Help</a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2>Welcome to HomeHelper Hub</h2>
        </div>
        <p>Your one-stop solution for managing all your home needs efficiently.</p>
        <p>Explore our services to get started with your home management journey.</p>
      </main>
    </div>
  </div>

  <footer class="bgCol text-white text-center py-3 mt-auto">
    <div class="container">
      <p>&copy; 2024 HomeHelper Hub. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}


export default App