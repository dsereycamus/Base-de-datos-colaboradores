import { Alert as BootstrapAlert } from "react-bootstrap";

const Alert = ({ message, type }) => {
  if (!message) {
    return null;
  }

  return <BootstrapAlert variant={type}>{message}</BootstrapAlert>;
};

export default Alert;
