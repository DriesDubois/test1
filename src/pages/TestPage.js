import * as PropTypes from "prop-types";
import {Persons} from "../components/Persons";
import {schoolsFromPersonData} from "../utilities/person_utilities";
import {Schools} from "../components/Schools";


Persons.propTypes = {title: PropTypes.string};

export function TestPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="alle personen" showSchool={true}/>
            <Persons persons={persons.filter(p=>p.school==="ANT")} title="Antwerpen"/>
            <Schools schools={schoolsFromPersonData(persons)} title={"alle scholen"}/>
        </div>
    );
}