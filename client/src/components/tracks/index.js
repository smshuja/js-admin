import React from 'react';
import {
    translate,
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberInput,
    ReferenceInput,
    ReferenceManyField,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/image/collections';
import Chip from 'material-ui/Chip';
import RichTextInput from 'aor-rich-text-input';

import ArtistReferenceField from '../artists/ArtistReferenceField';

import GridList from './GridList';
import Poster from './Poster';

export const ProductIcon = Icon;

const QuickFilter = translate(({ label, translate }) => <Chip>{translate(label)}</Chip>);

export const TrackFilter = props => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <ReferenceInput source="category.id" reference="Category">
            <SelectInput source="name" />
        </ReferenceInput>
        <NumberInput source="width_gte" />
        <NumberInput source="width_lte" />
        <NumberInput source="height_gte" />
        <NumberInput source="height_lte" />
        <QuickFilter label="resources.Product.fields.stock_lte" source="stock_lte" defaultValue={10} />
    </Filter>
);

export const TrackList = props => (
    <List {...props} filters={<TrackFilter />} perPage={20}>
        <GridList />
    </List>
);

export const TrackCreate = props => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="resources.Product.tabs.image">
                <TextInput source="image" options={{ fullWidth: true }} validation={{ required: true }} />
                <TextInput source="thumbnail" options={{ fullWidth: true }} validation={{ required: true }} />
            </FormTab>
            <FormTab label="resources.Product.tabs.details">
                <TextInput source="reference" validation={{ required: true }} />
                <NumberInput source="price" validation={{ required: true }} elStyle={{ width: '5em' }} />
                <NumberInput source="width" validation={{ required: true }} style={{ display: 'inline-block' }} elStyle={{ width: '5em' }} />
                <NumberInput source="height" validation={{ required: true }} style={{ display: 'inline-block', marginLeft: 32 }} elStyle={{ width: '5em' }} />
                <ReferenceInput source="category.id" reference="Category" allowEmpty>
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" validation={{ required: true }} elStyle={{ width: '5em' }} />
            </FormTab>
            <FormTab label="resources.Product.tabs.description">
                <RichTextInput source="description" addLabel={false} />
            </FormTab>
        </TabbedForm>
    </Create>
);

const TrackTitle = ({ record }) => <span>Poster #{record.reference}</span>;
export const TrackEdit = props => (
    <Edit {...props} title={<TrackTitle />}>
        <TabbedForm>
            <FormTab label="resources.Product.tabs.image">
                <Poster />
                <TextInput source="image" options={{ fullWidth: true }} />
                <TextInput source="thumbnail" options={{ fullWidth: true }} />
            </FormTab>
            <FormTab label="resources.Product.tabs.details">
                <TextInput source="reference" />
                <NumberInput source="price" elStyle={{ width: '5em' }} />
                <NumberInput source="width" style={{ display: 'inline-block' }} elStyle={{ width: '5em' }} />
                <NumberInput source="height" style={{ display: 'inline-block', marginLeft: 32 }} elStyle={{ width: '5em' }} />
                <ReferenceInput source="category.id" reference="Category">
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" elStyle={{ width: '5em' }} />
            </FormTab>
            <FormTab label="resources.Product.tabs.description">
                <RichTextInput source="description" addLabel={false} />
            </FormTab>
            <FormTab label="resources.Product.tabs.reviews">
                <ReferenceManyField reference="Review" target="product.id" addLabel={false}>
                    <Datagrid>
                        <DateField source="date" />
                        <ArtistReferenceField />
                        <TextField source="comment" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);