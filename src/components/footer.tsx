export default function Footer() {
    return (
        <footer className="border-t border-[rgba(0,200,180,0.1)] py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#3a5a54]">
                    © {new Date().getFullYear()} Fran Pizzichini. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/franco-pizzichini/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#7fa8a0] hover:text-[#00c8b4] transition-colors duration-200"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        href="https://github.com/Franpichi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#7fa8a0] hover:text-[#00c8b4] transition-colors duration-200"
                    >
                        GitHub ↗
                    </a>
                </div>
            </div>
        </footer>
    );
}
