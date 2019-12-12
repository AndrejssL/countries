import React from "react";
import gql from "graphql-tag";
import { LoadingSpinner } from "./Spinner";
import { Query } from 'react-apollo';
import { client } from '../../apollo';
import { Accordion, Card } from 'react-bootstrap';

export function Country() {

  const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
      native
      currency
      phone
      continent{
        name
      }
    }
  }
`;

  return (
    <Query query={GET_COUNTRIES} client={client}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingSpinner />;
        if (error) return <p>Something went wrong... Please check again later!</p>;
        return (
          <div>
            {data.countries.map(country => (
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    {country.name}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Country's Code: {country.code}<br></br>
                      Country's Phone Code: +{country.phone}<br></br> 
                      Country's Native Langugage: {country.native}<br></br> 
                      Country's Currency: {country.currency}<br></br>
                      Continent, where country is located: {country.continent.name}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
          </div>
        );
      }}
    </Query>
  );
}
