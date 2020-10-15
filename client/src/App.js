import React,{ Suspense} from "react";
import ErrorBoundry from "./components/ErrorBoundry";
const Blog = React.lazy(() => import("./components/Blog"));
function App() {
  return (
    <div>
      <ErrorBoundry>
        <Suspense fallback={<h1>await</h1>}>
         <Blog />
        </Suspense>
      </ErrorBoundry>
    </div>
  );
}

export default App;
