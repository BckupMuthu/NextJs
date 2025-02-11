    import { motion } from "framer-motion";
    import Link from "next/link";
    
    export default function Home() {
    return (
        <div
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
        style={{
            backgroundImage: "url('/logo.jpg')",
            filter: "brightness(0.7) contrast(1.2)", // Light contrast effect on background
        }}
        >
        <motion.div
            className="container mx-auto max-w-3xl bg-white bg-opacity-80 p-8 rounded-xl shadow-2xl perspective-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
            transformStyle: "preserve-3d",
            }}
        >
            {/* Enhanced Title */}
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 mb-8 animate-pulse">
            Cash For Old Silk Products
            </h1>

            {/* Descriptive Paragraph */}
            <motion.p
            className="text-lg text-gray-700 mb-8 font-serif tracking-wide leading-relaxed shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            >
            Got sarees that are sitting unused in your wardrobe? Let them find a
            new home and earn<span className="font-bold"> extra cash </span>in the process. Join thousands of sellers
            today! We buy <span className="font-bold">Join thousands of sellers </span>
            today! We buy <span className="font-bold">Pattu silk sarees</span>  and other various products from across
            India, making it convenient for you to sell from your city. Our top
            priority is customer satisfaction, and we are dedicated to offering
            exceptional service.
            </motion.p>

            {/* Marquee-style Categories Section */}
            <motion.div
            className="mt-8 overflow-hidden relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.6 }}
            >
            <div className="marquee-container flex gap-6 py-6">
                {/* Map through items */}
                {[
                { src: "/images (1).jpeg", title: "Zari Dhoti", alt: "Zari Dhoti" },
                { src: "/Banarasi Silk.jpeg", title: "Banarasi Silk", alt: "Banarasi Silk" },
                { src: "/first.jpeg", title: "Silk Saree", alt: "Silk Saree" },
                { src: "/t7sow_1200.jpg", title: "Zari Blouse", alt: "Zari Blouse" },
                { src: "/skirtst18595aw22grn_1.jpg", title: "Silk Skirt", alt: "Silk Skirt" },
                
                ].map((item, idx) => (
                <div
                    key={idx}
                    className="bg-white p-6 rounded-full shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 mx-4 space-y-4 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-200 flex flex-col justify-center items-center"
                    style={{
                    width: "200px", // Set width for consistent size
                    height: "200px", // Set height for consistent size
                    flexShrink: 0,   // Prevent the div from shrinking
                    }}
                >
                    <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-full" // Ensure the image fills the circle
                    />
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                </div>
                ))}
            </div>
            
            </motion.div>

            {/* WhatsApp Contact Button */}
            <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            >
            <a
                href="https://wa.me/8124286104?text=Hi,%20I'm%20interested%20in%20selling%20my%20saree."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 px-10 rounded-xl text-lg font-semibold transform transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-600 shadow-md"
            >
                <img
                src="/images.jpeg"
                alt="WhatsApp Icon"
                className="w-6 h-6 mr-2"
                />
                Chat with us on WhatsApp
            </a>
            </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 text-gray-600 text-sm">
            <p>© 2025 SareeShop. All rights reserved.</p>
        </footer>
        </div>
    );
    }
