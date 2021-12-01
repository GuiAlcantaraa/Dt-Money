import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactioModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root');

export function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function HandleOpenNewTransactionModal() {

        setIsNewTransactionModalOpen(true);
    }

    function HandleCloseNewTransactionModal() {

        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <GlobalStyle />

            <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal} />
            
            <Dashboard />

            <NewTransactioModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={HandleCloseNewTransactionModal}
            />



        </>
    );
}

