import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // sendTo trackJS/Sentry
    console.error("Error Boundary caught some stupid error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>ALERT!</h2>
          <p>There was an error with this page</p>
          <Link to="/">Click here</Link> to go back to the home page
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
