export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Your Company</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                        <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
