import * as C from './Plans.styled';
import WifiIcon from '@mui/icons-material/Wifi';
import GamesIcon from '@mui/icons-material/Games';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export interface Plan {
    speed: number;
    speed_label: string;
    wifi: boolean;
    games: boolean;
    movies: boolean;
    betterPlan: boolean;
    price: string;
}


export const Plans: React.FC<Plan> = (data: Plan) => {
    const totalPrice = data.price.split(',');
    return (
        <>
            <li><strong><C.Speed color={data.betterPlan ? 'primary' : ''}>{data.speed}</C.Speed></strong></li>
            <li><C.SpeedLabel>{data.speed_label}</C.SpeedLabel></li>
            <li><WifiIcon/>{data.wifi ? 'Com Wi-Fi' : 'Sem Wi-Fi'}</li>
            <li><GamesIcon/>{data.games ? 'Com Games' : 'Sem Games'}</li>
            <li><LocalMoviesIcon/>{data.movies ? 'Com Filmes' : 'Sem Filmes'}</li>
            <li className="green-label pull-left">
                    <C.ContainerPrice>
                        <span>R$ </span>
                        <C.LargePrice>{totalPrice[0]}</C.LargePrice>
                        <span>,{totalPrice[1]}</span>                    
                        <C.Period>/ mês</C.Period>
                    </C.ContainerPrice>
            </li>
            <li className="green-label">Na conta digital</li>
            <li>{`<< Consulte condições >>`}</li>
            <C.ContractButton color={data.betterPlan ? 'primary' : ''}>Contrate já</C.ContractButton>
        </>
    )
}