import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <section className=" min-h-screen py-20 bg-gray-900 text-white">

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-10"
            >
                İletişim
            </motion.h2>
            <div className="max-w-4xl mx-auto px-6">
                {/*iletişim Bilgileri */}
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                    >
                        <FaMapMarkedAlt className="text-4xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Adres</h3>
                        <p>Sport B, İstanbul Cad. No:123</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                    >
                        <FaPhoneAlt className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                        <p>+90 123 456 7890</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                    >
                        <FaEnvelope className="text-4xl text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">E-posta</h3>
                        <p>contact@sportb.com</p>
                    </motion.div>
                </div>

                {/* iletisim formu */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-semibold text-center mb-6">Bizimle İletişime Geçin.</h3>
                    <form>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Adınız"
                                className="p-4 bg-gray-700 text-white rounded-lg"
                            />
                            <input
                                type="email"
                                placeholder="E-posta Adresiniz"
                                className="p-4 bg-gray-700 text-white rounded-lg"
                            />
                        </div>
                        <textarea
                            placeholder="Mesajınız"
                            className="p-4 bg-gray-700 text-white rounded-lg mt-6 w-full"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-lg text-lg transition duration-300"
                        >Gönder</button>
                    </form>

                </motion.div>
            </div>
        </section>
    )
}

export default Contact