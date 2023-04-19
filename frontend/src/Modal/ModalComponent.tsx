import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export type ModalProps = {
  show: boolean;
  handleClose: () => void
}

export const ModalComponent: React.FC<ModalProps> = (props: ModalProps) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Planos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone`">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" placeholder="Digite seu telefone" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Solicitar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}