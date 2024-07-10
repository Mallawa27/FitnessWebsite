import './App.css';

function App() {
  return (
    <>

    <section>
    <header className="w-full p-6 bg-gradient-to-b from-purple-300 to-gray-700 flex items-center justify-between fixed top-0 left-0 z-10 relative">
  <div className="text-lg text-white font-sans font-bold hover:font-serif">FitnessTraking</div>
  <nav className="flex items-center justify-center">
    <ul className="flex list-none m-0 p-0 justify-center">
      <li className="w-full text-white hover:text-blue-500 mx-4 transition duration-300 ease-in-out">
        <a href="#home">Home</a>
      </li>
      <li className="w-full text-white hover:text-blue-500 mx-8 transition duration-300 ease-in-out">
        <a href="#about">AboutUs</a>
      </li>
      <li className="w-full text-white hover:text-blue-500 mx-4 transition duration-300 ease-in-out">
        <a href="#login">Login</a>
      </li>
      <li className="w-full text-white hover:text-blue-500 mx-4 transition duration-300 ease-in-out">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

    
      <section id="home" className="h-screen w-full flex items-center bg-cover bg-center" style={{
  backgroundImage: 'url(https://s3.envato.com/files/440695977/641ad5416326c4017735ec02_withmeta.jpg)',
}}>
      <div className="h-screen w-full flex items-center bg-gradient-to-b from-white-200 ">
      <div className="max-w-md p-4">
        <h1 className="text-5xl font-bold text-black  font-serif"> Build a Perfect body shape for good and Healthy life</h1>
        <p className="text-xl text-gray-800">.</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded font-serif">Join With Us</button>
      </div>
      <div className="container flex justify-end">
      </div>
    </div>
   </section>

    <section id="about" class="mt-10 scroll-smooth">
        <div class="bg-gray-200 py-12">
          <div class="container mx-auto px-4">
            <h2 class="text-xl font-bold mb-4">About Us</h2>
            <p class="text-lg font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-lg font-serif">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           <br></br>
            <h2 class="text-xl font-bold mb-4">Images of our places</h2>
            <div class="grid grid-cols-3 gap-6 ">
      <img src="https://whateveryourdose.com/wp-content/uploads/2020/08/third-space-luxury-gym.png" class="w-full h-64 object-cover" />
      <img src="https://www.lifestylefitness.co.uk/assets/media/lifestyle-fitness-cheshunt-05102022-110145_large.jpg" class="w-full h-64 object-cover" />
      <img src="https://th.bing.com/th/id/OIP.h2eVZI7p5f7QLBkadTSuHAAAAA?rs=1&pid=ImgDetMain" class="w-full h-64 object-cover" />
      </div>

          </div>
        </div>
      </section>

      <section id="contact" class="mt-10 scroll-smooth">
        <div class="bg-gray-400 py-12">
        <ul class="list-none mb-4">
          <li class="text-lg font-serif">Contact us: <a href="infofitnesstrackingapp@gmail.com" class="text-red-600 ">infofitnesstracking@gmail.com</a></li>
          <li class="text-lg font-serif">Follow us: <a href="#" class="text-red-600 ">Facebook</a>, <a href="#" class="text-red-600 ">Twitter</a></li>
        </ul>
        </div>
      </section>


      <section>
        <div>
        <footer class="bg-gradient-to-b from-purple-300 to-gray-700">
          <p>Copyright © 2024. All rights reserved.</p>
        </footer>
        </div>
      </section>
    </section>
    </>
  );
}


export default App;
