import './App.css'
import { Plans, Plan } from './components/Plans/Plans';

export const App = () => {
  const plans: Plan[] = [
    {
      speed: 200,
      speed_label: 'Megas',
      wifi: true,
      games: false,
      movies: false,
      betterPlan: false,
    },
    {
      speed: 400,
      speed_label: 'Megas',
      wifi: true,
      games: true,
      movies: false,
      betterPlan: true
    },
    {
      speed: 1,
      speed_label: 'Giga',
      wifi: true,
      games: true,
      movies: true,
      betterPlan: false
    }
];

  // useEffect para pegar os planos

  return (
    <div className="App">
      <ul className="list-plans">
        {plans.map((item) => (
          <div className={`list-plans-container${item.betterPlan ? ' better-plan' : ''}`}>
            <Plans key={item.speed} speed={item.speed} games={item.games} movies={item.movies} speed_label={item.speed_label} wifi={item.wifi} betterPlan={item.betterPlan} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
