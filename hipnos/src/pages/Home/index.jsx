import TempItem from '../../components/TempItem/index.jsx';
import FastActs from '../../components/FastActs/index.jsx';
import Header from '../../components/Header/index.jsx';
import './index.css';

export default function Home(){
    const temps = [{'hora': 9, 'temp': 26}, {'hora': 10, 'temp': 27}, {'hora': 11, 'temp': 27}, {'hora': 12, 'temp': 28}, {'hora': 13, 'temp': 28}]
    const fastacts = [{'icone': 'MdImage', 'desc': 'Reportar', 'bgColor': 'blue'}, {'icone': 'MdNotifications', 'desc': 'Alertas', 'bgColor': 'orange'}, {'icone': 'MdEmergency', 'desc': 'Emergência', 'bgColor': 'red'}];
    return(
        <>
            <Header />
            <section className="banners">
                <h3>Banner</h3>
                <h3>Banner</h3>
            </section>
            <section className="proxhoras">
                <h4>Próximas horas</h4>
                <div className="listhoras">
                    {temps.map((item, index)=>(
                        <TempItem
                            hora={item.hora}
                            temp={item.temp}
                        />
                    ))}
                </div>
            </section>
            <section className="acoesrapidas">
                <h4>Ações rápidas</h4>
                <div className="botoes">
                    {fastacts.map((botao, index)=>(
                        <FastActs
                            icone={botao.icone}
                            desc={botao.desc}
                            bgColor={botao.bgColor}
                        />
                    ))}
                </div>
            </section>
            <div className="navbar"></div>
        </>
    )
}