import Modal from 'react-modal';
import { Container } from './style';


interface NewTransactioModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactioModal({ isOpen, onRequestClose }: NewTransactioModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >

            <Container>
                <h2>cadastar informação</h2>

                <input
                    placeholder="titulo"
                />

                <input
                    type="number"
                    placeholder="valor"
                />


                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

        </Modal>
    );
}