import './App.css'
import { Plans, Plan } from './components/Plans/Plans';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const plans: Plan[] = [
    {
      speed: 200,
      speed_label: 'Megas',
      wifi: true,
      games: false,
      movies: false,
      betterPlan: false,
      price: '399,99',
    },
    {
      speed: 400,
      speed_label: 'Megas',
      wifi: true,
      games: true,
      movies: false,
      betterPlan: true,
      price: '110,99',
    },
    {
      speed: 1,
      speed_label: 'Giga',
      wifi: true,
      games: true,
      movies: true,
      betterPlan: false,
      price: '149,99'
    }
];

  // useEffect para pegar os planos

  return (
    <div className="App">
      <ul className="list-plans">
        {plans.map((item) => (
          <div className={`list-plans-container${item.betterPlan ? ' better-plan' : ''}`}>
            <Plans key={item.speed} 
                   speed={item.speed} 
                   games={item.games} 
                   movies={item.movies} 
                   speed_label={item.speed_label} 
                   wifi={item.wifi}
                   betterPlan={item.betterPlan}
                   price={item.price}
            />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
