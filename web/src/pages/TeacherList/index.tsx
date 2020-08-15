import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="weeek_day">Dia da semana</label>
                        <input type="text" id="weeek_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/22963494?s=460&u=33011adcaad4978ac765923873d76d29533bb3e1&v=4" alt="Gabriel Klein" />
                        <div>
                            <strong>Gabriel Klein</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Título do texto
                        <br /><br />
                        Texto
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;