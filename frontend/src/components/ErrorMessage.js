
import { Alert } from 'react-bootstrap';
import React from 'react'

const ErrorMessage = ({variant="danger",children}) => {
    return (
        <div>
              <Alert  variant={variant}>
                <strong>{children}</strong>
              </Alert>
        </div>
    )
}

export default ErrorMessage;
