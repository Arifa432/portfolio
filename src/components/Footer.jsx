export default function Footer() {
    return(
        <footer className="footer-box">
            <p>© {new Date().getFullYear()} Arifa Ramazani</p>
            <div className="media">
                <a href="#" >GitHub</a>
                <a href="#" >LinkedIn</a>
                <a href="#" >Twitter</a>
            </div>
        </footer>
    )
}