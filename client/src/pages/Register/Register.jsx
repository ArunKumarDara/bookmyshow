import { Form } from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-main">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">
          Welcome to Book My Show! Please Register
        </h1>
        <hr />
        <Form layout="vertical" className="mt-1">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <input type="password" />
          </Form.Item>
          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="Register" type="submit" />
            <Link to="/login" className="text-primary">
              Already have an account? Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
