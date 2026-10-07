import './index.css';
export default function TempItem({hora, temp}){
    return(
        <>
            <div className="horas-item">
                <p className="horario">{hora}h</p>
                <img src="/assets/icons/home_cloud.svg" alt="nuvem" className="nuvem" />
                <p className="temp"><strong>{temp}º</strong></p>
            </div>
        </>
    )
}