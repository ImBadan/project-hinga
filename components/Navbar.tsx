type Props = {
    isAdmin: boolean;
  };
  
  export default function Navbar({
    isAdmin,
  }: Props) {
  
    return (
      <>
        <button
            onClick={() => window.history.back()}
            className="
                fixed
                top-6
                left-6
                z-50

                bg-[#24345A]

                w-12
                h-12

                rounded-full

                flex
                items-center
                justify-center

                shadow-md

                hover:scale-105
                hover:opacity-90

                transition
            "
            >
            <span className="text-white text-xl">
                ←
            </span>
            </button>

        {/* LOGO */}
        <div className="absolute top-15 left-6 md:left-10 z-50">
  
          <img
            src="/logo.png"
            alt="Project Hinga"
            className="w-28 md:w-40"
          />
  
        </div>
  
        {/* LOGOUT */}
        {isAdmin && (
          <button
            onClick={() => {
              localStorage.removeItem("hinga_admin");
              window.location.reload();
            }}
            className="
              fixed
              top-6
              right-6
              bg-red-500
              text-white
              px-4
              py-2
              rounded-full
              z-50
              hover:opacity-90
              transition
            "
          >
            Logout
          </button>
        )}
  
        {/* NAVIGATION */}
        <nav className="
          w-full
          flex
          items-center
          justify-center
          gap-8
          py-6
          text-[#1f3261]
          font-medium
          backdrop-blur-sm
        ">
  
          <a href="/" className="hover:opacity-70 transition">
            Home
          </a>
  
          <a href="#" className="hover:opacity-70 transition">
            About Us
          </a>
  
          <a href="#" className="hover:opacity-70 transition">
            Our Mission
          </a>
  
          <a href="#" className="hover:opacity-70 transition">
            Mental Health
          </a>
          
          <a href="#" className="hover:opacity-70 transition">
            Get Involved
          </a>
  
          <a href="#" className="hover:opacity-70 transition">
            Resources
          </a>

          <a href="#" className="hover:opacity-70 transition">
            Contact Us
          </a>
  
        </nav>
  
      </>
    );
  }