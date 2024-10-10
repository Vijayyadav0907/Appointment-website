import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";

export const Doctors = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container text-center py-5">
          <h2 className="display-4">Find a Doctor</h2>
          <div className="mx-auto mt-4 d-flex" style={{ maxWidth: '570px' }}>
            <input
              type="search"
              className="form-control rounded-start"
              placeholder="Search Doctor"
              style={{ flex: 1 }}
            />
            <button className="btn btn-primary rounded-end">Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            {doctors.map((doctor) => (
              <div className="col-md-4 mb-4" key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
