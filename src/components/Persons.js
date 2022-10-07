import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

function Person(props) {
    const {person,showSchool} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={person.name}>
                <div>{person.age}</div>
                <div>{person.city}</div>
                {showSchool&&<div>{person.school}</div>}
            </MyCard>
        </Col>
    );
}

Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        showSchool:PropTypes.bool
    })
}

export function Persons(props) {
    const {persons, title,showSchool} = props;
    return (
        <Section title={title}>
            {persons.map(p => <Person key={p.id} person={p} showSchool={showSchool}/>)}
        </Section>
    );
}

Persons.propTypes = {
    persons: PropTypes.array,
    title: PropTypes.string
}