import PropTypes from "prop-types";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

Schools.propTypes = {
    Schools: PropTypes.shape({
        schools: PropTypes.array,
        title: PropTypes.string,

    })
}

export function Schools (props){
    const {schools, title} = props
    return (
        <Section title={title}>
            {schools.map(s => <School key={s.name} school={s}/>)}
        </Section>
    );
}

School.propTypes = {
    School: PropTypes.shape({
        name: PropTypes.string,
        subscribedStudents: PropTypes.number,
    })
}

function School (props){
    const {school} = props;
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <MyCard title={school.name}>
                subscriptions: {school.subscribedStudents}
            </MyCard>
        </Col>
    );
}