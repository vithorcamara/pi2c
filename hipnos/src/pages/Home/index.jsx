import Header from '../../components/Header/index.jsx'
export default function Home(){
    return(
        <>
            {/* header */}
            <Header/>
            {/* section#banner */}
            {/* main > (div#categorias + div#itens > (button#menuItem * X)) */}
            <main>
                <div id="categorias"></div>
                <div id="itens">
                    <button className="menuItem">1</button>
                    <button className="menuItem">2</button>
                    <button className="menuItem">3</button>
                    <button className="menuItem">4</button>
                    <button className="menuItem">5</button>
                    <button className="menuItem">6</button>
                </div>
            </main>
            {/* navbar */}
        </>
    )
}