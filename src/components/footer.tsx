export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-600">
            <p className="mb-2">
                © {new Date().getFullYear()} Fran Pizzichini. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 text-[color:var(--color-primary)]">
                <a href="https://www.linkedin.com/in/franco-pizzichini/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Franpichi" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
}
