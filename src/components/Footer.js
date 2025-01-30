import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                {/*Sol taraf logo ve telif hakkı  */}
                <div>
                    <h2 className="text-2xl font-bold">Sport B</h2>
                    <p className="text-gray-400 text-sm">
                        © 2025 Sport B. Tüm hakları saklıdır.
                    </p>
                </div>
                {/*orta - sosyal medya linkleri */}
                <div className="flex space-x-6 my-4 md:my-0">
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                        <FaTwitter size={24} />
                    </a>
                </div>
                {/* Sağ Taraf - Hızlı Linkler */}
                <div>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>
                            <a href="/" className="hover:text-white transition duration-300">Anasayfa</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-white transition duration-300">Hizmetler</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition duration-300">İletişim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;