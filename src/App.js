import  AuthProvider  from "./auth/AuthProvider";
import AppRouter from './routes/AppRouter'

function App() {


  return (
    <div>
      <AuthProvider>
        <AppRouter/>

      </AuthProvider>
      
    </div>
  );
}

export default App;
