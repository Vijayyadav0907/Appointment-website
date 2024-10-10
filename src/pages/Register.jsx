import { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'patient', // Default role
    gender: '' // Default gender
  });

  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      });

      const { message } = await response.json();

      if (!response.ok) {
        throw new Error(message);
      }

      toast.success(message); // Notify success
      navigate('/login'); // Redirect to login
    } catch (error) {
      toast.error(error.message); // Notify error
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="container max-w-1170 mx-auto">
        <div className="row">
          {/* Image Box */}
          <div className="col-lg-6 d-none d-lg-block bg-primary rounded-start">
            <figure className="rounded-start mb-0">
              <img src={signupImg} alt="Signup" className="img-fluid rounded-start" />
            </figure>
          </div>

          {/* Sign Up Form */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center py-10">
            <div className="bg-white p-4 rounded shadow-sm" style={{ width: '400px' }}>
              <h3 className="text-headingColor fs-4 mb-4">
                Create an <span className="text-primary">account</span>
              </h3>

              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Confirm Your Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">I am a</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                  </button>
                </div>
                <p className="mt-3 text-center">
                  Already have an account? <a href="/login" className="text-primary">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
