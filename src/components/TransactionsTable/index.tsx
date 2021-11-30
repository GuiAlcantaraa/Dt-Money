
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);


    return (

        <Container>

            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>compras</td>
                        <td className="deposit">R$1.200,00</td>
                        <td>compras</td>
                        <td>26/11/2021</td>
                    </tr>


                    <tr>
                        <td>Cadeira Gamer</td>
                        <td className="withdraw">-R$999,00</td>
                        <td>compras</td>
                        <td>29/11/2021</td>
                    </tr>

                    <tr>
                        <td>Memoria Ram</td>
                        <td className="withdraw">-R$180,00</td>
                        <td>compras</td>
                        <td>26/11/2021</td>
                    </tr>
                </tbody>
            </table>



        </Container>
    );
}