import { get_patients } from "@/services/api/APIs"
import PatientsTable from "./PatientsTable"

function Patients() {
    
    return (
        <div>
            <PatientsTable />
        </div>
    )
}

export default Patients