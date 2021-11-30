import { Container } from "./styles"
import iconmeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
export function Summary() {

    return (

        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconmeImg} alt="Entradas" />
                </header>

                <strong>R$1200,00 </strong>
            </div>


            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>

                <strong>-R$1.180,00 </strong>
            </div>


            <div className="highlight-background">
                <header>
                    <p className="Total">Total</p>
                    <img src={totalImg} alt="Total" />
                </header>

                <strong>R$20,00 </strong>
            </div>

        </Container>

    )
}