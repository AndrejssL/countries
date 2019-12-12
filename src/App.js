import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Country } from './helpers/components/Country'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
      <h1>World countries with all information</h1>
        <div className='list'>
          <Country />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;