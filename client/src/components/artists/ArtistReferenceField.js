import React from 'react';
import { ReferenceField } from 'admin-on-rest';

import FullNameField from './FullNameField';

const ArtistReferenceField = props => (
    <ReferenceField source="artist.id" reference="Artist" {...props}>
        <FullNameField />
    </ReferenceField>
);
ArtistReferenceField.defaultProps = {
    source: 'artist.id',
    addLabel: true,
};

export default ArtistReferenceField;