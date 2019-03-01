import React from  'react';
import Auxillary from '../hoc/Auxillary';
import Sidebar from './sidebar/sidebar';
import { Route , Switch} from 'react-router-dom';
import Scholarship from './categories/aicte/scholarship/scholarship';
import Grievences from '../container/grievences/grievences';
import Creategrievence from '../container/creategrievence/creategrievence';
import Closedgrievence from '../container/closedgrievence/closedgrievence';
import Creategrievencelog from '../container/creategrievencelog/creategrievencelog';
import Viewgrievence from '../container/viewgrievence/viewgrievence';
import Eligibilty from '../components/categories/aicte/scholarship/eligibility_criteria/eligibity';
import Couselling from '../components/categories/aicte/scholarship/Counselling_admission_related_Issue/counselling';
import Reimbursement from '../components/categories/aicte/scholarship/Scholarship_reimbursement/scholarship_reimbursement';
import Portal from '../components/categories/aicte/scholarship/Portal_related_issue/portal_related_issue';
import Other from '../components/categories/aicte/scholarship/others/others';
import RightToInformation from './categories/aicte/right-to-information/right-to-information';
import Rti from './categories/aicte/right-to-information/right_to_information';
import ComplaintsToVigilance from './categories/aicte/complaints-vigilance/complaints_vigilance';
import Ragging from './categories/aicte/complaints-vigilance/ragging/ragging';
import Others from './categories/aicte/complaints-vigilance/others/other';
import Certificate from './categories/aicte/complaints-vigilance/certificate/certificate';
import Against_institute from './categories/aicte/complaints-vigilance/against_institute/against_institute';
import Fee_payment from './categories/aicte/complaints-vigilance/fee_payment/fee_payment';
import Vigilance from './categories/aicte/complaints-vigilance/vigilance/vigilance';
import Facility from './categories/local/facility-related/facility';
import Dispensary from './categories/local/facility-related/Dispensary/Dispensary'
import Road from './categories/local/facility-related/Road_and_pathways/Road'
import Sports from './categories/local/facility-related/Sports_infrastructure/Sports_infrastructure'
import Sports_material from './categories/local/facility-related/Sports_material/Sports_material'
import Otherss from './categories/local/facility-related/Others/Other';
import Othersss from './categories/local/hostel-related/others/others';
import Hostel from './categories/local/hostel-related/hostel';
import Electricity from './categories/local/hostel-related/electricity/electricity';
import Furniture from './categories/local/hostel-related/furniture/furniture';
import Hostelstaff from './categories/local/hostel-related/hostelstaff/hostelstaff';
import Mess_fee from './categories/local/hostel-related/mess_fee/messfee';
import Mess_food from './categories/local/hostel-related/mess_food/mess_food';
import Mess_menu from './categories/local/hostel-related/mess_menu/mess_menu';
import Mess_staff from './categories/local/hostel-related/mess_staff/mess_staff';
import Watersupply from './categories/local/hostel-related/watersupply/watersupply';
import Front from '../components/front/front';
import Wifi from './categories/local/hostel-related/wifi/wifi';

const layout = (props) => {
    console.log(localStorage.getItem("token"));
    return (
        <Auxillary>
            <Sidebar />
            <div>
                <Switch>
                <Route path='/login' exact component={Front} />
                <Route path="/" exact component={Grievences} /> 
                <Route path="/closedgrievence" component={Closedgrievence} />
                <Route path="/viewgrievence" component={Viewgrievence} />
                <Route path="/creategrievence/scholarship/Counselling" component={Couselling} />
                <Route path="/creategrievence/scholarship/Reimbursement" component={Reimbursement} />
                <Route path="/creategrievence/scholarship/Portal" component={Portal} />
                <Route path="/creategrievence/scholarship/other" component={Other} />
                <Route path="/creategrievence/scholarship/Eligibilty" component={Eligibilty} />
                <Route path="/creategrievence/scholarship" component={Scholarship} />
                <Route path="/creategrievence/right_to_information/RTI-related" component={Rti} /> 
                <Route path="/creategrievence/right_to_information" component={RightToInformation} />
                <Route path="/creategrievence/complaints_vigilance/ragging" component={Ragging} />
                <Route path="/creategrievence/complaints_vigilance/others" component={Others} />
                <Route path="/creategrievence/complaints_vigilance/against_institute" component={Against_institute} />
                <Route path="/creategrievence/complaints_vigilance/certificate" component={Certificate} />
                <Route path="/creategrievence/complaints_vigilance/fee_payment" component={Fee_payment} />
                <Route path="/creategrievence/complaints_vigilance/vigilance" component={Vigilance} />
                <Route path="/creategrievence/facility/dispensary" component={Dispensary} />
                <Route path="/creategrievence/facility/road_and_pathway" component={Road} />
                <Route path="/creategrievence/facility/sports_infrastructure" component={Sports} />
                <Route path="/creategrievence/facility/sports_material" component={Sports_material} />
                <Route path="/creategrievence/facility/others" component={Otherss} />
                <Route path="/creategrievence/facility" component={Facility} />
                <Route path="/creategrievence/complaints_vigilance" component={ComplaintsToVigilance} />
                <Route path="/creategrievence/hostel/mess_fee" component={Mess_fee} />
                <Route path="/creategrievence/hostel/mess_food" component={Mess_food} />
                <Route path="/creategrievence/hostel/mess_menu" component={Mess_menu} />
                <Route path="/creategrievence/hostel/mess_staff" component={Mess_staff} />
                <Route path="/creategrievence/hostel/watersupply" component={Watersupply} />
                <Route path="/creategrievence/hostel/wifi" component={Wifi} />
                <Route path="/creategrievence/hostel/hostelstaff" component={Hostelstaff} />
                <Route path="/creategrievence/hostel/furniture" component={Furniture} />
                <Route path="/creategrievence/hostel/electricity" component={Electricity} />
                <Route path="/creategrievence/hostel/others" component={Othersss} />
                <Route path="/creategrievence/hostel" component={Hostel} />
                <Route path="/creategrievence" component={Creategrievence} />
                <Route path="/creategrievencelog" component={Creategrievencelog} />
                </Switch>
            </div>
            {/* <Scholarship /> */}
        </Auxillary>
    )
};

export default layout;