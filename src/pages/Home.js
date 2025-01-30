import gymBg from "../assets/gym-bg.jpg"
import { delay, motion } from "framer-motion"


function Home() {
    return (
        <section className=" h-screen flex flex-col items-center justify-center text-center text-white p-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${gymBg})` }}
        >

            {/* İçerik kutusu */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-black bg-opacity-60 p-10 rounded-lg">

                {/*Başlık */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-4">
                    Sport B'ye Hoş Geldiniz!
                </motion.h1>

                {/*acıklama*/ }
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl mb-6">
                    Profesyonel ekipmanlarımız ve uzman antrenörlerimizle sizi hedefinize ulaştırıyoruz.
                </motion.p>
                {/*BUTON */ }
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/services"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transtion duration-300">
                    Hemen başla
                </motion.a>


            </motion.div>
        </section>
    )
}
export default Home;