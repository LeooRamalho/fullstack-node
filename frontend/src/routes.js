import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Tasks from './pages/Tasks';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<Tasks />} />
        </Routes>
    );
}
export default CustomRoutes;