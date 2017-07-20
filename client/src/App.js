import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import buildApolloClient from 'aor-graphql-client';

import { TrackCreate, TrackEdit, TrackList } from './components/tracks';
import { Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';

class App extends Component {
    constructor() {
        super();
        this.state = { restClient: null };
    }
    componentDidMount() {
        buildApolloClient()
          .then(restClient => this.setState({ restClient }));
    }

    render() {
        const { restClient } = this.state;

        if (!restClient) {
          return <div>Loading</div>;
        }

        return (
            <Admin restClient={restClient}>
              <Resource name="Track" list={TrackList} edit={TrackEdit} create={TrackCreate} remove={Delete} />
            </Admin>
        );
    }
}

export default App;
