import Form from './components/form/Form';
import { useSelector } from 'react-redux';
import Report from './components/report/Report';
import { RootState } from './redux/store/store';
import './app.css';

const App = () => {
  const report = useSelector((state: RootState) => state.report.report);
  return (
    <div className="main">
      <Form />
      {report && <Report report={report && report} />}
    </div>
  );
};

export default App;
