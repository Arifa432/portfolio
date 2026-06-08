
export default function Navbar(props){
    return (
            <nav>
                <div id='navBar'>
                    <p id="logo">[TECH]</p>

                    <div className="search-box">
                        <input type="text" placeholder="search..."
                        value={props.search}
                        onChange={ (e) => props.setSearch(e.target.value)}
                        className="search-input"/>
                    </div>
                    <ul class='navbar-ul'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                                    
                </div>
            </nav>

    )
}
